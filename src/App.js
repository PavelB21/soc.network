import React from "react";
import './App.css';
import  {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./Pages/Profile";
import Feed from "./Pages/Feed";
import Navbar from "./Ul/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
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
