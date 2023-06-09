const searchBox = document.getElementById("searchBox");
function handleSubmit(event) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  const location = searchInput.value;

  searchInput.value = '';
  searchBox.innerHTML = '';
  //const productContainer = document.querySelector('.product-container');
  //productContainer.innerHTML = '';

  fetch(`/api/search?location=${location}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const contentType = response.headers.get('Content-Type');

      return response.json();
    })
    .then(data => {
      console.log('Response Data:', data);
      console.log('Search Location from the searchpage.js:', location);
    
      data.forEach(item => {
        const productName = document.createElement("h2");
        productName.textContent = item.product_name + ": " + item.price;
        searchBox.appendChild(productName);
        productName.style.fontSize = "24px"; // Set the desired font size
      });
    })
    .catch(error => {

    });
    
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', handleSubmit);
