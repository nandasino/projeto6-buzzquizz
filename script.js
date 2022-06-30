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
        <h1 class="titulo">Comece pelo começo</h1>
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
    document.querySelector(".conteudo").innerHTML+=`
    <div class="tela3 tela32">
        <h1 class="titulo">Crie suas perguntas</h1>
        <div class="caixaTexto">
            <div>
            <h1 class="subtitulo">Pergunta 1</h1>
            <input type="text" placeholder="Texto da pergunta"/>
            <input type="text" placeholder="Cor de fundo da pergunta"/>
            </div>
            <div>
                <h1 class="subtitulo">Resposta correta</h1>
                <input type="text" placeholder="Resposta correta"/>
                <input type="text" placeholder="URL da imagem"/>
            </div>
            <div>
                <h1 class="subtitulo">Respostas incorretas</h1>
                <input type="text" placeholder="Resposta incorreta 1"/>
                <input type="text" placeholder="URL da imagem"/>
            </div>
            <div>
                <input type="text" placeholder="Resposta incorreta 2"/>
                <input type="text" placeholder="URL da imagem"/>
            </div>
            <div>
                <input type="text" placeholder="Resposta incorreta 3"/>
                <input type="text" placeholder="URL da imagem"/>
            </div>
        </div>
        <button onclick="tela33()">Prosseguir pra criar níveis</button>
    </div>
    `
}