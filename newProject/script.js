document.getElementById('calcular').addEventListener('click',function() { 
    const valor = document.getElementById('valor_acordo').value ;    
    // const valor2 = document.getElementById('valor2').value ;    
    
    

    const total = valor-valor*30/100 ; 

    document.getElementById('resultado').innerHTML= total ;
});