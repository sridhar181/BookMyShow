import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate  } from "react-router-dom";
import "./Booking.css";


const Booking = () => {
  const { movie_id } = useParams();
  const location = useLocation();
  const movieImage = location.state?.movieImage;
  const movieName = location.state?.movieName;
  const theatreName = location.state?.theatreName;
  const navigate = useNavigate();


  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(0);

  const navigatetoDisplay = () => {
    navigate(`display`, {
      state: {
        
        movieImage: movieImage,
        movieName: movieName,
        bookedSeats:bookedSeats,
        selectedDate:selectedDate,
        selectedTime:selectedTime,
        selectedLanguage:selectedLanguage,
        theatreName:theatreName,
        amount:amount,
         // Add theatre name to the state
      },
    });
  };
  useEffect(() => {
    // Your existing JavaScript code here
    window.scrollTo(0, 0);
    let seats = document.querySelector(".all-seats");
    let totalRows = 6;
    let seatsPerRow = 10;
    let totalSeats = totalRows * seatsPerRow;
    let initiallyBookedSeats = 10;
    let bookedSeatIndices = [];
  
    while (bookedSeatIndices.length < initiallyBookedSeats) {
      let randomIndex = Math.floor(Math.random() * totalSeats);
      if (!bookedSeatIndices.includes(randomIndex)) {
        bookedSeatIndices.push(randomIndex);
      }
    }
  
    for (let row = 0; row < totalRows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        let seatIndex = row * seatsPerRow + seat;
        let booked = bookedSeatIndices.includes(seatIndex) ? " booked" : "";
        let seatLabel = booked ? "" : String.fromCharCode(65 + row) + seat;
        seats.insertAdjacentHTML(
          "beforeend",
          `<input type="checkbox" name="tickets" id="${seatLabel}" ${booked ? "disabled" : ""}/>
           <label for="${seatLabel}" class="seat${booked}">${seatLabel}</label>`
        );
      }
    }
  
    let tickets = seats.querySelectorAll("input[type='checkbox']");
  
    tickets.forEach((ticket) => {
      ticket.addEventListener("change", () => {
        setCount((prevCount) => (ticket.checked ? prevCount + 1 : prevCount - 1));
        setAmount((prevAmount) => (ticket.checked ? prevAmount + 350 : prevAmount - 350));
  
        setBookedSeats((prevSeats) =>
          ticket.checked ? [...prevSeats, ticket.id] : prevSeats.filter((seatId) => seatId !== ticket.id)
        );
      });
    });
  
    // Event listeners for date, time, and language radio buttons
    document.querySelectorAll('input[name="date"]').forEach((dateInput) => {
        dateInput.addEventListener("change", () => {
          setSelectedDate(dateInput.nextElementSibling.innerText.trim());
        });
      });
  
      document.querySelectorAll('input[name="time"]').forEach((timeInput) => {
        timeInput.addEventListener("change", () => {
          setSelectedTime(timeInput.nextElementSibling.innerText.trim());
        });
      });
  
      document.querySelectorAll('input[name="language"]').forEach((languageInput) => {
        languageInput.addEventListener("change", () => {
          setSelectedLanguage(languageInput.nextElementSibling.innerText.trim());
        });
      });
    }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const handleBookButtonClick = () => {
    // Display the information
    let bookinfo = `Number of Seats Booked: ${bookedSeats.length}\n
                    Booked Seats: ${bookedSeats.join(", ")}\n
                    Date: ${selectedDate}\n
                    Time: ${selectedTime}\n
                    Language: ${selectedLanguage}\n
                    Total Amount: ${amount}`;
            let amount=document.querySelector(".amount").innerHTML;
    // Clear booked seats array after displaying the information
    setBookedSeats([]);
  };

  return (
    <div class="bd">
    <div class="book">
        <div class="left2">
           <img src={movieImage} alt="" id="poster" />
        </div>
        <div class="right2">
            <div class="center">
                <div class="tickets">
                  <div class="ticket-selector">
                    <div class="head">
                      <div class="title">{movieName}</div>
                    </div>
                    <div class="seats">
                      <div class="status">
                        <div class="item">Available</div>
                        <div class="item">Booked</div>
                        <div class="item">Selected</div>
                      </div>
                      <div class="all-seats">
                             
                      </div>
                    </div>
                    <div class="timings">
                      <div class="dates">
                        <input type="radio" name="date" id="d1"  />
                        <label for="d1" class="dates-item">
                          <div class="day">Mon</div>
                          <div class="date">8</div>
                        </label>
                        <input type="radio" id="d2" name="date" />
                        <label class="dates-item" for="d2">
                          <div class="day">Tue</div>
                          <div class="date">9</div>
                        </label>
                        <input type="radio" id="d3" name="date" />
                        <label class="dates-item" for="d3">
                          <div class="day">Wed </div>
                          <div class="date">10</div>
                        </label>
                        <input type="radio" id="d4" name="date" />
                        <label class="dates-item" for="d4">
                          <div class="day">Thu</div>
                          <div class="date">11</div>
                        </label>
                        <input type="radio" id="d5" name="date" />
                        <label class="dates-item" for="d5">
                          <div class="day">Fri</div>
                          <div class="date">12</div>
                        </label>
                        <input type="radio" id="d6" name="date" />
                        <label class="dates-item" for="d6">
                          <div class="day">Sat</div>
                          <div class="date">13</div>
                        </label>
                        <input type="radio" id="d7" name="date" />
                        <label class="dates-item" for="d7">
                          <div class="day">Sun</div>
                          <div class="date">15</div>
                        </label>
                      </div>
                      <div class="times">
                        <input type="radio" name="time" id="t1"  />
                        <label for="t1" class="time">11:00</label>
                        <input type="radio" id="t2" name="time" />
                        <label for="t2" class="time"> 14:30 </label>
                        <input type="radio" id="t3" name="time" />
                        <label for="t3" class="time"> 18:00 </label>
                        <input type="radio" id="t4" name="time" />
                        <label for="t4" class="time"> 21:30 </label>
                      </div>
                      <div class="languages">
                       
                        <input type="radio" name="language" id="lang1"  />
                        <label for="lang1" class="language-item">Telugu</label>
                        <input type="radio" name="language" id="lang2" />
                        <label for="lang2" class="language-item">Tamil</label>
                        <input type="radio" name="language" id="lang3" />
                        <label for="lang3" class="language-item">English</label>
                        <input type="radio" name="language" id="lang4" />
                        <label for="lang4" class="language-item">Hindi</label>
                       
                    </div>
                    </div>
                  </div>
                  <div class="price">
                    <div class="total">
                      <span> <span class="count">0</span> Tickets </span>
                      <div class="amount">0</div>
                    </div>
                    <button type="button" id="bookButton" onClick={() => navigatetoDisplay()} >Book</button>
                  </div>
                </div>
              </div>
        </div>
    </div>
</div>
        
     
  );
};

export default Booking;
