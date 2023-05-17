let deleteListingBtns = document.querySelectorAll('.delete-button');
const deleteListing = async (listingId) => {
  try {
    const response = await fetch(`/sell/delete_listing/${listingId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      alert('You have successfully deleted a listing!');
      const section = document.getElementById(listingId);
      section.remove();
    } else {
      alert('Something went wrong');
    }
  } catch (error) {
    console.error('Error occurred during delete operation', error);
  }
};
deleteListingBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const listingId = event.target.dataset.listingId;
    deleteListing(listingId);
  });
});