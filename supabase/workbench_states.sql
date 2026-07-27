-- 在 Supabase Dashboard > SQL Editor 中执行本文件。
-- 仅使用 auth.uid() 作为数据隔离依据，前端 publishable key 无法越权读取其他用户数据。

create table if not exists public.workbench_states (
  user_id uuid primary key references auth.users(id) on delete cascade,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.workbench_states enable row level security;

drop policy if exists "用户读取自己的工作台状态" on public.workbench_states;
create policy "用户读取自己的工作台状态"
on public.workbench_states for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "用户创建自己的工作台状态" on public.workbench_states;
create policy "用户创建自己的工作台状态"
on public.workbench_states for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "用户更新自己的工作台状态" on public.workbench_states;
create policy "用户更新自己的工作台状态"
on public.workbench_states for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
