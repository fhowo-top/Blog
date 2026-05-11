---
title: 关于
description: Chirping Astro — 一款受 Chirpy 启发的多语言 Astro 主题，为写作者与技术爱好者打造。
translationKey: about
---

**Chirping Astro** 是一个开源主题，将广受欢迎的
[Chirpy Jekyll 主题](https://chirpy.cotes.page/) 的风格与体验带到了
[Astro](https://astro.build/) 平台 — 具备一流的国际化支持、现代化的工具链，默认零 JavaScript 阅读体验。

它适用于个人博客、技术日志和文档站点，这些场景下排版、搜索以及安静专注的阅读比动画和广告更重要。

## 功能特性

- **阅读优先布局** — 固定左侧边栏，包含头像、垂直导航、主题切换和社交链接；居中主内容区最大宽度 1250px；右侧栏展示"最近更新"和"热门标签"。
- **浅色与深色主题** — 原版 Chirpy 调色板，移植到 daisyUI v5 设计令牌，模式切换带有圆形展开过渡效果。
- **多语言内容（EN + FR + ZH）** — 英文在根路径展示，法文在 `/fr/` 下，中文在 `/zh/` 下。文章通过 `translationKey` 配对，顶部语言切换器可在翻译版本间跳转。在 `src/config.ts` 中设置 `multilingual: false` 可切换为单语言站点。
- **Markdown + MDX** — Astro 内容集合，带类型化的 frontmatter、Shiki 语法高亮、GFM、脚注、自动目录以及内置的 `<Callout>` 组件。
- **LaTeX 数学公式** — 每篇文章可通过 `math: true` 选择性启用 KaTeX 支持。
- **即时搜索** — [Pagefind](https://pagefind.app/) 在构建时生成静态搜索索引；搜索弹窗按需加载。
- **评论系统** — [Giscus](https://giscus.app/) 集成，基于 GitHub Discussions，支持单篇文章关闭评论。
- **平滑导航** — Astro 视图过渡，带有微妙的淡入效果和无障碍的减弱动画回退方案。
- **开箱即用的 SEO** — OpenGraph、Twitter Cards、按语言生成的 RSS Feed、hreflang 标签和站点地图。

## 技术栈

- [**Astro 6.x**](https://astro.build/) — 内容集合、MDX、RSS 和视图过渡
- [**Tailwind CSS v4**](https://tailwindcss.com/) 通过 `@tailwindcss/vite` 插件，搭配 [**daisyUI v5**](https://daisyui.com/) 主题系统
- [**Pagefind**](https://pagefind.app/) 静态搜索
- [**Giscus**](https://giscus.app/) 评论系统
- [**Shiki**](https://shiki.style/)、[**KaTeX**](https://katex.org/) 和 [**Lucide**](https://lucide.dev/) 图标

## 打造你自己的站点

几乎所有配置都通过 `src/config.ts` 这一个带类型的配置文件来管理 — 站点标题、作者、导航、社交链接、每页文章数、默认语言、Giscus 凭据以及功能开关。修改后重启 `bun run dev` 即可。

新文章放在 `src/content/posts/<语言>/` 中。通过在两份文件中设置相同的 `translationKey` 来配对翻译版本。本站演示中的 frontmatter 参考说明了每个字段的用途。

## 许可证与致谢

基于 **MIT 许可证** 发布。视觉设计致敬
[Cotes Chung 的 Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)；
Astro 实现、内容和代码均为独立作品。