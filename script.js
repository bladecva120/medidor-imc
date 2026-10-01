let ponteiro = document.querySelector('.ponteiro')
let valor = document.querySelector('.valor');
let agulha = document.querySelector('.agulha');
let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');
let btnCalcular = document.querySelector('.btn_calcular');
let btnLimpar = document.querySelector('.btn_limpar');


let anguloInicial = -125;

btnCalcular.addEventListener('click', function(){
    let valorPeso = Number(peso.value);
    let valorAltura = Number(altura.value);

    if(valorAltura <= 0 || valorPeso <= 0 || isNaN(valorAltura) || isNaN(valorPeso)){
        alert ('Informe altura e peso válidos');
        return;
    };

    let imc = valorPeso / (valorAltura * valorAltura);
    
    let imcLimitado = Math.max(15, Math.min(imc, 40));
    let angulo = ((imcLimitado - 15) / 25) * 180 - 90;
    /*let angulo = ((imc - 15) / (40 - 15)) * (90 - (-90)) + (-90);*/


     if(imc < 18.5){
        ponteiro.style.transition = `transform 2s ease-out`;
    }else
    if(imc < 25){
        ponteiro.style.transition = `transform 4s ease-out`;
    }else
    if(imc < 30){
        ponteiro.style.transition = `transform 4s ease-out`;
    }else
    if(imc <35){
        ponteiro.style.transition = `transform 4s ease-out`;
    }else
    if(imc < 40){
        ponteiro.style.transition = `transform 3s ease-out`;
    }else{
        ponteiro.style.transition = `transform 3s ease-out`;
    }

    ponteiro.style.transform = `rotate(${angulo}deg)`;
    let resImc = imc.toFixed(2);
    valor.innerHTML = resImc;    
    console.log(resImc);
});

btnLimpar.addEventListener('click', function(){
    altura.value = "";
    peso.value = "";
    valor.innerHTML = "00,00";
    ponteiro.style.transform = `rotate(${anguloInicial}deg)`;
});