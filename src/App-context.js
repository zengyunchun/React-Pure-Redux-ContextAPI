import React from "react";
// 样式也要引入，一切都是模块
import "./App.css";
// 图片必须引入进来，不能直接在下面写
import avatar from "./avatar.jpeg";


let UserContext = React.createContext();

const UserAvatar = ({ size }) => (
  <UserContext.Consumer> 
  {user => (
      <img className={`user avatar ${size || ""}`}
        alt="user avatar"
        src={user.avatar}></img>
    )}
  </UserContext.Consumer>
)

const UserStats = () => (
  <UserContext.Consumer>
    {
      user => (
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
      )
    }
  </UserContext.Consumer>
)

const Content = () => (
  <div className="content">main content here</div>
)

const Siderbar = () => (
  <div className="sidebar" >
    <UserStats></UserStats>
  </div>
)

const Nav = () => (
  <div className="nav">
    <UserAvatar size="small"></UserAvatar>
  </div>
);

// 箭头函数小括号直接返回
const Body = () => (
  <div className="body">
    <Siderbar></Siderbar>
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
        <UserContext.Provider value={this.state.user}>
          <Nav></Nav>
          <Body></Body>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
