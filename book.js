let seats = document.querySelector(".all-seats");
            let totalRows = 6; // Number of rows
            let seatsPerRow = 10; // Number of seats per row
            let totalSeats = totalRows * seatsPerRow;
            let initiallyBookedSeats = 10;
        
            // Array to store the randomly selected seat indices
            let bookedSeatIndices = [];
        
            // Array to store the currently booked seats
            let bookedSeats = [];
        
            // Variables to store selected date, time, and language
            let selectedDate = "";
            let selectedTime = "";
            let selectedLanguage = "";
        
            // Randomly select initially booked seats
            while (bookedSeatIndices.length < initiallyBookedSeats) {
                let randomIndex = Math.floor(Math.random() * totalSeats);
                if (!bookedSeatIndices.includes(randomIndex)) {
                    bookedSeatIndices.push(randomIndex);
                }
            }
    
        
            for (var row = 0; row < totalRows; row++) {
                for (var seat = 1; seat <= seatsPerRow; seat++) {
                    let seatIndex = row * seatsPerRow + seat; // Corrected calculation
                    if (seatIndex <= totalSeats) {
                        let booked = bookedSeatIndices.includes(seatIndex) ? " booked" : "";
                        let seatLabel = booked ? "" : String.fromCharCode(65 + row) + seat; // Convert row index to alphabet (A, B, C...) and add seat number
                        seats.insertAdjacentHTML(
                                "beforeend",
                                '<input type="checkbox" name="tickets" id="' +
                                seatLabel +
                                '" /><label for="' +
                                seatLabel +
                                '" class="seat' +
                                booked +
                                '">' +
                                seatLabel +
                                '</label>'
                            );
                    }
                }
            }
        
            let tickets = seats.querySelectorAll("input");
        
            tickets.forEach((ticket) => {
                ticket.addEventListener("change", () => {
                    let amount = document.querySelector(".amount").innerHTML;
                    let count = document.querySelector(".count").innerHTML;
                    amount = Number(amount);
                    count = Number(count);
        
                    if (ticket.checked) {
                        count += 1;
                        amount += 350;
                        bookedSeats.push(ticket.id);
                    } else {
                        count -= 1;
                        amount -= 350;
                        bookedSeats = bookedSeats.filter(seatId => seatId !== ticket.id);
                    }
        
                    document.querySelector(".amount").innerHTML = amount;
                    document.querySelector(".count").innerHTML = count;
                });
            });
        
            // Event listener for the "Book" button
            document.getElementById("bookButton").addEventListener("click", () => {
                // Get the selected date
                let selectedDateElement = document.querySelector('input[name="date"]:checked');
                selectedDate = selectedDateElement ? selectedDateElement.nextElementSibling.innerText.trim() : "";
        
                // Get the selected time
                let selectedTimeElement = document.querySelector('input[name="time"]:checked');
                selectedTime = selectedTimeElement ? selectedTimeElement.nextElementSibling.innerText.trim() : "";
        
                // Get the selected language
                let selectedLanguageElement = document.querySelector('input[name="language"]:checked');
                selectedLanguage = selectedLanguageElement ? selectedLanguageElement.nextElementSibling.innerText.trim() : "";
        
                // Display the information
                let bookinfo=
                    `Number of Seats Booked: ${bookedSeats.length}\n` +
                    `Booked Seats: ${bookedSeats.join(", ")}\n` +
                    `Date: ${selectedDate}\n` +
                    `Time: ${selectedTime}\n` +
                    `Language: ${selectedLanguage}\n` +
                    `Total Amount: ${document.querySelector(".amount").innerHTML}`
                ;
                let amount=document.querySelector(".amount").innerHTML;
                // Clear booked seats array after displaying the information
                
                showBookingInfo(bookedSeats, selectedDate,selectedTime,selectedLanguage,amount);
                bookedSeats = [];
            });
            function showBookingInfo(bookedSeats, selectedDate,selectedTime,selectedLanguage,amount) {
                // Redirect to theatre.html with the selected locationId and movieImage as query parameters
                window.location.href = `finalDisplay.html?bookedSeats=${bookedSeats}&selectedDate=${encodeURIComponent(selectedDate)}&selectedTime=${encodeURIComponent(selectedTime)}&selectedLanguage=${encodeURIComponent(selectedLanguage)}&amount=${encodeURIComponent(amount)}`;
            }

