// mehrez
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".coming-container", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },

  }
});
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navigation');

// menu.onclick = () => {
//   // menu.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// }
// window.onscroll = () => {

//   // menu.classList.remove('bx-x');
//   // navbar.classList.remove('active');
// }
// mehrez
// yassmen
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});
// // yassmen
// ma8raby
document.getElementById('paymentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var cardNumber = document.getElementById('cardNumber').value;
  var expiryDate = document.getElementById('expiryDate').value;
  var cvv = document.getElementById('cvv').value;

  if (cardNumber.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '') {
    document.getElementById('message').innerHTML = '<p id="error">please fill in all data</p>';
  } else {

    document.getElementById('message').innerHTML = '<p>paid successfully!</p>';
  }
});

// ma8raby
// nayyera```

// nayyera
// الي مسافر
// function validateForm() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var cinema = document.getElementById("cinema").value;
//   var notes = document.getElementById("notes").value;

//   var nameHasErrors = document.getElementById("name-error");
//   var emailHasErrors = document.getElementById("email-error");
//   var cinemaHasErrors = document.getElementById("cinema-error");
//   var noteshasErrors = document.getElementById("notes-error");
//   var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//   var isValid = true;

//   console.log(name)
//   if (name.trim() == "") {
//     nameHasErrors.innerText = "Name is required";
//     isValid = false;
//   } else {
//     nameHasErrors.innerText = "";
//   }

//   if (!email.match(emailRegex)) {
//     emailHasErrors.innerText = "Please enter a valid email address";
//     isValid = false;
//   } else {
//     emailHasErrors.innerText = "";
//   }

//   if (cinema.trim() == "") {
//     cinemaHasErrors.innerText = "Cinema is required";
//     isValid = false;
//   } else {
//     cinemaHasErrors.innerText = "";
//   }

//   if (notes.trim() == "") {
//     noteshasErrors.innerText = "Message is required";
//     isValid = false;
//   } else {
//     noteshasErrors.innerText = "";
//   }

//   return isValid;
// }





// document.querySelector(".contact-form").addEventListener("submit", function(event) {
//   event.preventDefault();
//   document.getElementById("name").addEventListener("input", validateForm);
//   document.getElementById("email").addEventListener("input", validateForm);
//   document.getElementById("notes").addEventListener("input", validateForm);
//   document.getElementById("cinema").addEventListener("change", validateForm)
//   var isValid = validateForm();

// });

// الي مسافر
// ahmed elsayd
// const movies = [
//   {
//     name: "" American Psycho
//     url: "" https://replit.com/@amehrez18/starmaze#amircan.html
//   }
//   //add more films...
// ];

// const searchInput = document.getElementById('searchInput');
// const searchResultsContainer = document.getElementById('searchResults');

// function displaySearchResults(searchTerm) {
//   searchResultsContainer.innerHTML = '';

//   if (searchTerm === '') {
//     searchResultsContainer.style.display = 'none';
//     return;
//   }

//   const foundMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase()));

//   foundMovies.forEach(movie => {
//     const movieElement = document.createElement('div');
//     movieElement.classList.add('search-result');
//     movieElement.innerHTML = `
//           <h3>${movie.name}</h3>
//       `;
//     movieElement.addEventListener('click', () => {
//       window.location.href = movie.url;
//     });
//     searchResultsContainer.appendChild(movieElement);
//   });

//   searchResultsContainer.style.display = 'block';
// }

// searchInput.addEventListener('input', () => {
//   const searchTerm = searchInput.value.trim();
//   displaySearchResults(searchTerm);
// });
// ahmed elsayd
/* ahmed khaled */
let x = document.getElementById("seven");
x.onclick = function() {

};
let b = document.querySelector("[name='review']");
document.forms[0].onsubmit = function(g) {
  var Userinput = false;
  if (b.value !== "") {
    console.log("Valid")
  }
  else {
    console.log("Not Valid")
  }
  if (Userinput === false) {
    g.preventDefault();
  }
}
window.localStorage.setItem("color", "#F00");
console.log(window.localStorage);
/* ahmed khaled */