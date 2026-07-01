const signup = document.querySelector('#signup');
signup.addEventListener('click', async (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const names = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  try {
    await axios.post('http://localhost:3000/api/users/signup', {
      names,
      email,
      password,
    });
    alert("signup successfully");
      location.assign('/userLogin.html');
  } catch (error) {
    console.log(error);
    if (error.response.data?.message) {
        alert( `${error.response.data.message}`);
    } else {
        alert( `${error.message}`);
    }
  }
});