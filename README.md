# react + typeScript + antd + redux|hooks 构建后台管理系统demo
### 其中用了redux和hooks，主要是为了进行两者的对比
----------
> 左侧菜单使用antd组件来搭建动态菜单，目前只适配了一级菜单。

> [Hook](https://react.docschina.org/docs/hooks-intro.html)使用：
> 1. 其中useState类似于vue组件中得data函数中定义变量。
> 2. useEffect对应的是生命周期函数，可以看作react中componentDidMount，componentDidUpdate 和 componentWillUnmount这三个生命周期函数的组合。
> 3. useEffect其中包含了vue中watch监听功能。

> [Redux](https://cn.redux.js.org/)：Redux是JavaScript应用的状态容器，提供可预测的状态管理。（类似于Vuex）
> 应用中所有的state都以一个对象树的形式储存在一个单一的store中。 惟一改变state的办法是触发action，一个描述发生什么的对象。为了描述action如何改变state树，你需要编写reducers。
> 
> Redux的核心由三部分组成：Store, Action, Reducer。`store`  ➡️  `dispatch`  ➡️   `action`  ⬅️  `reducer`
> 1. `Store` : 是个对象，贯穿你整个应用的数据都应该存储在这里。
> 2. `Action`： 是个对象，必须包含type这个属性，reducer将根据这个属性值来对store进行相应的处理。除此之外的属性，就是进行这个操作需要的数据。
> 3. `Reducer`: 是个函数。接受两个参数：要修改的数据(state) 和 action对象。根据action.type来决定采用的操作，对state进行修改，最后返回新的state。

![关系图解](https://segmentfault.com/img/remote/1460000011473976?w=1149&h=554)
 ``` javascript
import { createStore } from 'redux';

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 注意：当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
  console.log(store.getState())
);

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
```

> [React Router](https://github.com/react-guide/react-router-cn)传参方式：
> 1.Params传参：
