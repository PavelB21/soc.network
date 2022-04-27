import React from "react";
import './App.css';
import  {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./Pages/Profile";
import Feed from "./Pages/Feed";
import Sidebar from "./components/Sidebar";
import Post from "../src/components/Post";
function App() {
  return (
  <BrowserRouter>
      <Sidebar/>
    <Routes>
      <Route path="profile" element={<Profile/>}/>
    </Routes>
    <Routes>
      <Route path="feed" element={<Feed/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
