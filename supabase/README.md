# Supabase 配置说明

## 1. 创建数据表

在 Supabase Dashboard 的 `SQL Editor` 中执行 [workbench_states.sql](./workbench_states.sql)。脚本会创建 `workbench_states` 表并启用行级安全策略。

## 2. 配置邮箱登录

在 `Authentication > Providers > Email` 中启用邮箱登录。部署网站后，在 `Authentication > URL Configuration` 中设置：

- `Site URL`：部署后的应用地址，例如 `https://your-domain.example/prototype/personal-workbench-mobile.html`
- `Redirect URLs`：同一个应用地址；本地调试地址可按需添加 `http://localhost:端口/prototype/personal-workbench-mobile.html`

登录邮件只在已列入 Redirect URLs 的 HTTP/HTTPS 地址回跳，不能使用 `file://` 本地文件地址。

## 3. 发布前检查

- `prototype/supabase-config.js` 只包含 Project URL 和 publishable key，可公开发布。
- 不要把 Supabase 的 `service_role key` 写入前端文件、Git 仓库或聊天记录。
- 登录同一邮箱后，应用会用 `workbench_states` 中该用户的状态快照覆盖新设备的本机初始示例数据。
