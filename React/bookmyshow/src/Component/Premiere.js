import React from "react";
import "./Movie.css";
import { useNavigate } from "react-router-dom";
import "./Premiere.css";

const Premiere = ({ movie_id, imgSrcUrl }) => {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate(`premiere/${movie_id}`);
  };
  return (
    <button class="premier" onClick={navigateToPage}>
      <img src={imgSrcUrl} alt="premiere movie image" />
    </button>
  );
};

export default Premiere;
