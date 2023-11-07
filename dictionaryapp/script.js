const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results-container');

searchInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const word = searchInput.value;
    fetchDefinition(word);
  }
});

function fetchDefinition(word) {
  const apiKey = '9bbd6abb-629b-416a-bb12-2448ab06c524'; // Replace 'YOUR_API_KEY' with your actual API key
  const apiUrl = `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const definition = data[0].shortdef[0];
      resultsContainer.innerHTML = `<p><strong>${word}</strong>: ${definition}</p>`;
    })
    .catch(error => {
      console.log('Error:', error);
      resultsContainer.innerHTML = 'An error occurred while fetching the definition.';
    });
}
