const accordions = document.querySelectorAll(".accordion_choice");
const pricesAccordion = document.querySelector(".prices__accordion");
const offers = document.querySelectorAll(".accordion");

function showOffer(){
    accordions.forEach(accordion=>{
        accordion.addEventListener("click",()=>{
           
            if(accordion.classList.contains('active')){
             accordion.classList.remove('active');
             pricesAccordion.classList.remove('active');
            }
            else {
                const accordionsActive = document.querySelectorAll('.active');
                accordionsActive.forEach(accord=>{
                    accord.classList.remove('active');
                })
                accordion.classList.add('active');
                pricesAccordion.classList.add('active');
        }
        
            if(accordions[0].classList.contains('active')){
                offers[1].classList.add('open');
            }else{offers[1].classList.remove('open');}

            if(accordions[1].classList.contains('active')){
                offers[2].classList.add('open');
            }else {
                offers[2].classList.remove('open');
            }
        })
    })
}

export {showOffer}