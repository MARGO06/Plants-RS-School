const choices = document.querySelectorAll(".contacts__choice");
const city = document.querySelector(".contacts__name");
const phone = document.querySelector(".contacts__phone");
const address = document.querySelector(".contacts__street");
const call = document.querySelector(".contacts_button");
const img = document.querySelector(".contacts__img");
const container = document.querySelector(".container__contacts");


function showData(){
    choices.forEach(choice=>{
      choice.addEventListener("change", event=>{
        event.target.classList.add('active');
        img.classList.add("active");
        container.classList.add(".active");
//change dates
        if( event.target.value === "New York" ){
           city.innerHTML = "New York City";
           phone.innerHTML = "+1 212 456 0002";
           address.innerHTML = "9 East 91st Street";
           call.href = "tel:+12124560002";
        }
        else if( event.target.value === "Yonkers" ){
            city.innerHTML = "Yonkers, NY";
            phone.innerHTML = "+1 914 678 0003";
            address.innerHTML = "511 Warburton Ave";
            call.href = "tel:+19146780003";
         }
        else if( event.target.value === "Sherrill" ){
            city.innerHTML = "Sherrill, NY";
            phone.innerHTML = "+1 315 908 0004";
            address.innerHTML = "14 WEST Noyes BLVD";
            call.href = "tel:+1315908004";
         }
        else if( event.target.value === "Canandaigua" ){
         city.innerHTML = "Canandaigua, NY";
         phone.innerHTML = "+1 585 393 0001";
         address.innerHTML = "151 Charlotte Street";
         call.href = "tel:+15853930001";
      }
      })
    })
}

export {showData}