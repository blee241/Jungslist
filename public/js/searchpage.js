/*const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', async function(event) {
  event.preventDefault();
console.log("data")
  // Get the value from the search box
  const location = searchInput.value;

  try {
    // Make a request to the server to fetch the product details
    const response = await fetch(`/search?location=${encodeURIComponent(location)}`);
    const data = await response.json();

    // Process the retrieved data as needed
    console.log(data);
    // Update the UI with the retrieved product details

  } catch (error) {
    console.error('Error:', error);
  }
});*/

function handleSubmit(event) {
  event.preventDefault();

  // Get the value from the search input
  const searchInput = document.getElementById('search-input');
  const location = searchInput.value;

  // Perform any actions you want with the search location
  console.log('Search Location:', location);

  // Reset the search input value
  searchInput.value = '';
}

// Add an event listener to the submit button
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', handleSubmit);