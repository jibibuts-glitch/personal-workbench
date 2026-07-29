-- 在 Supabase Dashboard > SQL Editor 中执行本文件。
-- 知识库文章独立于工作台状态快照，便于安全接收自动记录。

create table if not exists public.knowledge_articles (
  id text primary key,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 60),
  category text not null default '未分类' check (char_length(category) between 1 and 24),
  content text not null check (char_length(content) between 5 and 10000),
  note text not null default '' check (char_length(note) <= 2000),
  image_data_url text,
  source text not null default 'app' check (source in ('app', 'assistant')),
  created_at timestamptz not null default now()
);

create index if not exists knowledge_articles_user_created_at_idx
on public.knowledge_articles (user_id, created_at desc);

alter table public.knowledge_articles enable row level security;

drop policy if exists "用户读取自己的知识库文章" on public.knowledge_articles;
create policy "用户读取自己的知识库文章"
on public.knowledge_articles for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "用户创建自己的知识库文章" on public.knowledge_articles;
create policy "用户创建自己的知识库文章"
on public.knowledge_articles for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "用户更新自己的知识库文章" on public.knowledge_articles;
create policy "用户更新自己的知识库文章"
on public.knowledge_articles for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "用户删除自己的知识库文章" on public.knowledge_articles;
create policy "用户删除自己的知识库文章"
on public.knowledge_articles for delete
to authenticated
using (auth.uid() = user_id);
