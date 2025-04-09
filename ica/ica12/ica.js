const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);
function getQuote() {
  console.log("New quote button clicked!");
  const apiEndpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
  fetch(apiEndpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Fetched trivia data:", data);
      displayQuote(data);
    })
    .catch(error => {
      console.error("Error fetching trivia:", error);
      alert("An error occurred while fetching a new trivia question.");
    });
}
function displayQuote(data) {
  const quoteTextElement = document.getElementById('js-quote-text');
  quoteTextElement.textContent = data.question;
}
getQuote();
