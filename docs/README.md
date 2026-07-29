# PRD 文档索引

本目录是项目全部 PRD 的唯一存放位置。新增、移动或废弃 PRD 时，必须同步更新本索引。
需求发生变更时，必须同步更新对应 PRD 及其在本索引中的受影响信息。

## 按需加载

1. 先查阅本索引，依据标题、状态和摘要定位所需 PRD。
2. 仅打开与当前任务直接相关的文档，不批量加载全部 PRD 正文。
3. 需要关联信息时，再按索引中列出的路径打开对应文档。

## 文档规范

- 文件命名：`YYYY-MM-DD-主题.md`。
- PRD 文件必须位于本目录或其按业务划分的子目录中。
- 每份 PRD 顶部应包含标题、状态、负责人、创建日期和最后更新日期。
- 新增 PRD 后，在下方目录登记其路径、状态和一句话摘要。
- 每次涉及 PRD、原型、项目规则或本索引的变更，都必须在“变更记录”中登记变更日期、变更对象和变更说明。

## PRD 目录

| 标题 | 路径 | 状态 | 摘要 |
| --- | --- | --- | --- |
| 个人工作台移动端 PRD | `2026-07-27-个人工作台移动端PRD.md` | 草案 | 定义喝水、运动、体重、护肤、AI 每日学习、知识库及《首尔大学韩国语》学习的一体化手机端工作台。 |

## 变更记录

| 日期 | 变更对象 | 变更说明 |
| --- | --- | --- |
| 2026-07-27 | `AGENTS.md` | 新增 Git 版本管理规范，包括变更范围、分支、提交信息、PRD 关联、版本标签与忽略文件要求。 |
| 2026-07-27 | `AGENTS.md`、`docs/README.md` | 新增 Codex 行为偏好、PRD、UX、边界场景、产品文案、研发协作与不确定性规则；新增索引变更记录要求。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html`、`docs/README.md` | 新增个人工作台移动端 PRD 与可交互 HTML 原型；索引登记该需求并记录原型文件。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html` | 更新移动端导航为左侧汉堡菜单；新增 8 杯饮水、体重折线图、韩语发音与生词标记需求及原型交互。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html` | 将菜单及首页模块的文字缩写替换为图形图标。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html` | 新增喝水模块的最近 7 天每日记录与本周汇总；标注韩语原型内容仅为示例，正式版需导入已授权教材数据。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html` | 移除左侧菜单顶部“全部模块”标题，并将抽屉最大宽度调整为 288 CSS 像素。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html` | 调整菜单标题与关闭按钮尺寸；首页仅保留可直接操作的喝水、运动、体重、护肤任务，并新增快捷运动和体重提交。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html` | 移除首页模块辅助副标题；体重快捷值调整为昨天体重单行、较低两值一行、较高两值一行。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html` | 新增零基础 AI 每日学习模块，接入已核验公开视频、文字总结、完成状态、备注及本地学习历史。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html` | 调整首页体重快捷值为较低两值、昨天体重、较高两值的三行布局；首页运动支持填写时长或距离后保存。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html` | 新增运动详情当月次数、时长、距离、项目和按日记录汇总；护肤详情新增图标任务、自定义护理及按日展示图标的本月日历。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html` | 韩语模块支持第 1-10 课切换并移除顶部教材文案；每课增加课文讲解与练习册讲解入口，接入已核验的公开练习册视频并标注待匹配来源。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html` | 所有视频入口改为当前页内播放器打开，覆盖 AI 学习、韩语课文讲解、练习册讲解与博主作品入口；补充来源禁止嵌入时的页内提示。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html`、`docs/README.md` | 徒步记录新增地点、山峰或路线名称；运动详情新增徒步准备查询，展示内置示例路线的起始点、爬升、预计用时及交通时间、花费，并补充正式版路线服务依赖与异常规则。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html`、`docs/README.md` | 移除运动详情中的徒步准备查询与内置路线资料；保留徒步地点、山峰或路线名称的结果记录和月度展示。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html`、`docs/README.md` | 调整运动详情展示顺序为“记录今天”“本月汇总”“本月记录”，优先提供当日运动录入。 |
| 2026-07-27 | `docs/2026-07-27-个人工作台移动端PRD.md`、`prototype/personal-workbench-mobile.html`、`docs/README.md` | 将运动模块的本月记录改为日历展示；日期显示运动图标，点击后在日历下方查看当天运动明细。 |
| 2026-07-27 | `prototype/personal-workbench-mobile.html`、`prototype/manifest.webmanifest`、`prototype/sw.js`、`prototype/supabase-config.js`、`prototype/assets/fox-icon-1024.png`、`supabase/`、`docs/2026-07-27-个人工作台移动端PRD.md` | 接入 Supabase 邮箱免密登录与工作台状态快照同步；新增 PWA 安装、离线应用壳、小狐狸图标、RLS 建表脚本及 Supabase 配置说明。 |
| 2026-07-27 | `prototype/personal-workbench-mobile.html`、`prototype/manifest.webmanifest`、`prototype/sw.js`、`prototype/assets/stage-clown-icon-1024.png`、`docs/2026-07-27-个人工作台移动端PRD.md` | 将 PWA 的浏览器、iOS 和桌面安装图标替换为小丑舞台图标，并更新离线缓存版本。 |
| 2026-07-27 | `prototype/personal-workbench-mobile.html`、`docs/2026-07-27-个人工作台移动端PRD.md` | 邮箱免密登录改用可跨移动端邮件客户端回跳的隐式认证流程，并增加失效或已使用链接的提示。 |
| 2026-07-29 | `prototype/personal-workbench-mobile.html`、`prototype/sw.js`、`docs/2026-07-27-个人工作台移动端PRD.md`、`docs/README.md` | 新增知识库模块：支持分类目录、文章化记录、自动标题、创建时间、备注、单张压缩图片、文章详情与删除；知识库数据纳入邮箱登录后的状态快照同步，并更新离线缓存版本。 |
| 2026-07-29 | `prototype/personal-workbench-mobile.html`、`prototype/sw.js`、`supabase/knowledge_articles.sql`、`supabase/functions/record-knowledge/index.ts`、`supabase/config.toml`、`supabase/README.md`、`docs/2026-07-27-个人工作台移动端PRD.md` | 新增知识库自动录入方案：知识库文章迁移至独立表并按登录账号隔离；新增由 Codex 调用的受保护 Supabase Edge Function，支持“记录到知识库”指令自动写入，并更新离线缓存版本。 |
