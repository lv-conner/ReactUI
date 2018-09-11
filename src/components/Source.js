var data = [{
    text: "搜索网站",
    subItems: [{
            "id": "bing",
            "url": "https://www.bing.com"
        },
        {
            "id": "baidu",
            "url": "https://www.baidu.com"
        }
    ],
}]

var Source = {
    menuItems: [{
        text: "搜索网站",
        subItems: [{
                "id": "bing",
                "url": "https://www.bing.com",
                "text":"必应"
            },
            {
                "id": "baidu",
                "url": "https://www.baidu.com",
                "text":"百度"
            }
        ],
    }],
    tabs: [{
        text: "必应",
        navId: "bing",
        active: true
    }],
    "iframes":[
        {
            "navId":"bing",
            "url":"https://www.bing.com",
            "active":true
        }
    ]
}

export default data;

export {data,Source};