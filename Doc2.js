document.getElementById("Login2").addEventListener("submit", function(e){
    e.preventDefault();
    alert("You signed up Successfully, you can now sign in to your account!");
});

function store() {
  let email = document.getElementById("email")
  localStorage.setItem("email", email.value)
  let password = document.getElementById("mdp")
  localStorage.setItem("password", password.value)
}
