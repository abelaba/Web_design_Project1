const loginLink = document.querySelector(".loginNavbarLink");
const logoutLink = document.querySelector(".logoutNavbarLink");
const dropdown = document.querySelector(".dropdown")

const user_name = document.querySelector(".user_name");

const startFundmeLink = document.querySelector(".startFundMeNavbarLink") 

if( location.href!="./Mydonations.html"){
    //startFundmeLink.style.display = "none";
    console.log("Mydonations");

}


startFundmeLink.addEventListener('click',()=>{
    if(sessionStorage.getItem("globalEmail")!=null){
        location.href = "./Mydonations.html"
    }else{
        location.href = "./signup.html"

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