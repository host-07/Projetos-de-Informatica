let form = document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
    let peso= parseFloat( document.getElementById("peso").value.replace(",","."));
    let altura= parseFloat( document.getElementById("altura").value.replace(",","."));

    let imc= peso/ (altura * altura)

    let resultado= document.getElementById("resultado");
    resultado.value= imc.toFixed(2)

})
