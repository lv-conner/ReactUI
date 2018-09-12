var Source = {
    menuItems: [{
        text: "搜索网站",
        subItems: [{
                "id": "bing",
                "url": "https://www.bing.com",
                "text": "必应",
                "active":false
            },
            {
                "id": "baidu",
                "url": "https://www.baidu.com",
                "text": "百度",
                "active":false
            }, {
                "id": "local",
                "url": "/home/index",
                "text": "主页",
                "active":false
            }
        ],
    },{
        "text":"博客",
        "subItems":[
            {
                "id": "cnblog",
                "url": "https://www.cnblogs.com/",
                "text": "博客园",
                "active":false
            }
        ]
    }]
}
export {
    Source
};