var botaoEnviar = document.getElementById('botao')
var div = document.getElementsByClassName('campo-obrigatorio') 
var nome = document.getElementById('nome')
const inputA = document.getElementsByClassName('input')

nome.addEventListener("change", function() {
    for(var i = 0; i < inputA.length; i++){
    if(inputA.value != 0) {
        inputA.classList.add('borda-verde')
    }else if(inputA.value == 0){
        inputA.classList.remove('borda-verde')
        inputA.classList.add('borda-vermelha')
    }
}
}) 


botaoEnviar.addEventListener('click', function(){
    let input = document.getElementsByClassName('input')
    for(var i = 0; i < input.length; i++){
        if(input[i].value == 0){
            input[i].classList.add('borda-vermelha')
            div[i].innerHTML = '<p>*Campo obrigatório</p>'
        } else if (input[i].value != 0) {
            input[i].classList.remove('borda-vermelha')
            input[i].classList.add('borda-verde')
            div[i].style.visibility = 'hidden' 
        }
}
})








    

