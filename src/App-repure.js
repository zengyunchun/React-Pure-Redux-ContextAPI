import React from "react";
// 样式也要引入，一切都是模块
import "./App.css";
// 图片必须引入进来，不能直接在下面写
import avatar from "./avatar.jpeg";

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

const Sidebar = ({ children }) => (
  // <div className="sidebar" >
  //   <UserStats user={user}></UserStats>
  // </div>
  <div className="sidebar">{children}</div>
)

const Nav = ({ children }) => (
  // <div className="nav">
  //   <UserAvatar user={user} size="small"></UserAvatar>
  // </div>
  <div className="nav">{children}</div>
);

// 箭头函数小括号直接返回
const Body = ({ sidebar, content }) => (
  // <div className="body">
  //   <Siderbar user={user}></Siderbar>
  //   <Content></Content>
  // </div>
  <div className="body">
    <Sidebar>{sidebar}</Sidebar>
    {content}
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
      // <div className="app">
      //   <Nav user={user}></Nav>
      //   <Body user={user}></Body>
      // </div>
      //   =>
      // 可以通过改变顶层结构，使需要用数据的地方提到顶层传值，通过 {children} 来传到下一层组件
      // 属性也可以传组件哟， 这样在底层并没有用到user, 都是顶层赋值，底层用childrenf放到想要的地方
      <div className="app">
        <Nav>
          <UserAvatar user={user} size="small" />
        </Nav>
        <Body sidebar={<UserStats user={user} />} content={<Content />} />
      </div>
    );
  }
}

export default App;
