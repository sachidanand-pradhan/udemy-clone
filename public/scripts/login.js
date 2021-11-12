function login(e) {
  e.preventDefault();

  let form = document.getElementById("form");

  let retrieveData = JSON.parse(localStorage.getItem("udemyUsers"));

  let email = form.email.value;
  let password = form.password.value;

  let flag = false;
  retrieveData.forEach(function (i) {
    if (email == i.email && password == i.password) {
      flag = true;
    }
  });
  if (flag === true) {
    alert("Login Sucessfully!");
    
    window.location.href = "home.html";
  } else {
    alert("Invalid usename or password!");
  }
}
let signin = document.getElementById("signin")
let signup = document.getElementById("signup")
let language = document.getElementById("language")
let beforlogin = document.getElementById("beforlogin")
let afterlogin = document.getElementById("afterlogin")
let user = document.getElementById("user")
let learning = document.getElementById("learning")
let bell = document.getElementById("bell")
let favorite = document.getElementById("favorite")

function ok() {
    signin.setAttribute('class', 'hidden md:block mx-2 text-sm border border-black px-3 font-semibold py-2')
    signup.setAttribute('class', 'hidden md:block mx-2 text-sm border border-black bg-black text-white px-3 font-semibold py-2')
    language.setAttribute('class', 'hidden md:block mx-2 border border-black px-2 py-2 mr-4')
    user.setAttribute('class', 'hidden')
    learning.setAttribute('class', 'hidden')
    bell.setAttribute('class', 'hidden')
    favorite.setAttribute('class', 'hidden')
    beforlogin.setAttribute('class', 'block')
    afterlogin.setAttribute('class', 'hidden')
    console.log("Ok");
}
