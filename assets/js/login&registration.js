
//Registration
const fname = document.querySelector("#firstName")
const lname = document.querySelector("#lastName")
const email = document.querySelector("#email")
const pword = document.querySelector("#password")
const confirm = document.querySelector("#confirmedPassword")
const signupbutton = document.querySelector("#signup-button")
const form = document.querySelector("form");

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

if(email!=null){form.addEventListener('submit',signup);console.log("me");}
else if (emailL!=null) {form.addEventListener('submit',login);console.log("le")} 

function signup(e){
    e.preventDefault()

    if (emails.includes(email.value)){
        alert ("Email already used");

    }

    else if(confirm.value!=pword.value){
        alert("Enter the same password")
    }

    else{
        userInfoDatabase.collection('users').add({
            firstname: fname.value,
            lname: lname.value,
            email:email.value,
            password:pword.value
          },email.value);

          sessionStorage.setItem('globalEmail',email.value)
          sessionStorage.setItem('fname',fname.value)
          sessionStorage.setItem('lname',lname.value)
          location.href = "./index.html";
    }
        
}

function login(e) {
    e.preventDefault()

    console.log("qq");
    count = 0;

    if(emailL.value.trim().toLowerCase()=="iam@admin"&&passwordL.value.trim()=="iamadmin"){
        location.href = "./admin.html"
    }else{
        userInfoDatabase.collection('users').get().then(users => {

            users.forEach(element => {
                if(element.email === emailL.value.trim().toLowerCase() && element.password === passwordL.value.trim() ){
                    console.log("Logged In");
                    sessionStorage.setItem('globalEmail',emailL.value)
                    sessionStorage.setItem('fname',element.firstname)
                    sessionStorage.setItem('lname',element.lname)
                    location.href = "./index.html";
                    
                }else{count +=1}    
            });
    
            if(count==users.length){
                alert("Email or password incorrect");
            }
            
          })
    }

    
   
}