const accordions = document.querySelectorAll(".accordion_choice");
const pricesAccordion = document.querySelector(".prices__accordion");


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
        })
    })
}

export {showOffer}