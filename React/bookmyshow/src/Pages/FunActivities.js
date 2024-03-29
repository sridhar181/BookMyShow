import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./Funactivities.css";

const FunActivities = () => {
  const { movie_id } = useParams();
  const [activityInfo, setActivityInfo] = useState({});
  const navigate = useNavigate();

  const navigatetoFunBook = () => {
    navigate(`funbooking`, {
      state: {
        
        funImage: activityInfo.image,
        funName: activityInfo.name,
        funPrice:activityInfo.price
      },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        console.log("fetching...", movie_id);
        const response = await fetch(
          `http://localhost:9121/FunActivities/showInfo/${movie_id}`
        );
        const activities = await response.json();
        if (activities.length > 0) {
          setActivityInfo(activities[0]);
        } else {
          console.error("No activities data found");
        }
      } catch (error) {
        console.error("Error fetching activities details:", error);
      }
    };

    fetchData();
  }, [movie_id]);
  return (
    <div class="cnt">
      <div class="cnt1">
        <img src={activityInfo.image} alt="Fun Activities" />
      </div>
      <div class="cnt2">
        <div class=" acttle1">
          <div class="mtxt clr">
            <span>{activityInfo.name}</span>
          </div>
        </div>
        <div class="acttle1">
          <div class="mtxt1">
            <span>{activityInfo.type}</span>
          </div>
        </div>
        <div class="acttle1">
          <div class="mtxt1">
            <span>Date: {activityInfo.date}</span>
          </div>
        </div>
        <div class="acttle1">
          <div class="mtxt1">
            <span>price: Rs.{activityInfo.price}</span>
          </div>
        </div>
        <div>
          <button class="btn btn-book" onClick={() => navigatetoFunBook()}>Book tickets</button>
        </div>
      </div>
    </div>
  );
};

export default FunActivities;
