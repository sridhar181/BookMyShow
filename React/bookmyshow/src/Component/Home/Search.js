import React from 'react';
import './Search.css';


const Search = () => {
    return(
        <div className="dm">
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
                        <i class="fa-solid fa-star rating"></i>&nbsp
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
            <div class="cont3">
                <div class="Lt">
                    <img src="https://i.ibb.co/YBcX0BN/ltp1.png" alt="latest plays 1" /> 
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/CH9GyGk/ltp2.png" alt="latest plays 2" />
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/GTf6Mbj/ltp3.png" alt="latest plays 3" /> 
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/gDcbd15/ltp4.png" alt="latest plays 4" />
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/S0VQ2HK/ltp5.png" alt="latest plays 5" />
                </div>  
            </div>
            <div class="cont6">
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Manam Theatre Festival 2023</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Bengali/Hindi/English..</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Manam Theatre Festival: Bali</span>
                    </div>
                    <div class="cont6txt2">
                        <span>English</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Aadhe Adhure</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Hindi</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Manam Theatre Festival:Shakkar Ke..</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Hindi</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Sutradhar Presents Dushala</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Hindi</span>
                    </div>
                </div>
            </div>
            <div class="cont2 mgtp">
                <div class="cont2txt">
                    <span>Laughter Therapy</span>
                </div>
            </div>
            <div class="cont3">
                <div class="Lt">
                    <img src="https://i.ibb.co/VNQKSBd/latp1.png" alt="Laughter Therapy1" /> 
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/0DYrbt7/latp2.png" alt="Laughter Therapy2" />
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/7RYxrQm/latp3.png" alt="Laughter Therapy3" /> 
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/x6fskBY/latp4.png" alt="Laughter Therapy4" />
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/qdWZctb/latp5.png" alt="Laughter Therapy5" />
                </div>  
            </div>
            <div class="cont6">
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>MindFool India Tour-Vir Das</span>
                    </div>
                    <div class="cont6txt2">
                        <span>ShilpaKala Vedika:Hyderabad</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Kisi Ko Batana Mat-Anubhav Singh Bassi</span>
                    </div>
                    <div class="cont6txt2">
                        <span>ShilpaKala Vedika: Hyderabad</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Who Are You By Rahul Subramanian</span>
                    </div>
                    <div class="cont6txt2">
                        <span>ShilpaKala Vedika: Hyderabad</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Comedy Jam @Kondapur</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Qofee: Hyderabad</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Kal Ki Chinta Nahi Karta-Ravi Gupta</span>
                    </div>
                    <div class="cont6txt2">
                        <span>KLN Prasad Auditorium- FTCCI: Hyderabad</span>
                    </div>
                </div>
            </div>
            <div class="cont2 mgtp">
                <div class="cont2txt">
                    <span>ICC'S MEN'S CWC & Other Sports</span>
                </div>
            </div>
            <div class="cont3">
                <div class="Lt">
                    <img src="https://i.ibb.co/zhP0kxj/sport1.png" alt="sport1" /> 
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/Ch4Pr8q/sport2.png" alt="sport2" />
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/3fD04Nm/sport3.png" alt="sport3" /> 
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/n7ptWST/sport4.png" alt="sport4" />
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/TTG3FJp/sport5.png" alt="sport5" />
                </div>  
            </div>
            <div class="cont6">
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>PAKISTAN vs NETHERLANDS - ICC...</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Rajiv Gandhi Cricket Stadium: Hyderabad</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>NEW ZEALAND vs NETHERLANDS - ICC...</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Rajiv Gandhi Cricket Stadium: Hyderabad</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>ISL 2023-24 | Hyderabad FC Season Ticket</span>
                    </div>
                    <div class="cont6txt2">
                        <span>G.M.C Balayogi Atheletic Stadium: Hyderabad</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Monthly Sudoku Challenge by MALSAR</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Watch on Zoom</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Monthly Chess Challenge by Malsar</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Watch on Zoom</span>
                    </div>
                </div>
            </div>
            <div class="cont2 mgtp">
                <div class="cont2txt">
                    <span>Explore Fun Activities</span>
                </div>
            </div>
            <div class="cont3">
                <div class="Lt">
                    <img src="https://i.ibb.co/pwpjSBH/exf1.png" alt="explore fun activities 1" /> 
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/vZwK5xv/exf2.png" alt="explore fun activities 2" />
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/JkwcBp8/exf3.png" alt="explore fun activities 3" /> 
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/XkhS9xW/exf4.png" alt="explore fun activities 4" />
                </div>
                <div class="Lt">
                    <img src="https://i.ibb.co/VCNW5fG/exf5.png" alt="explore fun activities 5" />
                </div>  
            </div>
            <div class="cont6">
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Ramoji Festive Studio Tour</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Ramoji Film City:Hyderabad</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Wonderla Amusement Park Hyderabad</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Wonderla Amusement Park:Hyderabad</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Speed Dating</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Terra Cafe & Bistro:Hyderabad</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Day Outing @ The Hidden Castle</span>
                    </div>
                    <div class="cont6txt2">
                        <span>The Hidden Castle:Hyderabad</span>
                    </div>
                </div>
                <div class="cont6txt">
                    <div class="cont6txt1">
                        <span>Day Outing @ Dream Valley Resorts</span>
                    </div>
                    <div class="cont6txt2">
                        <span>Dream Valley Resorts:Hyderabad</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;