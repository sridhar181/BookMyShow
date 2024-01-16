import React,{useState,useEffect} from "react";
import {useNavigate,Link} from 'react-router-dom';
import "./Header.css";
import { useDispatch } from "react-redux";

const url = "http://127.0.0.1:5001/api/auth"
const Header = () => {
  const dispatch = useDispatch();
  const [userData,setUserData] = useState('');
    let navigate = useNavigate();
    

  const onLocationChange = (e) => {
    dispatch({ type: "SELECT_VALUE", payload: e.target.value });
  };

  useEffect(() => {
    if(sessionStorage.getItem('ltk') != null){
        fetch(`${url}/userinfo`,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setUserData(data)
        })
    }
},[])

    const handleLogout = () => {
      sessionStorage.removeItem('ltk');
      sessionStorage.removeItem('userInfo');
      setUserData('');
      navigate('/')
  }



  const conditionalHeader = () => {
      if(userData){
          if(userData.name){
              sessionStorage.setItem('userInfo',JSON.stringify(userData))
              return(
                  <>
                      <Link to="/register" className='btn btn-primary'>
                          <span className="glyphicon glyphicon-user"></span> Hi {userData.name}
                      </Link> &nbsp;
                      <button onClick={handleLogout} className='btn btn-success'>
                          <span className="glyphicon glyphicon-log-out"></span> Logout
                      </button>
                  </>
              )
          }
      }else{
          return(
              <>
                  <Link to="/register" className='btn btn-primary'>
                      <span className="glyphicon glyphicon-user"></span> SignUp
                  </Link> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  <Link to="/login" className='btn btn-success'>
                      <span className="glyphicon glyphicon-log-in"></span> Login
                  </Link>
              </>
          )
      }
  }
  useEffect(() => {
    const coupon = document.getElementById("coupon");
    
    // Immediately invoked function expression (IIFE)
    (function onloadPage() {
        coupon.style.visibility = 'visible';
    })();

    return () => {
        // Cleanup code when component unmounts
        coupon.style.visibility = 'hidden';
        document.body.style.opacity = '1';
    }
}, []);

useEffect(() => {
    const coupon = document.getElementById("coupon");

    const timeoutId = setTimeout(() => {
        coupon.style.visibility = "hidden";
    }, 4000);

    return () => {
        // Cleanup code when component unmounts or when the coupon is hidden
        clearTimeout(timeoutId);
    };
}, []);

const changeMode = () => {
  document.body.classList.toggle('mydark');
};
const handleClick = () => {
  // Navigate to the main page when the house logo is clicked
  navigate('/');
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
          {conditionalHeader()}
        </div>
        
      </div>
      <p id="out"></p>
      <p id="weather"></p>
      <div className="selection">
        <div className="heading1">
          <div class="htxt1 ">
          <i className="fa-solid fa-house" onClick={handleClick}></i>&nbsp; &nbsp;
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
              ICC MEN'S CRICKET WORLD CUP  2023
            </a>
            <i className="fa-regular fa-lightbulb bulb1" onClick={changeMode}></i>
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
        <div id="coupon">
            <i className="fa-solid fa-xmark cup" onClick={() => closeCoupon()}></i>
            <img src="https://i.ibb.co/KVPw2DJ/coupon.jpg" alt="coupon" />
        </div>
      </div>
    </header>
  );
  function closeCoupon() {
    const coupon = document.getElementById("coupon");
    coupon.style.visibility = 'hidden';
    document.body.style.opacity = '1';
}
};

export default Header;
