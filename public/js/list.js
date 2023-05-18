const listForm = document.getElementById('listForm');

const listFormSubmit = async (e) => {
    e.preventDefault();

    const nameValue = document.getElementById('pdNameInput').value;


    const catValue = document.getElementById('categoryInput').value;


    const condValue = document.getElementById('pdCondInput').value;


    const quantValue = document.getElementById('quantityInput').value;


    const priceValue = document.getElementById('priceInput').value;


    const brandValue = document.getElementById('brandInput').value;


    const descrValue = document.getElementById('descriptionInput').value;


    const locatValue = document.getElementById('locationInput').value;


    const postValue = await fetch('/api/listing/new-listing', {
        method: 'POST',
        body: JSON.stringify({
            product_name: nameValue,
            category: catValue,
            product_condition: condValue,
            quantity: quantValue,
            price: priceValue,
            brand: brandValue,
            description: descrValue,
            seller_location: locatValue,
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (postValue.ok) {
        alert("You have posted a new listing!");
    } else {
        alert('Something went wrong');
    }
}

listForm.addEventListener('submit', listFormSubmit);