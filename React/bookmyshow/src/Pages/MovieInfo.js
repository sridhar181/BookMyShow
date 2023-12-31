import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieInfo.css";

const MovieInfo = () => {
  const { movie_id } = useParams();

  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching...");
        const response = await fetch(
          `http://localhost:9121/Movies/${movie_id}`
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
            <i class="fa-solid fa-star rating"></i>
            <span>{movieInfo.rating} </span>
          </div>
        </div>
        <div class="tle">
          <div class="mtxt1">
            {movieInfo.language?.length > 0 &&
              movieInfo.language.map((lang) => <span>{lang}</span>)}
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
          <button
            class="btn btn-book"
            onclick="showTheatreDetails(1,'${movie.image}','${movie.name}')"
          >
            Book tickets
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
            <p>{movieInfo.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
