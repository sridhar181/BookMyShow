import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Theatre.css";

const TheatreList = () => {
  const { movie_id } = useParams();
  console.log("movie_id in Theatre List", movie_id);
  const [theatreInfo, setTheatreInfo] = useState([
    {
      _id: "659126e0367146370808468d",
      id: 3,
      theatre_name: "Asian CineSquare Multiplex:Uppal",
      state_id: 1,
      location_id: 1,
      category_id: 1,
      location:
        "Survey No. 99, Asian Cine Square Mall, Shanthi Nagar, Warangal Road, B…",
      address_link: "https://maps.app.goo.gl/qcLHAsBoiTWr6Vxf7",
    },
  ]);
  console.log(theatreInfo, "Theatres Data INFOOOO");
  const location = useLocation();
  const locationId = location.state.locationId;
  console.log("Location Id in Theatre List", locationId);
  const movieName = location.state.movieName;
  const movieImage = location.state.movieImage;

  useEffect(() => {
    console.log("Hari Bbauuuuuuuu");
  }, []);
  const goToPage = () => {};

  useEffect(() => {
    console.log("GHrafsgukahijij");
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9121/Theatres/1`);
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
        <div class="tle1">
          <a href="#" class="tatr clr">
            {theatreInfo[0].theatre_name}
          </a>
          <br />
          <span class="clr">Location:</span>&nbsp;
          <span class="tatr_txt">{theatreInfo[0].location}</span>
        </div>
        <div class="tle1">
          <a href="#" class="tatr clr">
            {theatreInfo[1].theatre_name}
          </a>
          <br />
          <span class="clr">Location:</span>&nbsp;
          <span class="tatr_txt">{theatreInfo[1].location}</span>
        </div>
        <div class="tle1">
          <a href="#" class="tatr clr">
            {theatreInfo[2].theatre_name}
          </a>
          <br />
          <span class="clr">Location:</span>&nbsp;
          <span class="tatr_txt">{theatreInfo[2].location}</span>
        </div>
        <div class="tle1">
          <a href="#" class="tatr clr">
            {theatreInfo[3].theatre_name}
          </a>
          <br />
          <span class="clr">Location:</span>&nbsp;
          <span class="tatr_txt">{theatreInfo[3].location} </span>
        </div>
        <div class="tle1">
          <a href="#" class="tatr clr">
            {theatreInfo[4].theatre_name}
          </a>
          <br />
          <span class="clr">Location:</span>&nbsp;
          <span class="tatr_txt">{theatreInfo[4].location} </span>
        </div>
      </div>
    </div>
  );
};

export default TheatreList;
