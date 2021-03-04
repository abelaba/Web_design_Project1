function createCard(payeddate,email,name,amount,fundraiserEmail,fundraisertitle) {

    return`<div class="card" style="width: 50rem; ">
            
            <div class="card-body">
                <h5 class="card-title">Date you donated: ${payeddate}</h5>
                <p class="card-text">Name on card: ${name}</p>
                <p class="card-text">Email: ${email}</p>
                <p class="card-text">Amount donated:Br ${amount}</p>
                <p class="card-text">Donated to: ${fundraiserEmail} with title ${fundraisertitle}</p>
               
            </div>
        </div>
    `
    
}

function createCardwithdraw(withdrawdate,email,bankname,amountmoney,accountnumber,routingnumber) {

    return`<div class="card" style="width: 50rem; ">
            
            <div class="card-body">
                <h5 class="card-title">Date withdrawn: ${withdrawdate}</h5>
              
                <p class="card-text">Email: ${email}</p>
                <p class="card-text">Amount withdrawn:${amountmoney}</p>
                <p class="card-text">Bank name: ${bankname}</p>
                <p class="card-text">Bank account number: ${accountnumber}</p>
                <p class="card-text">Routing number: ${routingnumber}</p>
               
            </div>
        </div>
    `
    
}

const transactiondisplay = document.querySelector(".transaction-display")

transaction = new Localbase('transaction');

key = sessionStorage.getItem("globalEmail")


function display() {

    if(key!=null){

        transaction.collection('transaction').get().then(transactions => {
            transactions.forEach((singletransaction)=>{

                if(singletransaction.email==key){
    
                transactiondisplay.innerHTML += createCard(singletransaction.payedDate,singletransaction.email,singletransaction.name,singletransaction.payed,singletransaction.fundraisersEmail,singletransaction.fundraiserTitle)
                }
            })
          })

          transaction.collection('withdrawal').get().then(transactions => {
            transactions.forEach((singletransaction)=>{

                if(singletransaction.email==key){
    
                transactiondisplay.innerHTML += createCardwithdraw(singletransaction.withdrawDate,singletransaction.email,singletransaction.bankName,singletransaction.accumulatedMoney,singletransaction.accountNumber,singletransaction.routingNumber)
                }
            })
          })
    }



    
    
}


display()