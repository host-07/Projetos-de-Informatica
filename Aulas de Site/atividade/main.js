const tarefa = document.getElementById("tarefa");
const botao = document.getElementById("adicionar");
const tarefas = document.getElementById("tarefas");

//addEventListener ouvir o botão e chamar a função quando clicado
botao.addEventListener("click", adicionarTarefa);

function adicionarTarefa(){
    //alert("Entrou na função");
    //Obter o valor que tem no campo tarefa
    const textoTarefa = tarefa.value;

    //Podemos utilizar o trim() para retirar os espaços desnecessários
    if(textoTarefa.trim() !==""){
        //Criar uma elemento li para inserir a tarefa na lista ul

        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = textoTarefa;
        
        //Carescentar a tarefa no elemento pai ul
        tarefas.appendChild(novaTarefa);
        //Limpar o campo de entrada <input>
        tarefa.value="";

        alert ("Congratulations")

        
    }

    botaoRemover.addEventListener("click", function(adicionarTarefa){
        var alvo = adicionarTarefa.target;
    
        alvo.remove();
    
});
}





