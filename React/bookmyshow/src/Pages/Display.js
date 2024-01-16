import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./Display.css";


const Display = () => {
  const { movie_id } = useParams();
  const [theatreInfo, setTheatreInfo] = useState([]);
  const location = useLocation();
  const locationId = location.state.locationId;
  const movieName = location.state.movieName;
  const movieImage = location.state.movieImage;
  const bookedSeats = location.state.bookedSeats;
  const selectedDate = location.state.selectedDate;
  const selectedTime = location.state.selectedTime;
  const selectedLanguage = location.state.selectedLanguage;
  const theatreName = location.state.theatreName;
  const amount = location.state.amount;
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  ;
  const navigatetoPlaceOrder = () => {
    navigate(`placeOrder`, {
      state: {
        
        movieImage: movieImage,
        movieName: movieName,
        bookedSeats:bookedSeats,
        selectedDate:selectedDate,
        selectedTime:selectedTime,
        selectedLanguage:selectedLanguage,
        theatreName:theatreName,
        amount:amount,
         // Add theatre name to the state
      },
    });
  };


  return (
    <div class="cnt">
    <div class="cnt1">
        <img src={movieImage} alt={movieName} />
    </div>
    <div class="cnt2">
        <div class="tle">
            <div class="mtxt clr">
                <span>{movieName}</span>
            </div>
        </div>  
        <div class="tle">
            <div class="mtxt1">
                <span>{theatreName} </span>
            </div>
        </div>
        <div class="tle">
            <div class="mtxt1">
                <span>{selectedDate},   {selectedTime}</span>
            </div>
        </div>
        <div class="tle">
            <div class="mtxt1">
                <span>{selectedLanguage}</span>
            </div>
        </div>
        <div class="tle">
            <div class="mtxt1">
                <span>Seats:{bookedSeats} </span>
            </div>
        </div>
        <div class="tle">
            <div class="mtxt1">
                <span>TotalAmount:{amount} </span>
            </div>
        </div>
        <button class="btn btn-book" onClick={() => navigatetoPlaceOrder()}>
            Book 
          </button>
        
    </div>
</div>
  );
};

export default Display;
