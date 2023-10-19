import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
           
      <NavLink exact to="/" className="item">
                Home      
      </NavLink>
           
      <NavLink to="/myPage/김창복" className="item">
                MyPage      
      </NavLink>
           
      <NavLink to="/recommend" className="item">
                Recommand      
      </NavLink>
           
      <NavLink to="/search" className="item">
        Search  
      </NavLink>
           
      <NavLink to="/posts" className="item">
        Posts
      </NavLink>
           
      <NavLink to="/login" className="item">
                Login    
      </NavLink>
         
      <NavLink to="/mypage1" className="item">
                MyPage1    
      </NavLink>
         
    </div>
  );
};
export default Header;
