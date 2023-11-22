import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header>
        <div class="bms">
            <img src="https://i.ibb.co/tXPSJJ5/bms.png" alt="bmsimage"/>  
        </div>
        <div class="srch">
                <i class="fa-solid fa-magnifying-glass srchtxt"></i>
                <input type="text" class="srch1" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>   
        </div>
        <div class="sgn">
            <div class="dropdown">
                <select id="location-dropdown">
                    <option value="hyderabad">Hyderabad</option>
                    <option value="chennai">Chennai</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                    <option value="delhi">Delhi</option>
                    <option value="vizag">Pune</option>
                    <option value="ahemadabhad">Ahemadabhad</option>
                </select>
            </div>
            <div id="btn">
                <button class="btn btn-danger">Sign in</button>
            </div>
            <div class="icbar">
                <div class="navbar">
                    <div class="menu-toggle" onclick="toggleMenu()">
                    <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                    </div>
                  </div>
            </div>
            <button  class="location" onclick="geolocation()">Get Location</button>
        </div> 
        <p id="out"></p>
        <p id="weather"></p> 
        <div class="selection">
            <div class="heading1">
                <div class="htxt1 ">
                    <a href="#" class="social-icon">Movies</a>
                    <a href="#" class="social-icon">Stream</a>  
                    <a href="#" class="social-icon">Events</a> 
                    <a href="#" class="social-icon">Plays</a>
                    <a href="#" class="social-icon">Sports</a> 
                    <a href="#" class="social-icon">Activities</a>  
                    <a href="#" class="social-icon">ICC MEN'S CRICKET WORLD CUP INDIA 2023</a>
                    <i class="fa-regular fa-lightbulb bulb1" onClick="changeMode()"></i>
                </div>
            </div>
            <div class="heading2">
                <div class="htxt2">
                    <a href="#" class="social-icon">ListYourShows</a>
                    <a href="#" class="social-icon">Corporates</a>  
                    <a href="#" class="social-icon">Offers</a> 
                    <a href="#" class="social-icon">Gift Cards</a> 
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;