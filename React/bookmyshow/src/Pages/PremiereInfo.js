import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Premiere.css";
import "./MovieInfo.css";

const PremiereInfo = () => {
  const { movie_id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching...");
        const response = await fetch(
          `http://localhost:9121/Premiere/${movie_id}`
        );
        const movies = await response.json();
        if (movies.length > 0) {
          setMovieInfo(movies[0]);
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
        <img src={movieInfo.image} alt={movieInfo.name} />
      </div>
      <div class="cnt2">
        <div class="tle">
          <div class="mtxt clr">
            <span>{movieInfo.name}</span>
          </div>
        </div>
        <div class="tle">
          <div class="mtxt1">
            <span>{movieInfo.type}</span>
          </div>
        </div>
        <div class="tle">
          <div class="mtxt1">
            <span>Director: {movieInfo.director}</span>
          </div>
        </div>
        <div class="tle">
          <div class="mtxt1">
            <span>Cast: {movieInfo.starCast}</span>
          </div>
        </div>
        <div>
          <button class="btn btn-premiere">Rent Rs.{movieInfo.amount}</button>
          &nbsp;
          <button class="btn btn-premiere">
            Buy Rs.{movieInfo.amount * 2}
          </button>
        </div>
      </div>
      <div class="cnt2">
        <div class="tle">
          <div class=" mtxt mtxt1 clr">
            <span>About the movie</span>
          </div>
        </div>
        <div class="tle">
          <div class="mtxt2">
            <p>{movieInfo.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiereInfo;
