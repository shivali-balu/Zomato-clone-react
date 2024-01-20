import React from "react"; 
import "./header.css" ;  

const Header = () =>{
    return ( 

        //Logo
        <div className="max-width header">
          <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo" className="header-logo"/> 


          <div className="header-right"> 
            <div className="header-location-search-container">
              <div className="location-wrapper">
                <div className="location-icon-name">
                  <i className="fa fa-location-dot absolute-center location-icon"/> 
                  <div>Coimbatore, India</div> 
                </div> 
                <i className ="fa-solid fa-caret-down absolute-center"></i>
              </div>  


              <div className="location-search-separator"></div> 
              
               
              <div className="header-search-bar">
              <i className="fa fa-search absolute-center search-icon"/> 
              <input placeholder="Search for restaurant , cuisine or a dish" className="search-input"/>
              </div>
            </div> 

            <div className="profile-wrapper">
              <img src="https://b.zmtcdn.com/data/user_profile_pictures/926/f451f7648853bedb36267bc4645a5926.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="profile" className="header-profile-image"/> 
              <span className="header-username">Shivali</span> 
              <i className="fa-solid fa-angle-down absolute-center profile-options-icon"></i>
            </div>
          </div>
        </div> 


       //Location + searchbar 
       
    )
} 
export default Header ; 