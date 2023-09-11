const name = document.getElementById("name");
const password = document.getElementById("password");

const login = document.getElementById("login");
login.addEventListener("click", (eve) => {
  const output = JSON.parse(localStorage.getItem("register"));
  console.log(output);
  if (name.value === output.name && password.value === output.password) {
    alert("logged in successfull");
  }else{
    alert("Invalid Username or Password")
  }
});
