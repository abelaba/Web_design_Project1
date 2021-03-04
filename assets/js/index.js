const loginLink = document.querySelector(".loginNavbarLink");
const logoutLink = document.querySelector(".logoutNavbarLink");
const dropdown = document.querySelector(".dropdown")

const dropdown_toggle = document.querySelector(".dropdown-toggle");


const user_name = document.querySelector(".user_name");

const startFundmeLink = document.querySelector(".startFundMeNavbarLink");

var f_name = sessionStorage.getItem('fname');
var l_name = sessionStorage.getItem('lname');


if(f_name!=null && l_name!=null){
    dropdown_toggle.innerHTML = `${f_name} ${l_name}`

}



if( location.href!="./Mydonations.html"){
    //startFundmeLink.style.display = "none";
    console.log("Mydonations");

}


startFundmeLink.addEventListener('click',()=>{
    if(sessionStorage.getItem("globalEmail")!=null){
        location.href = "./Mydonations.html"
    }else{
        location.href = "./registration.html"

    }


})


logoutLink.addEventListener('click',()=>{
    console.log("logout");
    sessionStorage.clear()
    location.href = "./index.html"

})




if(sessionStorage.getItem("globalEmail")!=null){
    console.log("loggedIN");
    loginLink.style.display = "none";
    dropdown.style.display = "block";
    //user_name.innerText = 
    

}else{
    console.log("LoggedOut");
    loginLink.style.display = "block";
    dropdown.style.display = "none";
}