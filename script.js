const regname = document.getElementById("regname")
const regemail = document.getElementById("regemail")
const regpswd = document.getElementById("regpswd")

const regobj = {
    name : "",
    email : "",
    password : ""
}

const regbtn = document.getElementById("regbtn")
regbtn.addEventListener("click", (e)=>{
    regobj.name = regname.value
    regobj.email = regemail.value
    regobj.password = regpswd.value
    localStorage.setItem("register", JSON.stringify(regobj))
})



