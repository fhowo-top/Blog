export const messages = {
  zh: {
    'site.skipToContent': '跳转到内容',

    'nav.home': '首页',
    'nav.posts': '文章',
    'nav.tags': '标签',
    'nav.categories': '分类',
    'nav.archives': '归档',
    'nav.about': '关于',
    'nav.search': '搜索',
    'nav.toggleMenu': '切换菜单',

    'theme.toggle': '切换主题',
    'theme.light': '浅色',
    'theme.dark': '深色',
    'theme.system': '跟随系统',

    'post.publishedOn': '发布于',
    'post.updatedOn': '更新于',
    'post.readingTime': '分钟阅读',
    'post.toc': '目录',
    'post.tags': '标签',
    'post.categories': '分类',
    'post.previous': '上一篇',
    'post.next': '下一篇',
    'post.comments': '评论',
    'post.commentsDisabled': '此文章已禁用评论。',
    'post.commentsSetupTitle': '评论需要配置',
    'post.commentsSetupBody':
      'Giscus 已启用但尚未配置。请添加仓库详情以开始收集评论。',
    'post.commentsSetupStep1':
      '访问 `giscus.app` 并选择你的公开 GitHub 仓库（需启用 Discussions）。',
    'post.commentsSetupStep2':
      '复制生成的 `data-repo-id`、`data-category` 和 `data-category-id` 值。',
    'post.commentsSetupStep3':
      '在 `.env` 文件中设置 `PUBLIC_GISCUS_ENABLED`、`PUBLIC_GISCUS_REPO`、`PUBLIC_GISCUS_REPO_ID`、`PUBLIC_GISCUS_CATEGORY` 和 `PUBLIC_GISCUS_CATEGORY_ID` 环境变量。',
    'post.commentsSetupStep4':
      '重新构建站点 — 此提示将被实时评论区替换。',
    'post.commentsSetupDocs': '打开 giscus.app',
    'post.share': '分享',
    'post.copyLink': '复制链接',
    'post.copied': '已复制！',
    'post.author': '作者',

    'list.allPosts': '全部文章',
    'list.empty': '暂无文章。',
    'list.tagPosts': '标签下的文章',
    'list.categoryPosts': '分类下的文章',
    'list.totalPosts': '篇文章',
    'list.totalPostsOne': '篇文章',

    'pagination.previous': '上一页',
    'pagination.next': '下一页',
    'pagination.page': '第',
    'pagination.of': '/',

    'archives.title': '归档',
    'archives.empty': '暂无文章。',

    'tags.title': '标签',
    'tags.empty': '暂无标签。',

    'categories.title': '分类',
    'categories.empty': '暂无分类。',

    'search.title': '搜索',
    'search.placeholder': '搜索站点内容',
    'search.openLabel': '打开搜索',
    'search.closeLabel': '关闭搜索',
    'search.empty': '无结果。',
    'search.loading': '加载搜索中…',
    'search.typeToStart': '输入关键词搜索…',
    'search.hintShortcut': '按 / 键打开搜索',
    'search.searching': '搜索中…',
    'search.noResultsFor': '未找到结果',
    'search.resultsCount': '条结果',
    'search.resultsCountOne': '条结果',
    'search.hintNavigate': '导航',
    'search.hintSelect': '打开',
    'search.clearLabel': '清除',

    'code.copy': '复制',
    'code.copied': '已复制',

    '404.title': '页面未找到',
    '404.description': '你寻找的页面已经飞走了。',
    '404.cta': '返回首页',

    'panel.recentlyUpdated': '最近更新',
    'panel.trendingTags': '热门标签',

    'footer.poweredBy': '由',
    'footer.theme': '主题',
    'footer.privacy': '隐私政策',
    'footer.copyright': '版权所有。',
  },
} as const;

export type UIKey = keyof (typeof messages)['zh'];
