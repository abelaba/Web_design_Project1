

let data = JSON.parse(sessionStorage.getItem("data"));

const donationtitle = document.querySelector(".donation-title");
let message = document.querySelector(".message");
const locate = document.querySelector(".location");
const moneycount = document.querySelector(".money-count");
const description = document.querySelector(".description");
const progress = document.querySelector(".progress-bar");



const donateButton = document.querySelector(".donate-button");
donateButton.addEventListener('click',donateCheck);

let donationdatabase = new Localbase("donationdatabase");

document.addEventListener("DOMContentLoaded",donationview);


function donationview() {

    if(sessionStorage.getItem("key")!=null){
        donationdatabase.collection('donationinfo').doc(sessionStorage.getItem("key")).get().then(document => {
            donationtitle.innerText = document.title;
            locate.innerText = document.mylocation;
            message.innerText = document.message;
            moneycount.innerHTML = `Br.${document.accumulated} raised <sub>out of Br.${document.goal}</sub>`;
            progress.style.width = `${parseInt(document.accumulated)/parseInt(document.goal)*100}%`;
            sessionStorage.setItem("fundraisersemail",document.email)
            sessionStorage.setItem("fundraiserstitle",document.title)
            console.log(document.email,document.title);

            console.log(parseInt(document.accumulated)/parseInt(document.goal)*100)



          })
    }
    
}




function donateCheck(){
    if(sessionStorage.getItem("globalEmail")!=null){
        location.href = "./checkout.html"
    }
    else{
        location.href = "./registration.html";
    }
}