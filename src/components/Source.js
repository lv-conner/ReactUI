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
            }
        ]
    },{
        text:"主页",
        subItems:[
            {
                id:"about",
                url:"/Home/about",
                text:"关于",
                active:false
            }
        ]
    },{
        text:"报表",
        subItems:[
            {
                id:"report",
                url:"/report/index",
                text:'报表',
                active:false
            }
        ]
    }]
}
export {
    Source
};