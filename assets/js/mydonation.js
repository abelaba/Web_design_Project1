const donationsContainer = document.querySelector(".myDonationsContainer");

const saveChangesButton = document.querySelector(".savechanges");

let donationdatabase;

let mytitle, goal, message, mylocation,category;


const modalBody = document.querySelector(".modal-body");
const donationsContainer = document.querySelector(".myDonationsContainer");

const saveChangesButton = document.querySelector(".savechanges");

let donationdatabase;

let mytitle, goal, message, mylocation,category;


const modalBody = document.querySelector(".modal-body");


document.addEventListener('DOMContentLoaded',()=>{
    

   
    donationdatabase = new Localbase('donationdatabase');
    globalEmail = sessionStorage.getItem("globalEmail");
    
    donationdatabase.collection('donationinfo').get({keys:true}).then(info => {

        info.forEach(element => {
            if(element.data.email === globalEmail){
                var firstdiv = document.createElement("div");
                var seconddiv = document.createElement("div");
                var title = document.createElement("h5");
                var manage = document.createElement("a");
                var progress = document.createElement("div");
                var progressbar = document.createElement("div");


                progress.className = "progress my-2";
                progressbar.className = "progress-bar"
                progressbar.setAttribute("role","progress-bar");
                progressbar.style.width = `${(element.data.accumulated/element.data.goal)*100}%`;
                firstdiv.className = "card mx-md-5 my-3 shadow-lg bg-body rounded";
                firstdiv.style.width = "18rem";
                seconddiv.className = "card-body";
                title.className = "card-title";
                title.innerHTML = element.data.title;
                manage.className = "manage btn btn-primary";
                manage.setAttribute("data-bs-target","#exampleModal")
                manage.setAttribute("data-bs-toggle","modal")
               
                manage.innerHTML = "Manage";
                
                firstdiv.appendChild(seconddiv);
                seconddiv.appendChild(title);
                seconddiv.appendChild(progress);
                seconddiv.appendChild(manage);
                
                progress.appendChild(progressbar);
                donationsContainer.appendChild(firstdiv);
                
                
                                                                                                           
            }
            
        });
        
        
      });


    
});