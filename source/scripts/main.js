document.addEventListener('DOMContentLoaded', function(){
    const accordion = document.querySelectorAll('.accordion-head');
    for(let i = 0; i < accordion.length; i++){
        accordion[i].addEventListener('click', function(evento){
            evento.target.parentNode.classList.toggle('open');
        })
    }
    
})

