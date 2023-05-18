const searchGoSellBtn = document.getElementById('search-go-sell');
const searchGoLogoutBtn = document.getElementById('search-go-logout');

const sendToSell = () => {
    console.log('hi')
    window.location.replace(`/sell/user/1`)
}
const sendToHome = () => window.location.replace('/')

searchGoSellBtn.addEventListener('click', sendToSell);
searchGoLogoutBtn.addEventListener('click', sendToHome);