// Alert msg
function myalert() {
  alert("Glad You Want A premier Seat!");
}

//confirm msg
function confirmPayment() {
  if (confirm("Are You Sure You Want To Proceed With The Payment?")) {
    alert("Payment Successful!");
  } else {
    alert("Payment Canceled.");
  }
}

const containern4 = document.querySelector(".containern4");
const seatsn4 = document.querySelectorAll(".rown4 .seatn4:not(.soldn4)");
const countn4 = document.getElementById("countn4");
const totaln4 = document.getElementById("totaln4");
const movieSelectn4 = document.getElementById("movien4");

populateUIn4();

let ticketPricen4 = +movieSelectn4.value;

// Save selected movie index and price
function setMovieDatan4(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndexn4", movieIndex);
  localStorage.setItem("selectedMoviePricen4", moviePrice);
}

// Update total and count
function updateSelectedCountn4() {
  const selectedSeatsn4 = document.querySelectorAll(".rown4 .seatn4.selectedn4");

  const seatsIndexn4 = [...selectedSeatsn4].map((seatn4) => [...seatsn4].indexOf(seatn4));

  localStorage.setItem("selectedSeatsn4", JSON.stringify(seatsIndexn4));

  const selectedSeatsCountn4 = selectedSeatsn4.length;

  countn4.innerText = selectedSeatsCountn4;
  totaln4.innerText = selectedSeatsCountn4 * ticketPricen4;

  setMovieDatan4(movieSelectn4.selectedIndex, movieSelectn4.value);
}

// Get data from localstorage and populate UI
function populateUIn4() {
  const selectedSeatsn4 = JSON.parse(localStorage.getItem("selectedSeatsn4"));

  if (selectedSeatsn4 !== null && selectedSeatsn4.length > 0) {
    seatsn4.forEach((seatn4, index) => {
      if (selectedSeatsn4.indexOf(index) > -1) {
        console.log(seatn4.classList.add("selectedn4"));
      }
    });
  }

  const selectedMovieIndexn4 = localStorage.getItem("selectedMovieIndexn4");

  if (selectedMovieIndexn4 !== null) {
    movieSelectn4.selectedIndex = parseInt(selectedMovieIndexn4); // Ensure to parse as an integer
    console.log(selectedMovieIndexn4)
  }
}
console.log(populateUIn4())

// Movie select event
movieSelectn4.addEventListener("change", (e) => {
  ticketPricen4 = +e.target.value;
  setMovieDatan4(e.target.selectedIndex, e.target.value);
  updateSelectedCountn4();
});

// Seat click event
containern4.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seatn4") &&
    !e.target.classList.contains("soldn4")
  ) {
    e.target.classList.toggle("selectedn4");

    updateSelectedCountn4();
  }
});

// Initial count and total set
updateSelectedCountn4();
