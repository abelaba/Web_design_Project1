
const accumulatedMoney = document.querySelector(".accumulated");

const withdrawButton = document.querySelector(".withdrawButton");

const routingNumber = document.querySelector("#routingnumber");

const accountNumber = document.querySelector("#accountnumber");

const bankName = document.querySelector("#bankname");
const accountType = document.querySelector(".accounttype");

const form = document.querySelector("form");

var key = sessionStorage.getItem("key")

let donations = new Localbase('donationdatabase');
let transactions = new Localbase('transaction');

document.addEventListener('DOMContentLoaded',()=>{
    donations.collection('donationinfo').doc(key).get().then(donation => {
        accumulatedMoney.innerHTML = `Br. ${donation.accumulated}`
        console.log(donation.accumulated);
    })


})


form.addEventListener('submit',(e)=>{
    key = sessionStorage.getItem("key")
    e.preventDefault()

    if(sessionStorage.getItem("globalEmail")!=null){
        transactions.collection('withdrawal').add({
            email:sessionStorage.getItem("globalEmail"),
            accumulatedMoney:accumulatedMoney.innerText,
            routingNumber: routingNumber.value,
            accountNumber:accountNumber.value,
            bankName:bankName.value,
            withdrawDate:String(new Date())        
          })
    
          donations.collection('donationinfo').doc(key).update({
            accumulated : 0
          })
    
          location.reload()

    }

    


    
})


