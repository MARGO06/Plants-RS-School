//const buttons = document.querySelector(".service__buttons");
const buttons = document.querySelectorAll(".button_choice");
const gardens = document.querySelectorAll(".card__garden");
const plantings = document.querySelectorAll(".card__planting");
const lawn = document.querySelector(".card__lawn");
const serviceCards = document.querySelectorAll('.card');
let activeButtons = [];



function showButtons () {
    buttons.forEach(button=>{
        button.addEventListener('click',event=>{
            
    //only two buttons active
    if( activeButtons.length === 0 || (!event.target.classList.contains('active') &&  activeButtons.length === 1)){
        event.target.classList.add('active');
        activeButtons.push(event.target.classList.contains('active'));
        console.log(1)
    } 
    else if ( event.target.classList.contains('active') ){
       event.target.classList.remove('active');
       activeButtons.splice(activeButtons.indexOf(event.target.classList.contains('active')));
       console.log(2)
    }

    

//one card
    if(buttons[0].classList.contains('active')){
        lawn.classList.add('active');
        plantings.forEach(planting=>{
            planting.classList.add('active');
        })
    }
    else if(buttons[1].classList.contains('active')){
        gardens.forEach(garden=>{
            garden.classList.add('active');
        })
        plantings.forEach(planting=>{
            planting.classList.add('active');
        })
    }
    else if(buttons[2].classList.contains('active')){
        gardens.forEach(garden=>{
            garden.classList.add('active');
        })
        lawn.classList.add('active');
    }
    else{
        gardens.forEach(garden=>{
            garden.classList.remove('active');
        })
        lawn.classList.remove('active');
        plantings.forEach(planting=>{
            planting.classList.remove('active');
        })
    }

//two buttons
    if( activeButtons.length === 2 && !buttons[2].classList.contains('active')){
        lawn.classList.remove('active');
        gardens.forEach(garden=>{
            garden.classList.remove('active');
        });
    }
     
    if( activeButtons.length === 2 && !buttons[1].classList.contains('active')){
        plantings.forEach(planting=>{
            planting.classList.remove('active');
        })
        gardens.forEach(garden=>{
            garden.classList.remove('active');
        });
    }
    
    if( activeButtons.length === 2 && !buttons[0].classList.contains('active')){
        lawn.classList.remove('active');
        plantings.forEach(planting=>{
            planting.classList.remove('active');
        })
    }
});
})
}


export {showButtons}