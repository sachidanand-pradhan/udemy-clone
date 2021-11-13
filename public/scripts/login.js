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
