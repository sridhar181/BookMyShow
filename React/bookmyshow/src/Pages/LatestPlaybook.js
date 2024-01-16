import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate  } from "react-router-dom";
import "./Booking.css";

const Playbooking = () => {
  const { movie_id } = useParams();
  const location = useLocation();
  const playImage = location.state?.playImage;
  const playName = location.state?.playName;
  const playPrice = location.state?.playPrice;
  const navigate = useNavigate();


  
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(0);

  

  const updateDisplay = () => {
    if (count === 0) {
      setAmount(0);
    } else {
      setAmount(count * playPrice);
    }
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    updateDisplay();
  };

  const decrement = () => {
    if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      updateDisplay();
    }
  };
  
  useEffect(() => {
    updateDisplay();
  }, [count, playPrice]);

  const navigatetoDisplay = () => {
    navigate(`display`, {
      state: {
        
        playImage: playImage,
        playName: playName,
       
        selectedDate:selectedDate,
        selectedTime:selectedTime,
        amount:amount,
         // Add theatre name to the state
      },
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
   // Event listeners for date and time radio buttons
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

  // Cleanup event listeners when the component unmounts
  return () => {
    document.querySelectorAll('input[name="date"]').forEach((dateInput) => {
      dateInput.removeEventListener("change");
    });

    document.querySelectorAll('input[name="time"]').forEach((timeInput) => {
      timeInput.removeEventListener("change");
    });
  };
}, []);

  const handleBookButtonClick = () => {
    // Display the information
    let bookinfo = `
                    
                    Date: ${selectedDate}\n
                    Time: ${selectedTime}\n
                    Total Amount: ${amount}`;
            let amount=document.querySelector(".amount").innerHTML;
    // Clear booked seats array after displaying the information
    
  };
  const navigatetoPlaceOrder = () => {
    navigate(`placeOrder`, {
      state: {
        
        movieName: playName,
        selectedDate:selectedDate,
        selectedTime:selectedTime,
        amount:amount,
         // Add theatre name to the state
      },
    });
  };

  return (
    <div class="bd">
    <div class="book">
        <div class="left">
           <img src={playImage} alt="" id="poster" />
        </div>
        <div class="right">
            <div class="center">
                <div class="tickets">
                  <div class="ticket-selector">
                    <div class="head">
                      <div class="title">{playName}</div>
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
                        <label for="t1" class="time">16:00</label>
                        <input type="radio" id="t2" name="time" />
                        <label for="t2" class="time"> 18:30 </label>
                      </div>
                      <div className="tickt" data-amount-per-ticket={playPrice}>
                            <p>
                                Tickets: <span id="quantity">{count}</span>
                            </p>
                            <p>
                                Amount: Rs<span id="amount">{amount}</span>
                            </p>
                            <button className="butn" onClick={decrement}>
                                -
                            </button>
                            <button className="butn" onClick={increment}>
                                +
                            </button>
                        </div>
                    </div>
                  </div>
                  <div class="price">
                            <div class="total">
                              <span> <span class="count">{count}</span> Tickets </span>
                              <div class="amount">{amount}</div>
                            </div>
                            <button type="button" id="bookButton" onClick={() => navigatetoPlaceOrder()}>Book</button>
                    </div>
                </div>
              </div>
        </div>
    </div>
</div>
        
     
  );
};

export default Playbooking;
