function setdata(e) {
  e.preventDefault();

  let form = document.getElementById("form");

  let name = form.name.value;
  let email = form.email.value;
  let password = form.password.value;

  if (localStorage.getItem("udemyUsers") === null) {
    localStorage.setItem("udemyUsers", JSON.stringify([]));
  }

  let udemy_Users_Data = {
    name,
    email,
    password,
  };

  let array = JSON.parse(localStorage.getItem("udemyUsers"));
  if (array.length === 0) {
    array.push(udemy_Users_Data);
    window.location.href = "index.html";
  } else {
    let countEmail = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].email === email) {
        countEmail++;
      }
    }
    if (countEmail === 0) {
      array.push(udemy_Users_Data);
      window.location.href = "signup_process1.html";
    } else if (countEmail > 0) {
      alert("Email already exist!");
    }
  }

  localStorage.setItem("udemyUsers", JSON.stringify(array));
}
