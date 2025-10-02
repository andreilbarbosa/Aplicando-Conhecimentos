document.addEventListener('DOMContentLoaded', function(){
    const accordions = document.querySelectorAll('.accordion-head');
    for(let i = 0; i < accordions.length; i++){
        accordions[i].addEventListener('click', function(evento){
            evento.target.parentNode.classList.toggle('open');
        })
    }
    
})

