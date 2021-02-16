const mainbody = document.querySelector(".inner-mainbody");


let donationdatabase;


document.addEventListener('DOMContentLoaded',showalldonations)

function showalldonations() {

    donationdatabase = new Localbase('donationdatabase');
    
    donationdatabase.collection('donationinfo').get({keys:true}).then(info => {
        console.log(info);
        let output = '';
        let viewbutton ;
        
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
                        var cardtext =  document.createElement("p");
                        cardtext.className = "card-text";
                        cardtext.innerText = (element.data.message).substring(0,200);
                        var viewButton = document.createElement("a");
                        viewButton.className = "view-button float-end btn btn-outline-success";
                        viewButton.innerText =  "View";
                        
                        cardbody.appendChild(cardtitle);
                        cardbody.appendChild(cardtext);
                        cardbody.appendChild(viewButton);

                        card.appendChild(cardbody);
                        rowdiv.appendChild(card);

                        mainbody.appendChild(rowdiv);

                        viewButton.onclick = function () {
                            sessionStorage.setItem("key",element.key);

                            console.log(JSON.parse(sessionStorage.getItem("data")));
                            location.href = "./donation.html"
                            
                            
                        }



                       
        });
      

    })
    


    
}

