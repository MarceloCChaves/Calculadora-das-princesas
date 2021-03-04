let valor;
let resultado;
let input = document.getElementById('visor');
let screenResult = document.getElementById('resultOnScreen');
let btns = document.querySelectorAll('button');
const btnnumero1 = document.querySelector('#btn1');
const btnnumero2 = document.querySelector('#btn2');
const btnnumero3 = document.querySelector('#btn3');
const btnnumero4 = document.querySelector('#btn4');
const btnnumero5 = document.querySelector('#btn5');
const btnnumero6 = document.querySelector('#btn6');
const btnnumero7 = document.querySelector('#btn7');
const btnnumero8 = document.querySelector('#btn8');
const btnnumero9 = document.querySelector('#btn9');
const btnnumero0 = document.querySelector('#btn0');
const btnSoma = document.querySelector('#btnSoma');
const btnSub = document.querySelector('#btnSubtrair');
const btnIgual = document.querySelector('#btnIgual');
const btnClear = document.querySelector('#btnClear')

function botao(num){
    valor = calc.visor.value += num
}
function calcular(){
    resultado = eval(valor)
    document.calc.visor.value = resultado
}
function resetar(){
    input.value = ""
    screenResult.style.display = "none"
    for(i=0;i<btns.length;i++){
        btns[i].disabled = false
    }
}
function resultadoNaTela(){
    screenResult.innerHTML = `O resultado de ${valor} é igual a: ` + resultado
    screenResult.style.display = "block"
}
function disableButtons(){
    if(btnIgual){
        for(i=0;i<btns.length;i++){
            btns[i].disabled = true
            btnClear.disabled = false
        }
    }   
}
btnnumero1.addEventListener('click', function(){
    const audio1 = document.querySelector("#audio1")
    audio1.play()
})

btnnumero2.addEventListener('click', function(){
    const audio2 = document.querySelector("#audio2")
    audio2.play()
})
btnnumero3.addEventListener('click', function(){
    const audio3 = document.querySelector("#audio3")
    audio3.play()
})
btnnumero4.addEventListener('click', function(){
    const audio4 = document.querySelector("#audio4")
    audio4.play()
})
btnnumero5.addEventListener('click', function(){
    const audio5 = document.querySelector("#audio5")
    audio5.play()
})
btnnumero6.addEventListener('click', function(){
    const audio6 = document.querySelector("#audio6")
    audio6.play()
})
btnnumero7.addEventListener('click', function(){
    const audio7 = document.querySelector("#audio7")
    audio7.play()
})
btnnumero8.addEventListener('click', function(){
    const audio8 = document.querySelector("#audio8")
    audio8.play()
})
btnnumero9.addEventListener('click', function(){
    const audio9 = document.querySelector("#audio9")
    audio9.play()
})
btnnumero0.addEventListener('click', function(){
    const audio0 = document.querySelector("#audio0")
    audio0.play()
})
btnSoma.addEventListener('click', function(){
    const audioSomar = document.querySelector("#audioSoma")
    audioSomar.play()
})
btnIgual.addEventListener('click', function(){
    const audioIgual = document.querySelector("#audioIgual")
    audioIgual.play()
})
btnSub.addEventListener('click', function(){
    const audioSubtrair = document.querySelector("#audioSubtracao")
    audioSubtrair.play()
})