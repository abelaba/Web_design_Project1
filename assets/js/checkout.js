const donation = document.querySelector(".donationinput");
const inputname = document.querySelector(".name");
const card = document.querySelector(".card");
const expiry = document.querySelector(".expiry");
const cvv = document.querySelector(".cvv");

const acceptButton = document.querySelector(".button");



let transaction;
let donations;

document.addEventListener('DOMContentLoaded',()=>{
    transaction = new Localbase('transaction');
    donations = new Localbase('donationdatabase');
})





acceptButton.addEventListener('click',()=>{

    if(sessionStorage.getItem("globalEmail")!=null && sessionStorage.getItem("key")!=null){

        key = sessionStorage.getItem("key");
        console.log(key);
        
        transaction.collection('transaction').add({
            payed:donation.value,
            name: inputname.value,
            card:card.value,
            expiry:expiry.value,
            cvv:cvv.value,
            email:sessionStorage.getItem("globalEmail")
          })

          donations.collection('donationinfo').doc(key).get().then(document => {
           
            donations.collection('donationinfo').doc(key).update({
                accumulated : parseInt(document.accumulated) + parseInt(donation.value)
               
               
           });
          })

        
          console.log(parseInt(data.data.accumulated)+parseInt(donation.value));

        



    }else{
        alert("No email");
    }



}) 