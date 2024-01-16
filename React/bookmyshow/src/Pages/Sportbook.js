import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate  } from "react-router-dom";
import "./Booking.css";

const Sportbooking = () => {
  const { movie_id } = useParams();
  const location = useLocation();
  const sportImage = location.state?.sportImage;
  const sportName = location.state?.sportName;
  const sportPrice = location.state?.sportPrice;
  const sportDate = location.state?.sportDate;
  const navigate = useNavigate();


  
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(0);

  

  const updateDisplay = () => {
    if (count === 0) {
      setAmount(0);
    } else {
      setAmount(count * sportPrice);
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
    window.scrollTo(0, 0);
    updateDisplay();
  }, [count, sportPrice]);

  const navigatetoDisplay = () => {
    navigate(`display`, {
      state: {
        
        sportImage: sportImage,
        sportName: sportName,
        sportDate: sportDate,
       
        selectedDate:selectedDate,
        selectedTime:selectedTime,
        amount:amount,
         // Add theatre name to the state
      },
    });
  };
  useEffect(() => {
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
        
        movieName: sportName,
        selectedDate:selectedDate,
        amount:amount,
         // Add theatre name to the state
      },
    });
  };

  return (
    <div class="bd">
    <div class="book">
        <div class="left">
           <img src={sportImage} alt="" id="poster" />
        </div>
        <div class="right">
            <div class="center">
                <div class="tickets">
                  <div class="ticket-selector">
                    <div class="head">
                      <div class="title">{sportName}</div>
                    </div>
                    <div class="timings">
                     
                      <div className="tickt" data-amount-per-ticket={sportPrice}>
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

export default Sportbooking;
