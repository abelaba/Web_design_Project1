
const donationsContainer = document.querySelector(".myDonationsContainer");

const saveChangesButton = document.querySelector(".savechanges");

const startfundraiserButton = document.querySelector(".startNewFundraiserButton")


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
                var withdrawButton = document.createElement("a");


                progress.className = "progress my-2";
                progressbar.className = "progress-bar"
                progressbar.setAttribute("role","progress-bar");
                progressbar.style.width = `${(element.data.accumulated/element.data.goal)*100}%`;
                firstdiv.className = "card mx-md-5 my-3 shadow-lg bg-body rounded";
                firstdiv.style.width = "18rem";
                seconddiv.className = "card-body";
                title.className = "card-title";
                title.innerHTML = element.data.title;
                withdrawButton.className = "withdrawMoney btn btn-success mx-1";
                withdrawButton.innerText = "Withdraw"
                withdrawButton.onclick = function () {
                    sessionStorage.setItem("key",element.key);
                    location.href = "./withdraw.html"

                    
                }

                manage.className = "manage btn btn-primary";
                manage.setAttribute("data-bs-target","#exampleModal")
                manage.setAttribute("data-bs-toggle","modal")
                manage.onclick = function() {

                    
                    
                    sessionStorage.setItem("key",element.key);
                    output = `  
                    
                    
                    <div class="container-fluid">
                            
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
                                        <select class="form-control" name="category" id="category">
                                        <option value="Medical">Medical</option>
                                        <option value="Education">Education</option>
                                        <option value="Memorial">Memorial</option>
                                        
                                        </select>
                                        
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
                seconddiv.appendChild(withdrawButton);
                
                progress.appendChild(progressbar);
                donationsContainer.appendChild(firstdiv);
                
                
                                                                                                           
            }
            
        });
        
        
      });


    
});




startfundraiserButton.addEventListener('click',()=>{
 
    console.log("A");
})







saveChangesButton.onclick = function(){

    if(globalEmail == sessionStorage.getItem("globalEmail")){
        key = sessionStorage.getItem("key")
        console.log("Saved",key);
        donationdatabase.collection('donationinfo').doc(key).update({
            title: mytitle.value,
            category: category.value,
            goal: goal.value,
            message: message.value, 
            mylocation: mylocation.value
            
          })
          
       
    }

    
}


function withdraw() {

    
}