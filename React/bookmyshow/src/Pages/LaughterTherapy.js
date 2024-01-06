import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieInfo.css";

const LaughterTherapy = () => {
  const { movie_id } = useParams();
  const [playInfo, setPlayInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching...", movie_id);
        const response = await fetch(
          `http://localhost:9121/ComedyShows/showInfo/${movie_id}`
        );
        const shows = await response.json();
        if (shows.length > 0) {
          console.log(shows, "Show Data");
          setPlayInfo(shows[0]);
        } else {
          console.error("No show data found");
        }
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchData();
  }, [movie_id]);
  return (
    <div class="cnt">
      <div class="cnt1">
        <img src={playInfo.image} alt="Comedy Shows" />
      </div>
      <div class="cnt2">
        <div class=" tle1">
          <div class="mtxt clr">
            <span>{playInfo.name}</span>
          </div>
        </div>
        <div class="tle1">
          <div class="mtxt1">
            <span>{playInfo.type}</span>
          </div>
        </div>
        <div class="tle1">
          <div class="mtxt1">
            <span>Date: {playInfo.date}</span>
          </div>
        </div>
        <div class="tle1">
          <div class="mtxt1">
            <span>price: Rs.{playInfo.price}</span>
          </div>
        </div>
        <div class="tle1">
          <div class="mtxt1">
            <span>Location: {playInfo.location}</span>
          </div>
        </div>
        <div>
          <button class="btn btn-book">Book tickets</button>
        </div>
      </div>
    </div>
  );
};

export default LaughterTherapy;
