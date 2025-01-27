//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'bem vindo ao jogo do numero secretro';

//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'escolha um numero de 1 a 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Bem vindo ao jogo do numero secreto');
  exibirTextoNaTela('p', 'Escolha um numero de 1 a 10');
}
  exibirMensagemInicial();

function verificarChute() {
  let chute = parseInt(document.querySelector('input').value);

  if (chute == numeroSecreto) {
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    exibirTextoNaTela('h1', 'Acertou!');
    let numeroTentativas = `Parabens voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
    exibirTextoNaTela('p',numeroTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'Numero secreto e menor');
    } else {
      exibirTextoNaTela('p', 'Numero secreto e maior');
    }
    //tentativas = tentativas + 1; ou
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
  if(quantidadeDeNumerosNaLista == 10){
    listaDeNumerosSorteados = [];

  }
  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
} 
function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio ();
  limparCampo ();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}