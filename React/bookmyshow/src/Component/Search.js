import React, { useState, useEffect } from "react";
import "./Search.css";
import Movie from "./Movie";
import { useSelector } from "react-redux";
import Premiere from "./Premiere";
import DisplayImages from "./DisplayImages";

const useFetchData = (category, selectedLocation) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:9121/${category}/${selectedLocation}`
        );
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error(`Error fetching ${category} data:`, error);
      }
    };

    fetchData();
  }, [category, selectedLocation]);

  return data;
};

const recommendedMoviesList = [
  {
    id: 1,
    imgSrcUrl: "https://i.ibb.co/yYXbbF9/jawan.jpg",
    rating: "8.4",
    votes: "489",
  },
  {
    id: 2,
    imgSrcUrl: "https://i.ibb.co/Z1k8wq7/kushi.png",
    rating: "7.1",
    votes: "99.3",
  },
  {
    id: 3,
    imgSrcUrl: "https://i.ibb.co/BtdFdhm/MA.jpg",
    rating: "8.3",
    votes: "54.1",
  },
  {
    id: 4,
    imgSrcUrl: "https://i.ibb.co/c871fhn/msmp.jpg",
    rating: "9.1",
    votes: "50.1",
  },
  {
    id: 5,
    imgSrcUrl: "https://i.ibb.co/0FZT89F/nun.jpg",
    rating: "6.1",
    votes: "44.3",
  },
];

const premierMovies = [
  {
    id: 1,
    imgSrcUrl: "https://i.ibb.co/6wVW3mP/pm1.png",
  },
  {
    id: 2,
    imgSrcUrl: "https://i.ibb.co/wQh0YN0/pm2.png",
  },
  {
    id: 3,
    imgSrcUrl: "https://i.ibb.co/7KZ7PGF/pm3.png",
  },
  {
    id: 4,
    imgSrcUrl: "https://i.ibb.co/Tcg6LY1/pm4.png",
  },
  {
    id: 5,
    imgSrcUrl: "https://i.ibb.co/qJRLT9L/pm5.png",
  },
];
const Search = () => {
  // const [selectedLocation, setSelectedLocation] = useState(1);
  const selectedLocation = useSelector((state) => state.selectedValue);
  console.log("Selected Location", selectedLocation);
  const comedyShows = useFetchData("ComedyShows", selectedLocation);
  const funActivities = useFetchData("FunActivities", selectedLocation);
  const latestPlays = useFetchData("LatestPlays", selectedLocation);
  const sports = useFetchData("Sports", selectedLocation);

  // const handleLocationChange = (event) => {
  //   const newLocationId = parseInt(event.target.value, 10);
  //   setSelectedLocation(newLocationId);
  // };
  return (
    <div className="dm">
      {/* <Header onLocationChange={handleLocationChange} /> */}
      <div className="container">
      <div id="devCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#devCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#devCarousel" data-slide-to="1"></li>
                        <li data-target="#devCarousel" data-slide-to="2"></li>
                        <li data-target="#devCarousel" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="item active">
                            <img src="https://i.ibb.co/jLZQnSN/Bms1.png" alt="bms1" class="imgSlider"/>   
                        </div>
                        <div class="item">
                            <img src="https://i.ibb.co/Kq70dYw/Bms2.png" alt="bms2" class="imgSlider"/>
                        </div>
                        <div class="item">
                            <img src="https://i.ibb.co/Syk4pJb/Bms3.png" alt="bms3" class="imgSlider"/>
                        </div>
                        <div class="item">
                            <img src="https://i.ibb.co/VLLp7ny/bms4.png" alt="bms4" class="imgSlider"/>
                        </div>
                    </div>
                    <a class="left carousel-control" href="#devCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a class="right carousel-control" href="#devCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>
      </div>
      <div class="cont1">
        <img src="https://i.ibb.co/CbGTPmc/cwcbanner.png" alt="cricket" />
      </div>
      <div class="cont2" id="movies">
        <div class="cont2txt">
          <span>Recommended Movies</span>
        </div>
      </div>
      <div class="cont3">
        {recommendedMoviesList.map((movie) => (
          <Movie
            movie_id={movie.id}
            imgSrcUrl={movie.imgSrcUrl}
            rating={movie.rating}
            votes={movie.votes}
          />
        ))}
      </div>
      <div class="cont4">
        <div class="cont4txt">
          <div class="cont4txt1">
            <span>Jawan</span>
          </div>
          <div class="cont4txt2">
            <span>Action/Thriller</span>
          </div>
        </div>
        <div class="cont4txt">
          <div class="cont4txt1">
            <span>Kushi</span>
          </div>
          <div class="cont4txt2">
            <span>Comedy/Drama</span>
          </div>
        </div>
        <div class="cont4txt">
          <div class="cont4txt1">
            <span>Mark Antony</span>
          </div>
          <div class="cont4txt2">
            <span>Si-Fi/Thriller</span>
          </div>
        </div>
        <div class="cont4txt">
          <div class="cont4txt1">
            <span>Ms Shetty Mr Polishetty</span>
          </div>
          <div class="cont4txt2">
            <span>Comedy/Romantic</span>
          </div>
        </div>
        <div class="cont4txt">
          <div class="cont4txt1">
            <span>The Nun 2</span>
          </div>
          <div class="cont4txt2">
            <span>Horror/Mystery/Thriller</span>
          </div>
        </div>
      </div>
      <div class="cont1 ad">
        <img src="https://i.ibb.co/4gddFnh/bms5.png" alt="bmsad" />
      </div>
      <div class="cont2 mgtp">
        <div class="cont2txt">
          <span>The Best Of Live Events</span>
        </div>
      </div>
      <div class="cont5">
        <div class="events">
          <img src="https://i.ibb.co/G5c59kP/Bole1.png" alt="liveevent1" />
        </div>
        <div class="events">
          <img src="https://i.ibb.co/C5Gb2kq/Bole2.png" alt="liveevent2" />
        </div>
        <div class="events">
          <img src="https://i.ibb.co/dj2Nwjm/Bole3.png" alt="liveevent3" />
        </div>
        <div class="events">
          <img src="https://i.ibb.co/MPKWBK6/Bole4.png" alt="liveevent4" />
        </div>
        <div class="events">
          <img src="https://i.ibb.co/XyYTwpd/Bole5.png" alt="liveevent5" />
        </div>
      </div>
      <div class="cont7">
        <div class="cont7sub1">
          <img src="https://i.ibb.co/R3KRVZw/premeir.png" alt="premeir" />
        </div>
        <div class="cont7sub2" id="premiere">
          <div class="cont2">
            <div class="cont7hd1 ">
              <span>Premieres</span>
            </div>
          </div>
          <div class="cont2 mgtp7">
            <div class="cont7hd2">
              <span>Brand new release every Friday</span>
            </div>
          </div>
          <div class="cont3 ht7">
            {premierMovies.map((movie) => (
              <Premiere movie_id={movie.id} imgSrcUrl={movie.imgSrcUrl} />
            ))}
          </div>
          <div class="cont4">
            <div class="cont4txt">
              <div class="cont4txt1 colr">
                <span>Rememory</span>
              </div>
              <div class="cont4txt2 colr">
                <span>English</span>
              </div>
            </div>
            <div class="cont4txt">
              <div class="cont4txt1 colr">
                <span>Transfusion</span>
              </div>
              <div class="cont4txt2 colr">
                <span>English</span>
              </div>
            </div>
            <div class="cont4txt">
              <div class="cont4txt1 colr">
                <span>Smoother Series 3</span>
              </div>
              <div class="cont4txt2 colr">
                <span>English</span>
              </div>
            </div>
            <div class="cont4txt">
              <div class="cont4txt1 colr">
                <span>The Space In Between</span>
              </div>
              <div class="cont4txt2 colr">
                <span>Hindi</span>
              </div>
            </div>
            <div class="cont4txt">
              <div class="cont4txt1 colr">
                <span>Mending the Line</span>
              </div>
              <div class="cont4txt2 colr">
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
      <div class="cont2 mgtp" id="plays">
        <div class="cont2txt">
          <span>The Latest Plays</span>
        </div>
      </div>

      <DisplayImages
        path="LatestPlays"
        data={latestPlays}
        altPrefix="Latest plays"
      />

      <div class="cont2 mgtp" id="comedy">
        <div class="cont2txt">
          <span>Laughter Therapy</span>
        </div>
      </div>

      <DisplayImages
        path="ComedyShows"
        data={comedyShows}
        altPrefix="Laughter Therapy"
      />

      <div class="cont2 mgtp" id="sports">
        <div class="cont2txt">
          <span>ICC'S MEN'S CWC & Other Sports</span>
        </div>
      </div>

      <DisplayImages path="Sports" data={sports} altPrefix="sports" />

      <div class="cont2 mgtp" id="activities">
        <div class="cont2txt">
          <span>Explore Fun Activities</span>
        </div>
      </div>

      <DisplayImages
        path="FunActivities"
        data={funActivities}
        altPrefix="Fun Activity"
      />
    </div>
  );
};

export default Search;
