function limpaTela(){
    document.querySelector(".conteudo").innerHTML= "";
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
        <button onclick="verificaTela31()"><p>Prosseguir pra criar perguntas</p></button>
    </div>
    `;
}

let qtdPerguntas = 0;
let qtdNiveis = 0;
const quizAPI = {
    title: '',
    image: '',
    questions: [],
    levels: [] 
}

function verificaTela31(){
    const titulo = document.querySelector('input:nth-child(1)').value;
    const url = document.querySelector('input:nth-child(2)').value;
    qtdPerguntas = document.querySelector('input:nth-child(3)').value;
    qtdNiveis = document.querySelector('input:nth-child(4)').value;

    if((titulo.length >= 20) && (titulo.length <= 65) && url && qtdPerguntas >=3 && qtdNiveis >=2){
        quizAPI.title = titulo;
        quizAPI.image = url;
        qtdPerguntas = Number(qtdPerguntas);
        qtdNiveis = Number(qtdNiveis);
        tela32();
    }else{
        alert("Por favor, preencha todos os campos.")
    }
}

function tela32(){
    limpaTela();
    document.querySelector(".conteudo").innerHTML+=`
    <div class="tela3 tela32">
        <h1 class="titulo">Crie suas perguntas</h1>
    </div>
    `

    geraPerguntas();
}

function geraPerguntas(){
    const tela32 = document.querySelector('.tela32');

    for(let index=1; index<=qtdPerguntas; index++){
        tela32.innerHTML += 
        `
        <div class="areaPergunta">
            <div class="caixinhaDeTexto"><h1>Pergunta ${index}</h1><ion-icon name="create" onclick="togglePergunta(this)"></ion-icon></div>
            <div class="caixaTexto">
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

        `
    }

    tela32.innerHTML += 
    `
    <button onclick="verificaTela32()">Prosseguir pra criar níveis</button>
    `;

    
}

function togglePergunta(elemento) {
    const areaPergunta = elemento.parentNode.parentNode;
    const caixaPergunta = areaPergunta.querySelector('.caixaTexto');
    
    caixaPergunta.classList.toggle('mostrar');
    areaPergunta.classList.toggle('aumentar');
}

function verificaTela32(){
    quizAPI.questions.length = 0;

    for(let index=1; index <= qtdPerguntas; index++){
        const areaPergunta = document.querySelector(`.areaPergunta:nth-child(${index+1})`);

        const pergunta = areaPergunta.querySelector('.divisao:nth-child(1)').querySelector('input:nth-child(1)').value;
        const corFundo = areaPergunta.querySelector('input:nth-child(2)').value;
        const respCerta = areaPergunta.querySelector('.divisao:nth-child(2)').querySelector('input:nth-child(2)').value;
        const urlRespCerta = areaPergunta.querySelector('.divisao:nth-child(2)').querySelector('input:nth-child(3)').value;
        const respInc1 = areaPergunta.querySelector('.divisao:nth-child(3)').querySelector('input:nth-child(2)').value;
        const urlrespInc1 = areaPergunta.querySelector('.divisao:nth-child(3)').querySelector('input:nth-child(3)').value;
        const respInc2 = areaPergunta.querySelector('.divisao:nth-child(4)').querySelector('input:nth-child(1)').value;
        const urlrespInc2 = areaPergunta.querySelector('.divisao:nth-child(4)').querySelector('input:nth-child(2)').value;
        const respInc3 = areaPergunta.querySelector('.divisao:nth-child(5)').querySelector('input:nth-child(1)').value;
        const urlrespInc3 = areaPergunta.querySelector('.divisao:nth-child(5)').querySelector('input:nth-child(2)').value;

        questionAPI = {
            title: pergunta,
			color: corFundo,
			answers: [
				{
					text: respCerta,
					image: urlRespCerta,
					isCorrectAnswer: true
				},
				{
					text: respInc1,
					image: urlrespInc1,
					isCorrectAnswer: false
                },
                {
					text: respInc2,
					image: urlrespInc2,
					isCorrectAnswer: false
                },
                {
					text: respInc3,
					image: urlrespInc3,
					isCorrectAnswer: false
                },
            ]
        }

        if(pergunta.length >= 20 && corFundo && respCerta && urlRespCerta && respInc1 && urlrespInc1 && respInc2 && urlrespInc2 && respInc3 && urlrespInc3){
            quizAPI.questions.push(questionAPI)
        }
    }

    if(quizAPI.questions.length === qtdPerguntas){
        tela33();
    }else{
        alert("Por favor, preencha todos os campos.")
    }
}

function tela33(){
    limpaTela();
    document.querySelector(".conteudo").innerHTML+=
    `
    <div class="tela3 tela33">
    <h1 class="titulo">Agora, decida os níveis!</h1>
    `
    geraNiveis();
}
function geraNiveis(){
    const tela33 = document.querySelector('.tela33');
    
    for(let index=1; index <= qtdNiveis; index++){
        tela33.innerHTML += 
        `
        <div class="areaNivel">
            <div class="caixinhaDeTexto"><h1>Nível ${index}</h1><ion-icon name="create" onclick="toggleNivel(this)"></ion-icon></div>
                <div class="caixaTexto">
                        <div class="divisao">
                            <input type="text" placeholder="Texto da pergunta"/>
                            <input type="text" placeholder="Cor de fundo da pergunta"/>
                            <input type="text" placeholder="Cor de fundo da pergunta"/>
                            <input type="text" placeholder="Cor de fundo da pergunta"/>
                        </div>
                </div>
            </div>
        </div> 

        `
    }

    tela33.innerHTML += 
    `
    <button onclick="verificaTela33()">Finalizar Quizz</button>
    `



}

function toggleNivel(elemento) {
    const areaNivel = elemento.parentNode.parentNode;
    const caixaNivel = areaNivel.querySelector('.caixaTexto');   
    
    caixaNivel.classList.toggle('mostrar');
    areaNivel.classList.toggle('aumentar');
}

function verificaTela33(){
    quizAPI.levels.length = 0;

    for(let index=1; index<= qtdNiveis; index++){
        const areaNivel = document.querySelector(`.areaNivel:nth-child(${index+1})`);

        const tituloNivel = areaNivel.querySelector('input:nth-child(1)').value;
        const acertoMin = Number(areaNivel.querySelector('input:nth-child(2)').value);
        const urlNivel = areaNivel.querySelector('input:nth-child(3)').value;
        const descricao = areaNivel.querySelector('input:nth-child(4)').value;

        levelAPI = {

			title: tituloNivel,
			image: urlNivel,
			text: descricao,
			minValue: acertoMin
		}

        if(tituloNivel.length >= 10 && acertoMin >= 0 && acertoMin <=100 && descricao.length >= 30){
            quizAPI.levels.push(levelAPI);
        }
    }
    
    if(quizAPI.levels.length === qtdNiveis){
        tela34();
    }else{
        alert("Por favor, preencha todos os campos corretamente.")
    }
}

function tela34(){
    document.querySelector('.conteudo').innerHTML = 
    `
    <div class="tela34">
        <h1>Seu quiz está pronto!</h1>
        <img src="Imagens/Rectangle 36.png" alt="">
        <div class="acessar-quizz"><p>Acessar Quizz</p></div>
        <div class="voltar-home">Voltar para home</div>
    </div>
    `

    const request = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', quizAPI);
    request.then(() => alert("Foi postado!"))
}

function criaTela1(){
    //limpaTela();
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerHTML = 
    `
    <div class="tela1">

        <div class="seus-quizzes">
            
        </div>

        <div class="todos-quizzes">
            <div class="cabecalho-area">
                <div class="titulo-area"> 
                    Todos os Quizzes
                </div>
            </div>
            <div class="quiz-area">
            </div>
        </div>
    </div>

    `
    geraQuizzes();
}

const listaSeusQuizzes = [];

function geraQuizzes(){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promessa.then(preencheQuizzes);
}

function preencheQuizzes(resposta){
    
    const SeusQuizzes = document.querySelector('.seus-quizzes');
    if (listaSeusQuizzes.length > 0){
        SeusQuizzes.innerHTML = 
        `
        <div class="cabecalho-area">
            <div class="titulo-area">
                Seus Quizzes
            </div>
            <div class="botao-adicionar">
                <ion-icon name="add-circle" onclick="tela31()"></ion-icon>
            </div>
        </div>
        <div class="quiz-area">
        <div class="quiz">
            <img src="Imagens/Rectangle 36.png" alt="">
            <div class="titulo-quiz">TESTE</div>
        </div>
        </div>

        `
    }else{
        SeusQuizzes.innerHTML = 
        `
        <div class="sem-quizz">
            <div class="aviso">Você não criou nenhum quizz ainda :(</div>
            <div class="moldura">
                <div class="botao-criar" onclick="tela31()">Criar Quizz</div>
            </div>    
        </div>

        `
    }

    const listaQuizzes = resposta.data;
    console.log(listaQuizzes);
    const todosQuizzesArea = document.querySelector('.todos-quizzes .quiz-area');

    for(let index=0; index < listaQuizzes.length; index++){
        todosQuizzesArea.innerHTML += 

        `
        <div class="quiz" onclick="buscarQuiz()">
            <img src="${listaQuizzes[index].image}" alt="">
            <div class="titulo-quiz">${listaQuizzes[index].title}</div>
        </div>

        `
    }
}
let conteudoQuiz;
let questoes;
function buscarQuiz(){
    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/9418");
    promessa.then(popularQuiz);
}
function popularQuiz(resposta){
    conteudoQuiz= resposta.data;
    console.log(conteudoQuiz);
    tela2();
}
function tela2(){
    limpaTela();
    document.querySelector(".conteudo").innerHTML+=`
    <div class="tela2">
    <div class="banner">
        <div class="titulo-banner">${conteudoQuiz.title}</div>
    </div>
    <div class="espacoDePerguntas"></div>
</div>      
    `
questoes= conteudoQuiz.questions;
espacoPerguntaQuiz(questoes);
}
function espacoPerguntaQuiz(questoes){
    console.log(questoes);
    for(let i=0;i<questoes.length;i++){
        document.querySelector(".espacoDePerguntas").innerHTML+=`
            <div class="caixaPergunta">
                    <div class="titulo-caixaPergunta cor1"><h1>TITULO DA PERGUNTA</h1></div>
                    <div class="imagensDaPergunta">
                        <div class="opcao"><img src="Imagens/Rectangle 36.png">vrevrevre</div>
                        <div class="opcao"><img src="Imagens/Rectangle 36.png">vervrev</div>
                        <div class="opcao"><img src="Imagens/Rectangle 36.png">evrevr</div>
                        <div class="opcao"><img src="Imagens/Rectangle 36.png">evrevrv</div>
                    </div>
            </div>   
        `
    }
resultadoQuiz();
}
function resultadoQuiz(){
    document.querySelector(".tela2").innerHTML+=`
    <div class="resultado-Quiz">
        <div class="titulo-caixaResultado"><h1>PORCENTAGEM DO RESULTADO</h1></div>
        <div class="conteudosResultado"><img src="Imagens/Rectangle 36.png"><div class="textoResultado"><p>rjvnernvrejnvjreb</p></div></div>
    </div>
    `  
}
//criaTela1();
//tela31();
//tela2();
  
