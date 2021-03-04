const mainbody = document.querySelector(".inner-mainbody");

const search = document.querySelector(".search-bar");
const allLi = document.getElementsByTagName("h5")


let donationdatabase;


document.addEventListener('DOMContentLoaded',showalldonations)

function showalldonations() {
    search.addEventListener('keyup', filterTasks);

    pendingdatabase = new Localbase('pendingdatabase');
    
    pendingdatabase.collection('pending').get({keys:true}).then(info => {
        console.log(info);
        
        
        info.forEach(element => {
           
                        var rowdiv = document.createElement("div");
                        rowdiv.className = "row";

                        var card = document.createElement("div");
                        card.className = "card my-2 shadow p-3 mb-5 bg-white rounded border-0";
                        card.style.width = "80rem";

                        var cardbody =  document.createElement("div");
                        cardbody.className = "card-body";
                        var cardtitle =  document.createElement("h5");
                        cardtitle.className = "card-title";
                        cardtitle.innerText = element.data.title;
                        var cardCategory =  document.createElement("div");
                        cardCategory.className = "card-text";
                        cardCategory.innerText = (element.data.category);
                        var cardtext =  document.createElement("p");
                        cardtext.className = "card-text";
                        cardtext.innerText = (element.data.message).substring(0,200);
                        var viewButton = document.createElement("a");
                        viewButton.className = "view-button float-end btn btn-outline-success";
                        viewButton.innerText =  "View";
                        
                        cardbody.appendChild(cardtitle);
                        cardbody.appendChild(cardCategory);
                        cardbody.appendChild(cardtext);
                        
                        cardbody.appendChild(viewButton);

                        card.appendChild(cardbody);
                        rowdiv.appendChild(card);

                        mainbody.appendChild(rowdiv);

                        viewButton.onclick = function () {
                            sessionStorage.setItem("adminviewkey",element.key);

                            console.log(JSON.parse(sessionStorage.getItem("data")));
                            location.href = "./adminview.html"
                            
                            
                        }



                       
        });
      

    })
    


    
}




function filterTasks() {
    let key = search.value; //key now has the filtered value
    for (let i = 0; i < allLi.length; i++) {
      if ((new RegExp(key.toLowerCase())).test(allLi[i].textContent.toLowerCase())) {
        allLi[i].parentElement.parentElement.parentElement.style.display = "";
      } else {
        allLi[i].parentElement.parentElement.parentElement.style.display = "none";
      }
    }
  }

