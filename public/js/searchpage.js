const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the value from the search box
  const location = searchInput.value;

  // Modify the URL based on the search query
  const newUrl = window.location.origin + '/users/products?location=' + encodeURIComponent(location);

  // Redirect to the new URL
  window.location.href = newUrl;
});