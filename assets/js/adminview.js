

let data = JSON.parse(sessionStorage.getItem("data"));

const donationtitle = document.querySelector(".donation-title");
let message = document.querySelector(".message");
const locate = document.querySelector(".location");

const acceptButton = document.querySelector(".accept-button");
const declineButton = document.querySelector(".decline-button");




const donateButton = document.querySelector(".donate-button");


let pendingdatabase = new Localbase("pendingdatabase");
let donationdatabase = new Localbase("donationdatabase");

var user = []

document.addEventListener("DOMContentLoaded",donationview);


function donationview() {

    if(sessionStorage.getItem("adminviewkey")!=null){
        pendingdatabase.collection('pending').doc(sessionStorage.getItem("adminviewkey")).get().then(document => {
            user = [document.accumulated,document.category,document.email,document.goal,document.message,document.mylocation,document.title]
            donationtitle.innerText = document.title;
            locate.innerText = document.mylocation;
            message.innerText = document.message;
            
            
            console.log(document.email,document.title);

            console.log(parseInt(document.accumulated)/parseInt(document.goal)*100)



          })
    }
    
}


acceptButton.addEventListener('click',()=>{
    donationdatabase.collection('donationinfo').add({
        accumulated:user[0],
        category:user[1],
        email:user[2],
        goal:user[3],
        message:user[4],
        mylocation:user[5],
        title:user[6]
      })
      pendingdatabase.collection('pending').doc(sessionStorage.getItem("adminviewkey")).delete()
      location.href = "./admin.html"

    console.log("accepted");
})

declineButton.addEventListener('click',()=>{
    pendingdatabase.collection('pending').doc(sessionStorage.getItem("adminviewkey")).delete()
    location.href = "./admin.html"
})




