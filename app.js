//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Iniciando variáveis
let amigosInserir = [];
let lista = document.getElementById('listaAmigos'); //listaAmigos: Nomes de amigos inseridos

//Função para Limpar o campo
function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}

//Função para atualizar a lista
function atualizarLista(){
    lista.innerHTML = '';

    amigosInserir.forEach(amigo => { //amigo: nome do botão
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    })
}

//Inserir amigos
function adicionarAmigo(){ //função ao clicar o botão Adicionar
    let nome = document.querySelector('input').value;

    if (nome == ''){
        alert("Você não inseriu nenhum nome!");
        return;
   } else {
        amigosInserir.push(nome);
        limparCampo();
   }
   atualizarLista();
   console.log('Nome registrado: ', nome);
   return nome;
}

//Sortear Amigo Secreto
function sortearAmigo(){
    if (amigosInserir.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio');
        return;
    }
    let amigoSorteado = amigosInserir[Math.floor(Math.random() * amigosInserir.length)];
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}

//Função para limpar a lista e recomeçar o sorteio
function limparLista(){
    amigosInserir = [];
    atualizarLista();
    resultado.innerHTML = '';
}