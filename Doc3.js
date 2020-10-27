document.getElementById("Login3").addEventListener("submit", function(e){
    e.preventDefault();
    alert("You have successfully reset your password!");
});

function check() {
  let email = localStorage.getItem("email")
  let newEmail = document.getElementById("email")
  let password = document.getElementById("mdp")
  let newPassword = document.getElementById("mdp2")
  if (email != newEmail) {
    alert("This email is not registered")
  } else if (password != newPassword) {
    alert("Your passwords don't match")
  } else {
    localStorage.setItem("password", password.value)
  }
}
