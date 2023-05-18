const sellGoBackEl = document.getElementById('sell-go-back');
const sellGoCreateEl = document.getElementById('sell-go-create');
const sellGoLogoutEl = document.getElementById('sell-go-logout');

const sendToSearch = () => {console.log('1'); window.location.replace('/search')}
const sendToCreate = () => window.location.replace('/new-listing')
const sendToHome = () => window.location.replace('/')

sellGoBackEl.addEventListener('click', sendToSearch);
sellGoCreateEl.addEventListener('click', sendToCreate);
sellGoLogoutEl.addEventListener('click', sendToHome);