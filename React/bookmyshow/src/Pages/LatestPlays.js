import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./Funactivities.css";

const LatestPlays = () => {
  const { movie_id } = useParams();
  console.log("movie_id in LatestPlays", movie_id);
  const [playInfo, setPlayInfo] = useState({});
  const navigate = useNavigate();

  const navigatetoPlayBook = () => {
    navigate(`playbooking`, {
      state: {
        
        playImage: playInfo.image,
        playName: playInfo.name,
        playPrice:playInfo.price
      },
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        console.log("fetching...", movie_id);
        const response = await fetch(
          `http://localhost:9121/LatestPlays/movieInfo/${movie_id}`
        );
        const movies = await response.json();
        if (movies.length > 0) {
          console.log(movies, "Movies Data");
          setPlayInfo(movies[0]);
        } else {
          console.error("No movie data found");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchData();
  }, [movie_id]);
  return (
    <div class="cnt">
      <div class="cnt1">
        <img src={playInfo.image} alt="Latest Plays" />
      </div>
      <div class="cnt2">
        <div class="acttle1">
          <div class="mtxt clr">
            <span>{playInfo.name}</span>
          </div>
        </div>
        <div class="acttle1">
          <div class="mtxt1">
            <span>{playInfo.type}</span>
          </div>
        </div>
        <div class="acttle1">
          <div class="mtxt1">
            <span>Date: {playInfo.date}</span>
          </div>
        </div>
        <div class="acttle1">
          <div class="mtxt1">
            <span>price: Rs.{playInfo.price}</span>
          </div>
        </div>
        <div class="acttle1">
          <div class="mtxt1">
            <span>Location: {playInfo.location}</span>
          </div>
        </div>
        <div>
          <button class="btn btn-book" onClick={() => navigatetoPlayBook()}>Book tickets</button>
        </div>
      </div>
    </div>
  );
};

export default LatestPlays;
