const title = document.querySelector("#title")
const goal = document.querySelector("#goal")
const message = document.querySelector("#message")
const mylocation = document.querySelector("#location")
const category = document.querySelector("#category")
const form = document.querySelector("form");

const submitbutton = document.querySelector("#submit")

let donationdatabase;

let pendingdatabase = new Localbase('pendingdatabase');

document.addEventListener('DOMContentLoaded',()=>{
    

    loadGlobalEmail()
    donationdatabase = new Localbase('donationdatabase');
    
    donationdatabase.collection('donationinfo').get().then(info => {
        console.log(info)
        
        
      });
    
});

function loadGlobalEmail() {
    if (sessionStorage.getItem("globalEmail")==null) {
        location.href = "./SIGNUP.html"
        alert("Error email not found");
        
    } else {
        return sessionStorage.getItem("globalEmail")

        
    }
};

form.addEventListener('submit',submit);

function submit(e){
    e.preventDefault();

    if(sessionStorage.getItem("globalEmail")!=null){
        let x=0;

        pendingdatabase.collection('pending').add({
            title:title.value,
            goal:goal.value,
            accumulated:x,
            message:message.value,
            mylocation:mylocation.value,
            category:category.value,
            email:loadGlobalEmail()
                
        });

        // donationdatabase.collection('donationinfo').add({
        //     title:title.value,
        //     goal:goal.value,
        //     accumulated:x,
        //     message:message.value,
        //     mylocation:mylocation.value,
        //     category:category.value,
        //     email:loadGlobalEmail()
                
        // });
        location.href="./Mydonations.html";
        console.log("Submitted");

    }
    else{
        console.log("No email");
    }
        

}
    
    