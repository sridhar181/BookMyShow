import React from "react";
import "./Movie.css";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie_id, imgSrcUrl, rating, votes }) => {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate(`movie/${movie_id}`);
  };
  return (
    <button class="movie" onClick={navigateToPage}>
      <img src={imgSrcUrl} alt="movieImage" />
      <div class="mvtxt">
        <i class="fa-solid fa-star rating"></i>
        <span>{rating}/10 </span>&nbsp;
        <span>{votes}K Votes</span>
      </div>
    </button>
  );
};

export default Movie;
