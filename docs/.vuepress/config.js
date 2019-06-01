module.exports = {
    base: '/html5/',
    title: 'HTML5演示教程',
    description: '让学习HTML5更简洁',
    head: [
        ['link', {rel: 'icon', href: 'favicon.ico'}]
    ],
    host: '172.28.184.16',
    port: '9300',
    themeConfig: {
        lastUpdated: true,
        displayAllHeaders: true,
        nav: [
            {text: 'Github', link: 'https://github.com/debingfeng'},
            {text: '掘金', link: 'https://juejin.im/user/5cdcc7b1f265da036902bcc7'}
        ],
        sidebarDepth: 1,
        sidebar: [
            {
                title: '标签使用',
                collapsable: false,
                children: [
                    '/elements/',
                ]
            },
            {
                title: 'HTML5-API',
                collapsable: false,
                children: [
                    '/apis/',
                ]
            },
            {
                title: '最新规范',
                collapsable: false,
                children: [
                    '/other/',
                ]
            },
        ]
    }

};

