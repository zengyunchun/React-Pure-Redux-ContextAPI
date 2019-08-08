import React from "react";
// 样式也要引入，一切都是模块
import "./App.css";
// 图片必须引入进来，不能直接在下面写
import avatar from "./avatar.jpeg";

import {createStore} from 'redux';
import {connect, provider} from 'react-redux';

const UserAvatar = ({ user, size }) => (
  <img className={`user avatar ${size || ""}`}
    alt="user avatar"
    src={user.avatar}></img>
)

const UserStats = ({ user }) => (
  <div className="user-stats">
    <div>
      <UserAvatar user={user}></UserAvatar>
      {user.name}
    </div>
    <div className="stats">
      <div>{user.followers} Followers</div>
      <div>Follwing {user.following}</div>
    </div>
  </div>
)

const Content = () => (
  <div className="content">main content here</div>
)

const Siderbar = ({ user }) => (
  <div className="sidebar" >
    <UserStats user={user}></UserStats>
  </div>
)

const Nav = ({ user }) => (
  <div className="nav">
    <UserAvatar user={user} size="small"></UserAvatar>
  </div>
);

// 箭头函数小括号直接返回
const Body = ({ user }) => (
  <div className="body">
    <Siderbar user={user}></Siderbar>
    <Content></Content>
  </div>
)

class App extends React.Component {
  state = {
    user: {
      avatar: avatar,
      name: "jason",
      followers: 1234,
      following: 4321
    }
  }

  /**
   * App
   *  Nav
   *    UserAvatar
   *  Body
   *    SideBar
   *      UserStats
   *        UserAvatar
   *    Content
   */
  render() {
    const { user } = this.state;
    return (
      <div className="app">
        <Nav user={user}></Nav>
        <Body user={user}></Body>
      </div>
    );
  }
}

export default App;
