import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const onLocationChange = (e) => {
    dispatch({ type: "SELECT_VALUE", payload: e.target.value });
  };
  return (
    <header>
      <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
      <div className="bms">
        <img src="https://i.ibb.co/tXPSJJ5/bms.png" alt="bmsimage" />
      </div>
      <div className="srch">
        <i class="fa-solid fa-magnifying-glass srchtxt"></i>
        <input
          type="text"
          className="srch1"
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
        />
      </div>
      <div className="sgn">
        <div className="dropdown">
          <select id="location-dropdown" onChange={onLocationChange}>
            <option value={1}>Hyderabad</option>
            <option value={2}>Chennai</option>
            <option value={3}>Kochi</option>
            <option value={4}>Bengaluru</option>
            <option value={5}>Mumbai</option>
            <option value={6}>Pune</option>
            <option value={7}>Delhi</option>
            <option value={8}>Ahemadabhad</option>
            <option value={9}>Kolkata</option>
          </select>
        </div>
        <div id="btn">
          <button className="btn btn-danger">Sign in</button>
        </div>
        <div className="icbar">
          <div className="navbar">
            <div className="menu-toggle" onClick="toggleMenu()">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <button className="location" onclick="geolocation()">
          Get Location
        </button>
      </div>
      <p id="out"></p>
      <p id="weather"></p>
      <div className="selection">
        <div className="heading1">
          <div class="htxt1 ">
            <a href="#" className="social-icon">
              Movies
            </a>
            <a href="#" className="social-icon">
              Stream
            </a>
            <a href="#" className="social-icon">
              Events
            </a>
            <a href="#" className="social-icon">
              Plays
            </a>
            <a href="#" className="social-icon">
              Sports
            </a>
            <a href="#" className="social-icon">
              Activities
            </a>
            <a href="#" className="social-icon">
              ICC MEN'S CRICKET WORLD CUP INDIA 2023
            </a>
            <i
              className="fa-regular fa-lightbulb bulb1"
              onClick="changeMode()"
            ></i>
          </div>
        </div>
        <div class="heading2">
          <div class="htxt2">
            <a href="#" className="social-icon">
              ListYourShows
            </a>
            <a href="#" className="social-icon">
              Corporates
            </a>
            <a href="#" className="social-icon">
              Offers
            </a>
            <a href="#" className="social-icon">
              Gift Cards
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
