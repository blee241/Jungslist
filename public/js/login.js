// const loginForm = async (event) => {
//     event.preventDefault();
//     console.log('in function');
//     // Collect values from the login form
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
//     console.log(email);
//     console.log(password);
//     if (email && password) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         // If successful, redirect the browser to the search page
//         const searchpage = '/search'; 
//         window.location.replace(searchpage)
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  

  
//   document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginForm);


const loginForm = async (event) => {
  event.preventDefault();
  console.log('in function');
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log(email);
  console.log(password);
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const { userId } = await response.json();

      // Store the user ID in the session
      sessionStorage.setItem('userId', userId);

      // Redirect the browser to the search page
      const searchpage = '/search'; 
      window.location.replace(searchpage);
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginForm);


