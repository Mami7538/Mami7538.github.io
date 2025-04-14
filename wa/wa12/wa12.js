
const newBurgerButton = document.querySelector('#js-new-quote');
newBurgerButton.addEventListener('click', getBurger);
const toggleDetailsButton = document.querySelector('#js-toggle-details');
toggleDetailsButton.addEventListener('click', toggleDetails);
function getBurger() {
  const apiEndpoint = "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/";
  fetch(apiEndpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(burgers => {
      if (Array.isArray(burgers) && burgers.length > 0) {
        const randomIndex = Math.floor(Math.random() * burgers.length);
        const burger = burgers[randomIndex];
        displayBurger(burger);
      } else {
        alert("No burger data received.");
      }
    })
    .catch(error => {
      console.error("Error fetching burger data:", error);
      alert("An error occurred while fetching burger data.");
    });
}
function displayBurger(burger) {
  const burgerNameElement = document.getElementById('js-quote-text');
  const burgerDetailsElement = document.getElementById('js-answer-text');
  
  burgerNameElement.textContent = burger.name;
  burgerDetailsElement.textContent =
    `Price: ${burger.price} | Season: ${burger.season} | Episode: ${burger.episode}`;
  burgerDetailsElement.style.display = "block";
}
function toggleDetails() {
  const burgerDetailsElement = document.getElementById('js-answer-text');
  if (burgerDetailsElement.style.display === "none" || burgerDetailsElement.style.display === "") {
    burgerDetailsElement.style.display = "block";
  } else {
    burgerDetailsElement.style.display = "none";
  }
}
getBurger();
