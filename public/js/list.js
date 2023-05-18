console.log("this is the script js folder!");

const listForm = document.getElementById('listForm');

const listFormSubmit = async (e) => {
    e.preventDefault();

    const nameValue = document.getElementById('pdNameInput').value;
    console.log(nameValue);
    
    const catValue = document.getElementById('categoryInput').value;
    console.log(catValue);

    const condValue = document.getElementById('pdCondInput').value;
    console.log(condValue);

    const quantValue = document.getElementById('quantityInput').value;
    console.log(quantValue);

    const priceValue = document.getElementById('priceInput').value;
    console.log(priceValue);

    const brandValue = document.getElementById('brandInput').value;
    console.log(brandValue);

    const descrValue = document.getElementById('descriptionInput').value;
    console.log(descrValue);

    const locatValue = document.getElementById('locationInput').value;
    console.log(locatValue);

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
            seller_location: locatValue
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if(postValue.ok) {
        alert("You have posted a new listing!");
    } else { 
        alert('Something went wrong');
    }
}

listForm.addEventListener('submit', listFormSubmit);