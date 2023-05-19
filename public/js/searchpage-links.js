const searchGoSellBtn = document.getElementById('search-go-sell');
const searchGoLogoutBtn = document.getElementById('search-go-logout');

const importID = localStorage.getItem('id');

const sendToSell = () => {
    window.location.replace(`/sell/user/${importID}`)
}
const sendToHome = () => window.location.replace('/')

searchGoSellBtn.addEventListener('click', sendToSell);
searchGoLogoutBtn.addEventListener('click', sendToHome);