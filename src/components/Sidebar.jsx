import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Customers",
            name:"Customers",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Income",
            name:"Income",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Promote",
            name:"Promote",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Help",
            name:"Help",
            icon:<FaThList/>
        }
    ]
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
    };
    return (
        <div className="container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="Dash">Dashboard</h1>
                    <div style={{marginLeft: isOpen ? "35px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
        </div>

        {/* --------searchbar----------- */}
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>
                <i className="fa fa-search"></i>
            </button>
        </div>
        {/* ---------------------------- */}


        <footer className="footer">
            &copy; {new Date().getFullYear()} done by Shivam Kumar
        </footer>

        <main>{children}</main>
        </div>
        
    );
};

export default Sidebar;