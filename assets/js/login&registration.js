
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

function signup(){

    if (emails.includes(email.value)){
        alert ("Email already used");

    }else{
        userInfoDatabase.collection('users').add({
            firstname: fname.value,
            lname: lname.value,
            email:email.value,
            password:pword.value
          },email.value);

          sessionStorage.setItem('globalEmail',email.value)
          location.href = "./index.html";
    }
        
}

function login() {

    console.log("qq");
    count = 0;

    userInfoDatabase.collection('users').get().then(users => {

        users.forEach(element => {
            if(element.email === emailL.value.trim().toLowerCase() && element.password === passwordL.value.trim() ){
                console.log("Logged In");
                sessionStorage.setItem('globalEmail',emailL.value)
                location.href = "./index.html";
                
            }else{count +=1}    
        });

        if(count==users.length){
            console.log("Email or password incorrect");
        }
        
      })
   
}