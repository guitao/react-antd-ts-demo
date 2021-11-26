
const slideBarConfig = [

    { name: "Hook使用", icon: "copy", url: "/home", hideInMenu: false, children: [] },
    { name: "Redux使用", icon: "inbox", url: "/demo", hideInMenu: false, children: [] },
    { name: "Redux-saga使用", icon: "inbox", url: "/redux_saga_demo", hideInMenu: false, children: [] },
    { name: "路由传参", icon: "inbox", url: "/demo/detail", hideInMenu: true, children: [] },
    { name: "test", icon: "inbox", url: "/test", hideInMenu: false, children: [] },
    {
        name: "系统管理", icon: "appstore", url: "/system", children: [
            { name: "账号管理", url: "/system/accountManage" },
            { name: "角色管理", url: "/system/roleManage" }
        ]
    },
];

export default slideBarConfig;