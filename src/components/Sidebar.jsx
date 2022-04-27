import React from 'react';
import '../Style/SidebarSrtyle.css';
import {Link} from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="top-menu">
                <ul className="left-menu">
                    <li><Link to="/profile">Профиль</Link></li>
                    <li><Link to="/feed">Новости</Link></li>
                </ul>
        </div>
    );
};

export default Sidebar;