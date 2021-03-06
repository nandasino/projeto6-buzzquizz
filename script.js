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
            <input type="url" placeholder="URL da imagem do seu quizz"/>
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

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

function verificaTela31(){
    const titulo = document.querySelector('input:nth-child(1)').value;
    const url = document.querySelector('input:nth-child(2)').value;
    qtdPerguntas = document.querySelector('input:nth-child(3)').value;
    qtdNiveis = document.querySelector('input:nth-child(4)').value;

    if((titulo.length >= 20) && (titulo.length <= 65) && validURL(url) && qtdPerguntas >=3 && qtdNiveis >=2){
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
                        <input type="url" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <h1 class="subtitulo">Respostas incorretas</h1>
                        <input type="text" placeholder="Resposta incorreta 1"/>
                        <input type="url" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <input type="text" placeholder="Resposta incorreta 2"/>
                        <input type="url" placeholder="URL da imagem"/>
                    </div>
                    <div class="divisao">
                        <input type="text" placeholder="Resposta incorreta 3"/>
                        <input type="url" placeholder="URL da imagem"/>
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

var reg = /^#[0-9A-F]{6}$/i;

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

        console.log(reg.test(corFundo))

        if(pergunta.length >= 20 && reg.test(corFundo) && respCerta && validURL(urlRespCerta) && respInc1 && validURL(urlrespInc1) && respInc2 && validURL(urlrespInc2) && respInc3 && validURL(urlrespInc3)){
            quizAPI.questions.push(questionAPI)
        }
    }

    if(quizAPI.questions.length === qtdPerguntas){
        tela33();
    }else{
        quizAPI.questions = [];
        alert("Por favor, preencha todos os campos corretamente.")
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
                            <input type="text" placeholder="Título do nível"/>
                            <input type="text" placeholder="% de acerto mínima"/>
                            <input type="url" placeholder="URL da imagem do nível"/>
                            <textarea placeholder="Descrição do nível"/></textarea>
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
    let temNivel0 = false;
    quizAPI.levels.length = 0;

    for(let index=1; index<= qtdNiveis; index++){
        const areaNivel = document.querySelector(`.areaNivel:nth-child(${index+1})`);

        const tituloNivel = areaNivel.querySelector('input:nth-child(1)').value;
        const acertoMin = Number(areaNivel.querySelector('input:nth-child(2)').value);
        const urlNivel = areaNivel.querySelector('input:nth-child(3)').value;
        const descricao = areaNivel.querySelector('textarea').value;

        levelAPI = {

			title: tituloNivel,
			image: urlNivel,
			text: descricao,
			minValue: acertoMin
		}

        if(tituloNivel.length >= 10 && acertoMin >= 0 && acertoMin <=100 && descricao.length >= 30 && validURL(urlNivel)){
            quizAPI.levels.push(levelAPI);
        }
    }

    for(let i=0; i<quizAPI.levels.length;i++){
        if(quizAPI.levels[i].minValue == 0){
            temNivel0 = true;
        }
    }
    
    if(quizAPI.levels.length === qtdNiveis && temNivel0){
        tela34();
    }else{
        quizAPI.levels = [];
        alert("Por favor, preencha todos os campos corretamente.")
    }
}

function tela34(){
    const request = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', quizAPI);
    request.then(Sucesso)
    request.catch(() => alert("Deu ruim! Você deve ter colocado uma cor inválida."))
}

function Sucesso(resposta){

    document.querySelector('.conteudo').innerHTML = 
    `
    <div class="tela34">
        <h1>Seu quiz está pronto!</h1>
        <img src="${resposta.data.image}" alt="">
        <div class="acessar-quizz" onclick=buscarQuiz(${resposta.data.id})><p>Acessar Quizz</p></div>
        <div class="voltar-home" onclick="criaTela1()">Voltar para home</div>
    </div>
    `

    if(localStorage.getItem("lista") === null){
        listaSeusQuizzes = [];
    }

    listaSeusQuizzes.push(resposta.data.id);
    console.log(listaSeusQuizzes);
    const listaSeusQuizzesSerializado = JSON.stringify(listaSeusQuizzes);
    console.log(listaSeusQuizzesSerializado);
    localStorage.setItem("lista", listaSeusQuizzesSerializado);
    console.log(localStorage);
    listaSeusQuizzes = JSON.parse(localStorage.getItem("lista"));
    console.log(listaSeusQuizzes);

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

let listaSeusQuizzes = JSON.parse(localStorage.getItem("lista"));

function geraQuizzes(){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promessa.then(preencheQuizzes);
}

function preencheQuizzes(resposta){

    console.log(listaSeusQuizzes);

    const SeusQuizzes = document.querySelector('.seus-quizzes');
    if (listaSeusQuizzes == null){
        listaSeusQuizzes = [];
        SeusQuizzes.innerHTML = 
        `
        <div class="sem-quizz">
            <div class="aviso">Você não criou nenhum quizz ainda :(</div>
            <div class="moldura">
                <div class="botao-criar" onclick="tela31()">Criar Quizz</div>
            </div>    
        </div>
        `
    }else{
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
        </div>

            `
    }

    const listaQuizzes = resposta.data;
    console.log(listaQuizzes);
    

    for(let index=0; index < listaQuizzes.length; index++){
        if(listaSeusQuizzes.includes(listaQuizzes[index].id)){
            const seusQuizzesArea = document.querySelector('.seus-quizzes .quiz-area');
            seusQuizzesArea.innerHTML += 
            `
            <div class="quiz" onclick="buscarQuiz(this.id)" id="${listaQuizzes[index].id}">
                <img src="${listaQuizzes[index].image}" alt="">
                <div class="titulo-quiz">${listaQuizzes[index].title}</div>
            </div>
            `
        }else{
            const todosQuizzesArea = document.querySelector('.todos-quizzes .quiz-area');
            todosQuizzesArea.innerHTML += 
            `
            <div class="quiz" onclick="buscarQuiz(this.id)" id="${listaQuizzes[index].id}">
                <img src="${listaQuizzes[index].image}" alt="">
                <div class="titulo-quiz">${listaQuizzes[index].title}</div>
            </div>

            `
        }
    }
}
let conteudoQuiz;
let questoes;

function buscarQuiz(id){
    console.log(id);
    const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`);
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
    <div class="banner" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${conteudoQuiz.image}');">
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
    console.log(questoes.answers);
    let perguntas_container = document.querySelector('.espacoDePerguntas');
    for(let i=0;i<questoes.length;i++){
        perguntas_container.innerHTML+=`
            <div class="caixaPergunta">
                    <div class="titulo-caixaPergunta" style="background-color:${questoes[i].color};">${questoes[i].title}</div>
                    <div class="imagensDaPergunta">
                    </div>
            </div>   
        `;
        let DOM_respostas = perguntas_container.querySelector(".caixaPergunta:last-child .imagensDaPergunta");

        let arrayquestoes = questoes[i].answers;
        let misturado = arrayquestoes.map(value => ({ value, sort: Math.random() }))
                                 .sort((a, b) => a.sort - b.sort)
                                 .map(({ value }) => value);
        questoes[i].answers = misturado;
        
        for (let j=0; j<questoes[i].answers.length; j++){
            DOM_respostas.innerHTML+=`
            <div class="opcao" onclick="selecionaOpcao(${i},${j},this)" ><img src="${questoes[i].answers[j].image}"><h1>${questoes[i].answers[j].text}</h1></div>
            `
        }
    }

   /* for(let i=0;i<questoes.length;i++){
        for (let index=0; index<=questoes.length; index++){
            document.querySelector(`.caixaPergunta:nth-child(${i+1}) .imagensDaPergunta`).innerHTML+=
            `
            <div class="opcao"><img src="${questoes[i].answers[index].image}">${questoes[i].answers[index].text}</div>
            `
        }
    }*/   
    
}
let arrayRespostas=[];

function selecionaOpcao(questao,opcao,elemento){
    for (let x = 0; x < arrayRespostas.length; x++) {
        if(arrayRespostas[x].question === questao) return;
    }

    const imgsDaPergunta = elemento.parentNode;
    
    for(let i=1; i<=imgsDaPergunta.children.length;i++){
        imgsDaPergunta.querySelector(`.opcao:nth-child(${i})`).classList.add("apagado")
    }

    elemento.classList.remove("apagado");

    
    arrayRespostas.push({
        question: questao,
        chosen_alternative: opcao
        });
    console.log(arrayRespostas);
    const espacoDePerguntas = document.querySelector(".espacoDePerguntas");
    const questoes = espacoDePerguntas.querySelectorAll(".caixaPergunta");

    if (arrayRespostas.length < conteudoQuiz.questions.length){

    }
    else{
        calculaResultado();
        resultadoQuiz();
    }
}
let resultado;
function calculaResultado(){
    let somaCertas= 0;
    let questaoArray;
    let opcaoArray;
    for (let i=0; i<arrayRespostas.length;i++){
        questaoArray= arrayRespostas[i].question;
        opcaoArray = arrayRespostas[i].chosen_alternative;
        if(conteudoQuiz.questions[questaoArray].answers[opcaoArray].isCorrectAnswer){
            somaCertas++;
        }
    }
    resultado = Math.round(100*(somaCertas/arrayRespostas.length));
}

function resultadoQuiz(){
    let nivelAdequado;
    let niveisDoQuiz = conteudoQuiz.levels;
    niveisDoQuiz.sort((a,b) => a.minValue - b.minValue)
    console.log(niveisDoQuiz)

    for(let i=0; i<niveisDoQuiz.length;i++){
        if(resultado >= niveisDoQuiz[i].minValue){
            nivelAdequado = niveisDoQuiz[i];
        }
    }

    document.querySelector(".tela2").innerHTML+=
    `
    <div class="resultado-Quiz">
        <div class="titulo-caixaResultado"><h1>${nivelAdequado.title}</h1></div>
        <div class="conteudosResultado"><img src="${nivelAdequado.image}"><div class="textoResultado"><p>${nivelAdequado.text}</p></div></div>
        <div class="botoes">
            <button class="botaoResultaQuiz" onclick="reiniciaQuiz()">Reiniciar Quizz</button>
            <button class="botaoFinal" onclick="voltaHome()">Voltar para home</button>
        </div>
    </div>
    `  
}
function reiniciaQuiz(){
    buscarQuiz(conteudoQuiz.id)
    const topbar = document.querySelector('.conteudo');
    topbar.scrollIntoView();
    arrayRespostas = [];
}
function voltaHome(){
    document.location.reload(true);
}
criaTela1();
//tela31();
//buscarQuiz(9634);
//tela2();


