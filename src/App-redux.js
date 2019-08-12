import React from "react";
// 样式也要引入，一切都是模块
import "./App.css";
// 图片必须引入进来，不能直接在下面写
import avatar from "./avatar.jpeg";
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

// state： 状态
const SET_USER = "SET_USER";
const initState = {};

// reducer: 合成新的state，让react去重新刷新渲染整个dom数
function reducer(state = initState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
}

// actionCreator： 用于返回需要更改的状态类型
function setUser() {
  return {
    type: SET_USER,
    user: {
      avatar: avatar,
      name: "jason",
      followers: 1234,
      following: 4321
    }
  }
}

// createStore： 创建一个store, 总的控制所有
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// default to dispatch set user
store.dispatch(setUser());

const mapStateToProps = state => ({
  user: state.user
})

// 这里connect把state中的user放到props上面，然后再解构到user的参数给组件使用
const UserAvatar = connect(mapStateToProps)(({ user, size }) => (
  <img className={`user avatar ${size || ""}`}
    alt="user avatar"
    src={user.avatar}></img>
));


const UserStats = connect(mapStateToProps)(({ user }) => (
  <div className="user-stats">
    <div>
      <UserAvatar></UserAvatar>
      {user.name}
    </div>
    <div className="stats">
      <div>{user.followers} Followers</div>
      <div>Follwing {user.following}</div>
    </div>
  </div>
));

const Nav = () => (
  <div className="nav">
    <UserAvatar size="small"></UserAvatar>
  </div>
)


const Siderbar = () => (
  <div className="sidebar" >
    <UserStats ></UserStats>
  </div>
)

const Content = () => (
  <div className="content">main content here</div>
)

const Body = () => (
  <div className="body">
    <Siderbar></Siderbar>
    <Content></Content>
  </div>
)

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Nav></Nav>
      <Body></Body>
    </div>
  </Provider>
)

export default App;
