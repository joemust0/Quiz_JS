const startGameBt = document.querySelector(".start-quiz");
const qtContainer = document.querySelector(".qt-container");
const answersCt = document.querySelector(".answers-ct");
const questionText = document.querySelector(".question");
const nextQuestionBt = document.querySelector(".next-question");
const homeTxt = document.querySelector(".home-txt");
const stGameNav = document.querySelector(".start-quiz-nav");

startGameBt.addEventListener("click", startGame)
stGameNav.addEventListener("click", startGame)
nextQuestionBt.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalcorrect = 0

function startGame(){
    startGameBt.classList.add("hide")
    homeTxt.classList.add("hide")
    qtContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion(){
    resetState()
    if (questions.length === currentQuestionIndex){
        return finishGame ()

    }

    questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer =>{
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button","answer")
        newAnswer.textContent = answer.option
        if(answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        answersCt.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
    function resetState(){
        while(answersCt.firstChild){
            answersCt.removeChild(answersCt.firstChild)
        }
    
        document.body.removeAttribute("class")
        nextQuestionBt.classList.add("hide")
    }


    function selectAnswer(event){
        const answerClicked = event.target

        if (answerClicked.dataset.correct){
            document.body.classList.add("correct")
            totalcorrect++
        }else{
            document.body.classList.add("incorrect")
        }

        document.querySelectorAll(".answer").forEach(button =>{
          if (button.dataset.correct) {
            button.classList.add("correct")
          }else{
            button.classList.add("incorrect")
          }

          button.disabled = true
        })

        nextQuestionBt.classList.remove("hide")
        currentQuestionIndex++
    }
}
    function finishGame(){
        const totalQtn = questions.length
        const performance = Math.floor(totalcorrect * 100 / totalQtn)

        let message = ""

        switch (true){
            case (performance >= 90):
                message = "Parabens!</br> Você foi ótimo!"
                document.body.classList.add("correct")
                break
                case (performance >= 70):
                message = "Muito bom!"
                document.body.classList.add("correct")
                break
                case (performance >= 50):
                message = "Bom!"
                break
                default:
                    message = "Estude mais!</br> Precisa melhorar!"
                    document.body.classList.add("incorrect")
        }

        qtContainer.innerHTML = 
       ` <p class="final-message">
            Você acertou ${totalcorrect} de ${totalQtn} questões!
            <span>Resultado: ${message}</span>
        </p>
        <button onclick=window.location.reload() class=
        "button">
        Refazer o teste
        </button>
       `
    }

const questions = [
    {
        question:  "O que é um algoritmo?",
        answers: [
            { option: "Sequência finita de instruções lógicas e bem definidas.", correct: true},
            { option: "Sequência de números na ordem crescente.", correct: false},
            { option: "Palavras que fazer pensar.", correct: false},
            { option: "Funções em uma programqação.", correct: false},
        ],
    },
    {
        question:  "O que é programação orientada a objetos?",
        answers: [
            { option: "São uma série de comandos dados a um instrumento de análise que se instala no computador, para impedir que o HD seja corrompido.", correct: false},
            { option: "Um tipo de organização que se realiza em códigos com mais de 300 linhas para que não aconteça erros.", correct: false},
            { option: "É a leitura de um código de programação, visando o seu funcionamento.", correct: false},
            { option: "Programação que organiza o código em torno de objetos, que representam entidades do mundo real com características e comportamentos", correct: true}, 
        ],  
    },
    {
        question:  "O que é uma variável em programação?",
        answers: [
            { option: "É o nome de um número.", correct: false},
            { option: "É um local na memória que armazena um valor.", correct: true},
            { option: "É uma sequência de instruções dadas.", correct: false},
            { option: "Locais onde sai as respostar pedida na programação", correct: false},
        ],
    },
    {
        question:  "O que é um banco de dados relacional?",
        answers: [
            { option: "É um banco de dados normal, onde se cadastra as informações desejadas.", correct: false},
            { option: "Copia de restauração do sistema do windows 10.", correct: false},
            { option: "Programa que faz com que o usuário veja seu rendimento mensal com base em dados de entrada e saida no estoque.", correct: false},
            { option: "É um tipo de banco de dados que organiza dados em tabelas compostas por linhas (registros) e colunas (campos).", correct: true},
        ],
    },
    {
        question:  "O que é um sistema operacional?",
        answers: [
            { option: "Assim como o pacote Office, ele é um conjunto de aplicativos com funções parecidas uns com os outros.", correct: false},
            { option: "São atividades que eum computador faz para detectar erros na memória.", correct: false},
            { option: "É um software que gerencia os recursos de hardware e software de um computador.", correct: true},
            { option: "Elemento que sera inspecionado para analisar sua integridade e se precisa ser subistituido.", correct: false},
        ],
    },
]
//e-mail//
const mailNav = document.querySelector(".nav-email")
const envioEmail = document.querySelector(".enviar")
const emailCtt = document.querySelector(".ctt")
const contt = document.querySelector(".e-mail")
const corpo = document.querySelector(".perg")

mailNav.addEventListener("click", contato)
envioEmail.addEventListener("click", enviado)

function contato(){
    contt.classList.remove("hide")//exibe area de e-mail//
    homeTxt.classList.add("hide")//esconde cabeçalho//
    corpo.classList.add("hide")//esconde botão para iniciar questionario//

}
function enviado(){
     alert ("Obrigado pelo contato!"+" Em breve entraremos em contato.")
}