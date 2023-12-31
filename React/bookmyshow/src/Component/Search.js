import React, { useState, useEffect } from 'react';
import Header from './Header'; // Adjust the import path
import './Search.css';
const useFetchData = (category, selectedLocation) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:9121/${category}/${selectedLocation}`);
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
  
  const DisplayImages = ({ data, altPrefix }) => (
    <div>
        <div className="cont3">
        {data.map((item, index) => (
            <div key={item._id} className="Lt" onclick="">
            <img src={item.image} alt={`${altPrefix} ${index + 1}`} />
            </div>
        ))}
        </div>
        <div className="cont6">
      {data.map((item, index) => (
        <div key={item._id} className="cont6txt">
          <div className="cont6txt1">
            <span>{item.name}</span>
          </div>
          <div className="cont6txt2">
            <span>{item.language}</span>
          </div>
        </div>
        ))}
        </div>
    </div>
  );

const Search = () => {
    const [selectedLocation, setSelectedLocation] = useState(1);
  const comedyShows = useFetchData('ComedyShows', selectedLocation);
  const funActivities = useFetchData('FunActivities', selectedLocation);
  const latestPlays = useFetchData('LatestPlays',selectedLocation);
  const sports = useFetchData('Sports',selectedLocation);

  
  const handleLocationChange = (event) => {
    const newLocationId = parseInt(event.target.value, 10);
    setSelectedLocation(newLocationId);
  };
    return(
        <div className="dm">
             <Header onLocationChange={handleLocationChange} />
            <div className="container">
                <div id="devCarousel" className="carousel slide" data-ride="carousel">
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
            <div class="cont2">
                <div class="cont2txt">
                    <span>Recommended Movies</span>
                </div>
            </div>
            <div class="cont3">
                <div class="movie">
                    <img src="https://i.ibb.co/yYXbbF9/jawan.jpg" alt="mv1" /> 
                    <div class="mvtxt">
                        <i class="fa-solid fa-star rating"></i>&nbsp;
                        <span>8.4/10 </span>&nbsp;
                        <span>489K Votes</span>
                    </div>
                </div>
                <div class="movie">
                    <img src="https://i.ibb.co/Z1k8wq7/kushi.png" alt="mv2" />
                    <div class="mvtxt">
                        <i class="fa-solid fa-star rating"></i>
                        <span>7.1/10 </span>&nbsp;
                        <span>99.3K Votes</span>
                    </div>
                </div>
                <div class="movie">
                    <img src="https://i.ibb.co/BtdFdhm/MA.jpg" alt="mv1" /> 
                    <div class="mvtxt">
                        <i class="fa-solid fa-star rating"></i>&nbsp;
                        <span>8.3/10 </span>&nbsp;
                        <span>54.1K Votes</span>
                    </div>
                </div>
                <div class="movie">
                    <img src="https://i.ibb.co/c871fhn/msmp.jpg" alt="mv2" />
                    <div class="mvtxt">
                        <i class="fa-solid fa-star rating"></i>&nbsp;
                        <span>9.1/10 </span>&nbsp;
                        <span>50.9K Votes</span>
                    </div>
                </div>
                <div class="movie">
                    <img src="https://i.ibb.co/0FZT89F/nun.jpg" alt="mv2" />
                    <div class="mvtxt">
                        <i class="fa-solid fa-star rating"></i>&nbsp;
                        <span>6.9/10 </span>&nbsp;
                        <span>44.3K Votes</span>
                    </div>
                </div>  
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
                <div class="cont7sub2">
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
                        <div class="premier ">
                            <img src="https://i.ibb.co/6wVW3mP/pm1.png" alt="pm1" /> 
                        </div>
                        <div class="premier">
                            <img src="https://i.ibb.co/wQh0YN0/pm2.png" alt="pm2" />
                        </div>
                        <div class="premier">
                            <img src="https://i.ibb.co/7KZ7PGF/pm3.png" alt="pm3" /> 
                        </div>
                        <div class="premier">
                            <img src="https://i.ibb.co/Tcg6LY1/pm4.png" alt="pm4" />
                        </div>
                        <div class="premier">
                            <img src="https://i.ibb.co/qJRLT9L/pm5.png" alt="pm5" />
                        </div>  
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
            <div class="cont2 mgtp">
                <div class="cont2txt">
                    <span>Online Streaming Events</span>
                </div>
            </div>
            <div class="cont3">
                <div class="Lt">
                    <img src="https://i.ibb.co/Btd4Wrv/ose1.png" alt="online streaming events 1" /> 
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/mDbV6QM/ose2.png" alt="online streaming events 2" />
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/ykzSXsq/ose3.png" alt="online streaming events 3" /> 
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/4Tjxq7R/ose4.png" alt="online streaming events 4" />
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/NZLNMF2/ose5.png" alt="online streaming events 5" />
                </div>  
            </div>
            <div class="cont6">
                <div class="cont6txt">
                    <div class="cont6txt1 ">
                        <span>Talk Session in Business(Ft-Jaideep Prabhu)</span>
                    </div>
                    <div class="cont6txt2 ose">
                        <span>Watch on Zoom</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Learn Digital Marketing and Adobe Photoshop</span>
                    </div>
                    <div class="cont6txt2 ose">
                        <span>Online Streaming</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Talk Session in Business(Ft-Jeremy Polgar)</span>
                    </div>
                    <div class="cont6txt2 ose">
                        <span>Watch on Zoom</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Campus to Corporate for Students & Professionals</span>
                    </div>
                    <div class="cont6txt2 ose">
                        <span>Online Streaming</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Talk Session in Med-Science (Ft. Julia Schaletzky)</span>
                    </div>
                    <div class="cont6txt2 ose">
                        <span>Watch on Zoom</span>
                    </div>
                </div>
            </div>
            <div class="cont2 mgtp">
                <div class="cont2txt">
                    <span>The Latest Plays</span>
                </div>
            </div>
            
            <DisplayImages data={latestPlays} altPrefix="Latest plays" />


            
            <div class="cont2 mgtp">
                <div class="cont2txt">
                    <span>Laughter Therapy</span>
                </div>
            </div>

            <DisplayImages data={comedyShows} altPrefix="Laughter Therapy" />
            
            
            <div class="cont2 mgtp">
                <div class="cont2txt">
                    <span>ICC'S MEN'S CWC & Other Sports</span>
                </div>
            </div>
              
            <DisplayImages data={sports} altPrefix="sports" />

            

            <div class="cont2 mgtp">
                <div class="cont2txt">
                    <span>Explore Fun Activities</span>
                </div>
            </div>

            <DisplayImages data={funActivities} altPrefix="Fun Activity" />

            
        </div>
        
    )
}

export default Search;