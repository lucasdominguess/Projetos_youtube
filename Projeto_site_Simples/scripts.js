//Funcao Dark_Ligth 

const mode = document.getElementById('mode_icon');

mode.addEventListener('click', ()=> {
    const form = document.getElementById('bodyid');
    if (mode.classList.contains('fa-moon')) { 
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark'); //adc modo dark 
        return;
    }
        
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        form.classList.remove('dark'); 
    
});