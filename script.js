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
        <div class="areaPergunta areaPergunta1">
            <div class="caixinhaDeTexto"><h1>Pergunta 1</h1><ion-icon name="create" onclick="togglePergunta1()"></ion-icon></div>
            <div class="caixaTexto caixaTexto1">
                    <div class="divisao">
                    <input type="text" placeholder="Texto da pergunta"/>
                    <input type="text" placeholder="Cor de fundo da pergunta"/>
                    </div>
                    <div class="divisao">
                        <h1 class="subtitulo">Resposta correta</h1>
                        <input type="text" placeholder="Resposta correta"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <h1 class="subtitulo">Respostas incorretas</h1>
                        <input type="text" placeholder="Resposta incorreta 1"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <input type="text" placeholder="Resposta incorreta 2"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <input type="text" placeholder="Resposta incorreta 3"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
            </div>
        </div>
        <div class="areaPergunta areaPergunta2">
            <div class="caixinhaDeTexto"><h1>Pergunta 2</h1><ion-icon name="create" onclick="togglePergunta2()"></ion-icon></div>
            <div class="caixaTexto caixaTexto2">
                    <div class="divisao">
                    <input type="text" placeholder="Texto da pergunta"/>
                    <input type="text" placeholder="Cor de fundo da pergunta"/>
                    </div>
                    <div class="divisao">
                        <h1 class="subtitulo">Resposta correta</h1>
                        <input type="text" placeholder="Resposta correta"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <h1 class="subtitulo">Respostas incorretas</h1>
                        <input type="text" placeholder="Resposta incorreta 1"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <input type="text" placeholder="Resposta incorreta 2"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <input type="text" placeholder="Resposta incorreta 3"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
            </div>
        </div>
        <div class="areaPergunta areaPergunta3">
            <div class="caixinhaDeTexto"><h1>Pergunta 3</h1><ion-icon name="create" onclick="togglePergunta3()"></ion-icon></div>
            <div class="caixaTexto caixaTexto3">
                    <div class="divisao">
                    <input type="text" placeholder="Texto da pergunta"/>
                    <input type="text" placeholder="Cor de fundo da pergunta"/>
                    </div>
                    <div class="divisao">
                        <h1 class="subtitulo">Resposta correta</h1>
                        <input type="text" placeholder="Resposta correta"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <h1 class="subtitulo">Respostas incorretas</h1>
                        <input type="text" placeholder="Resposta incorreta 1"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <input type="text" placeholder="Resposta incorreta 2"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <input type="text" placeholder="Resposta incorreta 3"/>
                        <input type="text" placeholder="URL da imagem"/>
                    </div>
            </div>
        </div>
        <button onclick="tela33()">Prosseguir pra criar níveis</button>
    </div>
    `
}

function togglePergunta1() {
    const caixaPergunta1 = document.querySelector('.caixaTexto1');   
    const aumentaPergunta1= document.querySelector('.areaPergunta1');
    
    caixaPergunta1.classList.toggle('mostrar');
    aumentaPergunta1.classList.toggle('aumentar');
  }
  function togglePergunta2() {
    const caixaPergunta2 = document.querySelector('.caixaTexto2');   
    const aumentaPergunta2= document.querySelector('.areaPergunta2');
    
    caixaPergunta2.classList.toggle('mostrar');
    aumentaPergunta2.classList.toggle('aumentar');
  }
  function togglePergunta3() {
    const caixaPergunta3 = document.querySelector('.caixaTexto3');   
    const aumentaPergunta3= document.querySelector('.areaPergunta3');
    
    caixaPergunta3.classList.toggle('mostrar');
    aumentaPergunta3.classList.toggle('aumentar');
  }
function tela33(){
    limpaTela();
    document.querySelector(".conteudo").innerHTML+=`
    
    `
}
function tela33(){
    limpaTela();
    document.querySelector(".conteudo").innerHTML+=`
    <div class="tela3 tela33">
    <h1 class="titulo">Agora, decida os níveis!</h1>
    <div class="areaNivel areaNivel1">
        <div class="caixinhaDeTexto"><h1>Nível 1</h1><ion-icon name="create" onclick="toggleNivel1()"></ion-icon></div>
        <div class="caixaTexto caixaNivel1">
                <div class="divisao">
                <input type="text" placeholder="Texto da pergunta"/>
                <input type="text" placeholder="Cor de fundo da pergunta"/>
                <input type="text" placeholder="Cor de fundo da pergunta"/>
                <input type="text" placeholder="Cor de fundo da pergunta"/>
                </div>
        </div>
    </div>
    <div class="areaNivel areaNivel2">
        <div class="caixinhaDeTexto"><h1>Nível 2</h1><ion-icon name="create" onclick="toggleNivel2()"></ion-icon></div>
        <div class="caixaTexto caixaNivel2">
                <div class="divisao">
                <input type="text" placeholder="Texto da pergunta"/>
                <input type="text" placeholder="Cor de fundo da pergunta"/>
                <input type="text" placeholder="Texto da pergunta"/>
                <input type="text" placeholder="Cor de fundo da pergunta"/>
                </div>
        </div>
    </div>
    <div class="areaNivel areaNivel3">
        <div class="caixinhaDeTexto"><h1>Nível 3</h1><ion-icon name="create" onclick="toggleNivel3()"></ion-icon></div>
        <div class="caixaTexto caixaNivel3">
                <div class="divisao">
                <input type="text" placeholder="Texto da pergunta"/>
                <input type="text" placeholder="Cor de fundo da pergunta"/>
                <input type="text" placeholder="Texto da pergunta"/>
                <input type="text" placeholder="Cor de fundo da pergunta"/>
                </div>
        </div>
    </div>
    <button onclick="tela34()">Finalizar Quizz</button>
</div> 
    `
}
function toggleNivel1() {
    const caixaNivel1 = document.querySelector('.caixaNivel1');   
    const aumentaNivel1= document.querySelector('.areaNivel1');
    
    caixaNivel1.classList.toggle('mostrar');
    aumentaNivel1.classList.toggle('aumentar');
  }
  function toggleNivel2() {
    const caixaNivel2 = document.querySelector('.caixaNivel2');   
    const aumentaNivel2= document.querySelector('.areaNivel2');
    
    caixaNivel2.classList.toggle('mostrar');
    aumentaNivel2.classList.toggle('aumentar');
  }
  function toggleNivel3() {
    const caixaNivel3 = document.querySelector('.caixaNivel3');   
    const aumentaNivel3 = document.querySelector('.areaNivel3');
    
    caixaNivel3.classList.toggle('mostrar');
    aumentaNivel3.classList.toggle('aumentar');
  }