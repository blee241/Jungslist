function handleSubmit(event) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  const location = searchInput.value;

  searchInput.value = '';

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

      const contentType = response.headers.get('Content-Type');

      return response.json();
    })
    .then(data => {

    })
    .catch(error => {

    });
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', handleSubmit);
