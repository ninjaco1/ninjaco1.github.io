import React from 'react';
import '../Header.css';

function Header(props){
    return(
        <div className="headerBox">
            <h3 className="header-title" >Profolio</h3>
            <div className="head-container">
                <div id="header-component">About</div>
                <div id="header-component">Tab 1</div>
                <div id="header-component">Tab 2</div>
            </div>
            
        </div>
    );
}

export default Header;