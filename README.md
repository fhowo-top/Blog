# 风绘的博客

这里是风绘的技术小窝，写博客、敲代码、偶尔发呆。

基于 [Chirping Astro](https://github.com/kannansuresh/chirping-astro) 主题构建的个人博客。

## 技术栈

- [**Astro v6**](https://astro.build/) — 静态站点生成
- [**Tailwind CSS v4**](https://tailwindcss.com/) + [**daisyUI v5**](https://daisyui.com/)
- [**Pagefind**](https://pagefind.app/) — 静态全文搜索
- [**Giscus**](https://giscus.app/) — GitHub Discussions 评论
- [**KaTeX**](https://katex.org/) — LaTeX 数学公式
- [**Shiki**](https://shiki.style/) — 代码语法高亮
- Markdown / MDX 内容写作

## 目录结构

```
├── src/
│   ├── config.ts          # 站点配置
│   ├── content/
│   │   ├── posts/zh/      # 博客文章
│   │   └── pages/zh/      # 静态页面
│   ├── components/        # Astro 组件
│   ├── layouts/           # 页面布局
│   ├── pages/             # 路由页面
│   └── i18n/              # 国际化
├── public/                # 静态资源
└── astro.config.mjs       # Astro 配置
```

## 许可证

基于 [MIT](LICENSE) 协议发布。

主题原项目: [Chirping Astro](https://github.com/kannansuresh/chirping-astro) by [Kannan Suresh](https://github.com/kannansuresh)。
