import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json; charset=utf-8",
};

function suggestedTitle(content: string) {
  const text = content.replace(/\s+/g, " ").trim();
  const first = text.split(/[。！？.!?\n]/)[0].trim();
  const base = (first || text).slice(0, 24);
  return `${base}${base.length < (first || text).length ? "…" : ""}` || "未命名记录";
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (request.method !== "POST") return new Response(JSON.stringify({ error: "仅支持 POST 请求" }), { status: 405, headers: corsHeaders });

  const secret = Deno.env.get("KNOWLEDGE_INGEST_TOKEN");
  const supplied = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (!secret || !supplied || supplied !== secret) {
    return new Response(JSON.stringify({ error: "录入密钥无效" }), { status: 401, headers: corsHeaders });
  }

  const payload = await request.json().catch(() => null);
  const ownerEmail = typeof payload?.owner_email === "string" ? payload.owner_email.trim().toLowerCase() : "";
  const content = typeof payload?.content === "string" ? payload.content.trim() : "";
  const category = typeof payload?.category === "string" && payload.category.trim() ? payload.category.trim() : "未分类";
  const note = typeof payload?.note === "string" ? payload.note.trim() : "";
  const title = typeof payload?.title === "string" && payload.title.trim() ? payload.title.trim() : suggestedTitle(content);

  if (!/^\S+@\S+\.\S+$/.test(ownerEmail)) return new Response(JSON.stringify({ error: "请提供有效的用户邮箱" }), { status: 400, headers: corsHeaders });
  if (content.length < 5 || content.length > 10000) return new Response(JSON.stringify({ error: "正文长度必须在 5 到 10000 个字符之间" }), { status: 400, headers: corsHeaders });
  if (title.length > 60 || category.length > 24 || note.length > 2000) return new Response(JSON.stringify({ error: "标题、分类或备注长度超出限制" }), { status: 400, headers: corsHeaders });

  const url = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !serviceRoleKey) return new Response(JSON.stringify({ error: "函数服务配置不完整" }), { status: 500, headers: corsHeaders });
  const admin = createClient(url, serviceRoleKey);
  const users = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
  const owner = users.data.users.find((user) => user.email?.toLowerCase() === ownerEmail);
  if (!owner) return new Response(JSON.stringify({ error: "未找到该邮箱对应的已登录用户" }), { status: 404, headers: corsHeaders });

  const article = {
    id: `assistant-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`,
    user_id: owner.id,
    title,
    category,
    content,
    note,
    source: "assistant",
  };
  const saved = await admin.from("knowledge_articles").insert(article).select("id,title,category,created_at").single();
  if (saved.error) return new Response(JSON.stringify({ error: "知识库保存失败" }), { status: 500, headers: corsHeaders });
  return new Response(JSON.stringify({ article: saved.data }), { status: 201, headers: corsHeaders });
});
