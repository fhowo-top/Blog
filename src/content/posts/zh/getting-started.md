---
title: '快速入门'
description: '你在 Chirping Astro 的第一篇文章。了解如何配置站点、撰写文章以及部署。'
pubDate: 2026-05-03
tags: [快速入门, 教程]
categories: [指南]
translationKey: getting-started
pinned: true
toc: true
---

欢迎来到你的新博客！这篇示例文章将带你了解 **Chirping Astro** 的基本用法。

## 配置你的站点

打开 `src/config.ts` 并更新：

- **title** — 你的站点 / 博客名称
- **description** — 显示在搜索引擎和 RSS 中
- **author.name** — 显示在侧边栏和页脚中
- **url** — 你的生产环境 URL（通过 `SITE_URL` 环境变量设置）

## 环境变量

将 `.env.example` 复制为 `.env`：

```bash
cp .env.example .env
```

关键变量：

| 变量                   | 用途                                                |
| ---------------------- | --------------------------------------------------- |
| `SITE_URL`             | 你的生产环境 URL（例如 `https://myblog.com`）         |
| `BASE_PATH`            | GitHub Pages 部署时设为 `/<仓库名>`，否则留空         |
| `PUBLIC_GITHUB_HANDLE` | 在侧边栏显示 GitHub 图标                             |
| `PUBLIC_GISCUS_*`      | 启用 Giscus 评论（[配置指南](https://giscus.app)）    |

## 撰写文章

在 `src/content/posts/zh/` 中创建 Markdown 文件：

```markdown
---
title: '我的文章标题'
description: '用于 SEO 和列表的简短描述。'
pubDate: 2026-05-03
tags: [标签1, 标签2]
categories: [分类]
---

在这里使用标准 Markdown 撰写内容。
```

### 可用的 Frontmatter 字段

| 字段          | 必填 | 说明                   |
| ------------- | ---- | ---------------------- |
| `title`       | 是   | 文章标题（1–140 字符）  |
| `description` | 是   | Meta 描述（1–280 字符） |
| `pubDate`     | 是   | 发布日期（ISO 格式）    |
| `tags`        | 否   | 标签数组               |
| `categories`  | 否   | 分类数组               |
| `heroImage`   | 否   | 特色图片路径           |
| `pinned`      | 否   | 置顶到列表顶部         |
| `toc`         | 否   | 显示目录               |
| `draft`       | 否   | 生产环境隐藏           |

## 使用 MDX

对于更丰富的内容，使用 `.mdx` 文件来引入组件：

```mdx
---
title: 'MDX 示例'
description: '在文章中使用组件。'
pubDate: 2026-05-03
tags: [mdx]
categories: [指南]
---

import Callout from '../../components/Callout.astro';

<Callout type="tip">你可以在文章中直接嵌入 Astro 组件！</Callout>
```

## 部署

推送到 GitHub 的 `main` 分支。内置的工作流会自动构建并部署到 GitHub Pages。

对于自定义域名，在仓库的环境变量中设置 `SITE_URL`，路径为 **Settings → Environments → github-pages**。

## 了解更多

- [完整文档](https://github.com/kannansuresh/chirping-astro)
- [在线演示](https://kannansuresh.github.io/chirping-astro)
- [Astro 文档](https://docs.astro.build)

---

祝你写博客愉快！准备好发布自己的内容时，可以删除这篇文章。