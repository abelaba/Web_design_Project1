
//Registration
const fname = document.querySelector("#firstName")
const lname = document.querySelector("#lastName")
const email = document.querySelector("#email")
const pword = document.querySelector("#password")
const signupbutton = document.querySelector("#signup-button")

//Login
const emailL =document.querySelector("#emaillogin-input") 
const passwordL = document.querySelector("#passwordlogin-input")
const loginButton = document.querySelector("#login-button")

let userInfoDatabase;
let emails = [];

document.addEventListener('DOMContentLoaded',()=>{
    userInfoDatabase = new Localbase('userInfoDatabase');
    
    userInfoDatabase.collection('users').get().then(users => {
        console.log(users)

        users.forEach(element => {
            emails.push(element.email);
        });
        
      })
    
});

if(email!=null){signupbutton.addEventListener('click',signup);}
else if (emailL!=null) {loginButton.addEventListener('click',login);} 