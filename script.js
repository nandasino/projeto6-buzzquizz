function limpaTela(){
    document.querySelector(".conteudo").innerHTML= "";
}
telaTeste();
function telaTeste(){
document.querySelector(".conteudo").innerHTML+=`
<div class="telaTeste" onclick="tela31()"></div>
`;
}
function tela31(){
    limpaTela();
    document.querySelector(".conteudo").innerHTML+=`
    <div class="tela3 tela31">
        <h1>Comece pelo começo</h1>
        <div class="caixaTexto">
            <input type="text" placeholder="Título do seu quizz"/>
            <input type="text" placeholder="URL da imagem do seu quizz"/>
            <input type="text" placeholder="Quantidade de perguntas do quizz"/>
            <input type="text" placeholder="Quantidade de níveis do quizz"/>
        </div>
        <button onclick="tela32()"><p>Prosseguir pra criar perguntas</p></button>
    </div>
    `;
}
function tela32(){
    limpaTela();
}