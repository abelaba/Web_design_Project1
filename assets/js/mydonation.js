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
                manage.onclick = function() {

                    
                    
                    sessionStorage.setItem("key",element.key);
                    output = `  <div class="container-fluid">
                            
                                    <div class="mb-3">
                                    <label for="title" class="form-label">Title</label>
                                    <input type="text" value="${element.data.title}" class="form-control" id="title" aria-describedby="title">
                                    </div>
                                    <div class="mb-3">
                                    <label for="goal" class="form-label">Goal</label>
                                    <input type="text" value="${element.data.goal}" class="form-control" id="goal">
                                    </div>
                                    <div class="mb-3">
                                    <label for="category" class="form-label">Category</label>
                                    <input type="text" value="${element.data.category}"class="form-control" id="category">
                                    </div>
                                    <div class="mb-3">
                                    <label for="location" class="form-label">Location</label>
                                    <input type="text" value="${element.data.location}" class="form-control" id="location">
                                    </div>
                                    
                                    <div class="form-group class="mb-3"">
                                        <label for="detail" class="form-label"> Your message</label>
                                        <textarea class="form-control" name="detail" id="message" rows="10" cols='100'>${element.data.message}</textarea>
                        
                                    </div>
                                    
                                
                                </div>`
                    
                    modalBody.innerHTML = output;
                    mytitle = modalBody.firstElementChild.children[0].children[1];
                    goal = modalBody.firstElementChild.children[1].children[1];
                    category = modalBody.firstElementChild.children[2].children[1];
                    
                    mylocation = modalBody.firstElementChild.children[3].children[1];
                    message = modalBody.firstElementChild.children[4].children[1];
                      
                    
                    
                    
                }
               
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