let deleteListingBtnEl = document.querySelector('.delete-button');

const deleteListing = async () => {
    const listingId = deleteListingBtnEl.dataset.listingId;
    try {
      const response = await fetch(`/delete_listing/${listingId}`, {
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
  
  deleteListingBtnEl.addEventListener('click', deleteListing);