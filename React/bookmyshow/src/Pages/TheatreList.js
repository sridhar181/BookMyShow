import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";


import "./Theatre.css";

const TheatreList = () => {
  const { movie_id } = useParams();
  const [theatreInfo, setTheatreInfo] = useState([]);
  const location = useLocation();
  const locationId = location.state.locationId;
  const navigate = useNavigate();
  const movieName = location.state.movieName;
  const movieImage = location.state.movieImage;
  

  const navigatetoTickets = (theatreName) => { 
    navigate(`bookTickets`, {
      state: {
        
        movieImage,
        movieName,
        theatreName
         // Add theatre name to the state
      },
     
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9121/Theatres/${locationId}`);
        const theatres = await response.json();
        console.log(theatres, "Theatres Data");
        if (theatres.length > 0) {
          console.log(theatres, "Theatres Data");
          setTheatreInfo(theatres);
        } else {
          console.error("No movie data found");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div class="cnt">
      <div class="cnt1">
        <img src={movieImage} alt="mv1" />
      </div>
      <div class="cnt21">  
      {theatreInfo.map((theatre, index) => (
        <div key={index} className="tle1">
          <a  className="tatr clr" onClick={() => navigatetoTickets(theatre.theatre_name)}>
            {theatre.theatre_name}
          </a>
          <br />
          <span className="clr">Location:</span>&nbsp;
          <span className="tatr_txt">{theatre.location}</span>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TheatreList;
