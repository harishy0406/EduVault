let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let userName = localStorage.getItem("userName");
let redirectBtn = document.getElementById("redirectBtn"); 


welcomeUser.innerHTML = "Welcome " + userName;

redirectBtn.addEventListener("click", function () {
  window.location.href = "indexx.html"; 
});
