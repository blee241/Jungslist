function handleSubmit(event) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  const location = searchInput.value;

  console.log('Search Location:', location);

  searchInput.value = '';
  //const productContainer = document.querySelector('.product-container');
  //productContainer.innerHTML = '';


  
  fetch(`/search?location=${location}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      console.log(response);

      const contentType = response.headers.get('Content-Type');
      console.log('Content-Type:', contentType);
      return response.json();
    })
    .then(data => {
      console.log('Response Data:', data);
      console.log('Search Location from the searchpage.js:', location);
      
      
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', handleSubmit);
