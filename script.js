function limpaTela(){
    document.querySelector(".conteudo").innerHTML= "";
}
//telaTeste();
function telaTeste(){
document.querySelector(".conteudo").innerHTML+=`
<div class="telaTeste" onclick="tela31()"></div>
`;
}
function tela31(){
    limpaTela();
    document.querySelector(".conteudo").innerHTML+=`
    `;
}