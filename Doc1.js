document.getElementById("Login1").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Welcome to your account, You signed in Successfully!");
});

function check() {
  let email = localStorage.getItem("email")
  let password = localStorage.getItem("password")
  let newEmail = document.getElementById("email")
  let newPassword = document.getElementById("mdp")
  if (email != newEmail) {
    alert("This email is not registered")
  } else if (password != newPassword) {
    alert("Your password is incorrect")
  }
}
