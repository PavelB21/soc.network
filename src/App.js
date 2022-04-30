import React from "react";
import './App.css';
import  {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./Pages/Profile";
import Feed from "./Pages/Feed";
import Sidebar from "./components/Sidebar";
import LoginForm from "./Login/LoginForm";
class App extends React.Component {
  state = {
    isLoggedIn: false,
  };

  handleLoginClick = (param) => {
    this.setState({isLoggedIn:param});
  }

  render() {
    return (
        <BrowserRouter>
          {this.state.isLoggedIn ? <Sidebar/> : <LoginForm onButtonClick = {this.handleLoginClick}/>}
          <Routes>
            <Route path="profile" element={<Profile/>}/>
          </Routes>
          <Routes>
            <Route path="feed" element={<Feed/>}/>
          </Routes>
        </BrowserRouter>
    );
  }
}
export default App;
