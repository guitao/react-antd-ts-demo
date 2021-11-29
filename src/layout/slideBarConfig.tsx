
const slideBarConfig = [

    { name: "Hook使用", icon: "copy", url: "/home", hideInMenu: false, children: [] },
    { name: "Redux使用", icon: "inbox", url: "/demo", hideInMenu: false, children: [] },
    { name: "Redux-saga使用", icon: "inbox", url: "/redux_saga_demo", hideInMenu: false, children: [] },
    { name: "路由传参", icon: "inbox", url: "/demo/detail", hideInMenu: true, children: [] },
    { name: "test", icon: "inbox", url: "/test", hideInMenu: false, children: [] },
    {
        name: "SubMenu", icon: "appstore", url: "/sub", children: [
            { name: "SubMenu_1", url: "/sub/sub_1" },
            { name: "SubMenu_2", url: "/sub/sub_2" }
        ]
    },
];

export default slideBarConfig;