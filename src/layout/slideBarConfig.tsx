
const slideBarConfig = [
    {
        name: "列表", icon: "ordered-list", url: "/list", children: [
            { name: "详情", url: "/list/detail", hidden: true },
        ]
    },
    {
        name: "系统管理", icon: "appstore", url: "/system", children: [
            { name: "账号管理", url: "/system/accountManage" },
            { name: "角色管理", url: "/system/roleManage" }
        ]
    },
    { name: "兄弟组件传值", icon: "hdd", url: "/childToChild", hidden: true, },
    { name: "父组件向子组件传值", icon: "snippets", url: "/parentToChild" },
    { name: "子组件向父组件传值", icon: "copy", url: "/childToParent" },
    { name: "状态管理Redux", icon: "inbox", url: "/redux" }
];

export default slideBarConfig;