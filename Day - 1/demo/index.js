// DOM
const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')
const inputLoginBtn = document.getElementById('login-btn')
const infoSection = document.getElementById('user-info')

const username = 'admin@gmail.com'
const password = 'admin@123'

inputLoginBtn.addEventListener('click', function () {
  const userEmail = inputEmail.value
  const userPass = inputPassword.value

  console.log(userEmail, userPass)

  if (userEmail === username && password === userPass) {
    infoSection.innerText = 'Valid user. Login Success!'
  } else {
    infoSection.innerText = 'Invalid user. Please try again!'
  }
})
