import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./Funactivities.css";

const Sports = () => {
  const { movie_id } = useParams();
  const [sportInfo, setSportInfo] = useState({});
  const navigate = useNavigate();

  const navigatetoSportBook = () => {
    navigate(`sportbooking`, {
      state: {
        
        sportImage: sportInfo.image,
        sportName: sportInfo.name,
        sportPrice:sportInfo.price,
        sportDate:sportInfo.date
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        console.log("fetching...", movie_id);
        const response = await fetch(
          `http://localhost:9121/Sports/showInfo/${movie_id}`
        );
        const sports = await response.json();
        if (sports.length > 0) {
          setSportInfo(sports[0]);
        } else {
          console.error("No sports data found");
        }
      } catch (error) {
        console.error("Error fetching sports details:", error);
      }
    };

    fetchData();
  }, [movie_id]);
  return (
    <div class="cnt">
      <div class="cnt1">
        <img src={sportInfo.image} alt="Fun Activities" />
      </div>
      <div class="cnt2">
        <div class=" acttle1">
          <div class="mtxt clr">
            <span>{sportInfo.name}</span>
          </div>
        </div>
        <div class="acttle1">
          <div class="mtxt1">
            <span>Date: {sportInfo.date}</span>
          </div>
        </div>
        <div class="acttle1">
          <div class="mtxt1">
            <span>price: Rs.{sportInfo.price}</span>
          </div>
        </div>
        <div class="acttle1">
          <div class="mtxt1">
            <span>Location: {sportInfo.location}</span>
          </div>
        </div>
        <div>
          <button class="btn btn-book" onClick={() => navigatetoSportBook()}>Book tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Sports;
