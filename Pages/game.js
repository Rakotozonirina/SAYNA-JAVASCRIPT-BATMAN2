const questions = [
    "Quel est l’autre nom de l’Homme-Mystère ?",
    "Quelle est l’ancienne profession de Harley Quinn ?",
    "Quel est l’objet fétiche de Double Face ?",
    "Quelle ville Batman défend-il ?",
    "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
    "Quel est le prénom des parents du jeune Bruce Wayne ?",
    "Dans son premier Batman (1989) Jack Nicholson jouait :",
    "Qui interprète le Joker en 2008 ?",
    "En quelle année Robin fait il sa première apparition ?",
    "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
    "Qui est Jonathan Crane ?",
    "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
    "Batman c’est aussi le nom d’une ville en...",
    "Qui a realisé Batman en 1964 ?",
    "Quel vilain apparaît pour la première fois dans le Batman 232 ?"
];
const options = [
    ["Le Saphinx","Le Saphir","Le Joker"],
    ["Infimière","Psychiatre","Dentiste"],
    ["Une pièce","Un livre","Un couteau"],
    ["Gotham City","Starling City","Tananarive"],
    ["Georges Clooney","Val Kilmer","Mickael Keaton"],
    ["Matina et Adam","Elaine et Georges","Martha et James"],
    ["Le Pingouin","L'Homme mystère","Le Geek"],
    ["Heath Legder","Haeth Ledger","Heath Ledger"],
    ["1940","1936","1941"],
    ["Oracle Huntress","Black Canary","L'Epouvantail"],
    ["L’Épouvantail","Le Joker","Hugo Strange"],
    ["Emma Watson","Gigi Hadid","Lola Iolani Momoa","Zoë Kravitz"],
    ["Islande","Turquie","Allemagne"],
    ["Stanley Kubrick","Andy Warhol","Leslie Martinson"],
    ["Le Pingouin","Ra’s al Ghul","Poison Ivy"]
];
const answers = [
    "Le Saphinx",
    "Psychiatre",
    "Une pièce",
    "Gotham City",
    "Mickael Keaton",
    "Elaine et Georges",
    "L'Homme mystère",
    "Heath Ledger",
    "1940",
    "Oracle Huntress",
    "L’Épouvantail",
    "Zoë Kravitz",
    "Turquie",
    "Leslie Martinson",
    "Ra’s al Ghul"
];
const imagePath = [
    "../Illustrations/IllustrationGame/Batgame_3.png",
    "../Illustrations/IllustrationGame/Batgame_4.png",
    "../Illustrations/IllustrationGame/Batgame_5.png",
    "../Illustrations/IllustrationGame/Batgame_10.png",
    "../Illustrations/IllustrationGame/Batgame_11.png",
    "../Illustrations/IllustrationGame/Batgame_18.png",
    "../Illustrations/IllustrationGame/Batgame_12.png",
    "../Illustrations/IllustrationGame/Batgame_19.png",
    "../Illustrations/IllustrationGame/Batgame_20.png",
    "../Illustrations/IllustrationGame/Batgame_21.png",
    "../Illustrations/IllustrationGame/Batgame_14.png",
    "../Illustrations/IllustrationGame/Batgame_17.png",
    "../Illustrations/IllustrationGame/Batgame_7.png",
    "../Illustrations/IllustrationGame/Batgame_6.png",
    "../Illustrations/IllustrationGame/Batgame_8.png"
];

const startGame = document.querySelector(".bouton");

startGame.addEventListener("click", () => {
    const displayCoverGame = document.querySelector(".first-show");
    displayCoverGame.style.display = "none";
});

let score = 0;

let currentQuestion = 0;

let currentPosition = 0;

let showNumberQuestion = 1;

const elementImage = document.getElementById("image");

function displayQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    

    elementImage.src = imagePath[currentPosition];

    const DisplayQuestion = document.getElementById("score");
    DisplayQuestion.textContent = `${showNumberQuestion}/15`;

    questionContainer.textContent = questions[currentQuestion];
    optionsContainer.innerHTML = "";

    options[currentQuestion].forEach((option) =>{
        const contenaire = document.createElement("div");
        contenaire.className = "cnt-inp";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;
        checkbox.required = true;
        contenaire.appendChild(checkbox);
        const label = document.createElement("label");
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(option));
        contenaire.appendChild(label)
        optionsContainer.appendChild(contenaire);
    });
}

function checkAnswer() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    checkboxes.forEach((checkbox) => {
        const selectedOption = checkbox.value;
        const correctAnswer = answers[currentQuestion];

        if(selectedOption === correctAnswer){
            score = score + 1;
        };

    });
    console.log("Your score is:" + score);
    currentQuestion++;
    currentPosition++;
    showNumberQuestion++;
    if(showNumberQuestion <= questions.length){
        displayQuestion();
    }else{
        displayResult();
    }
}

function changeImage(){
    elementImage.src = imagePath[currentPosition];
}

function combineFunc(){
    checkAnswer();
    changeImage();
}
function resetResult(){
    displayQuestion();
}
function displayResult(){
    const btn = document.getElementById("submit");
    btn.style.display = "none";
    const showquesopt = document.getElementById("showquesopt");
    showquesopt.style.display = "none";
    const ContainerImage = document.getElementById("imagesContainer");
    ContainerImage.style.display = "none";
    const DisplayQuestion = document.getElementById("score");
    DisplayQuestion.style.display = "none";
    const containerResult = document.querySelector(".display-game");
    const resultH1 = document.getElementById("resultH1");
    const resultP = document.getElementById("resultP");
    if(score <= 5){
        resultH1.textContent = score + "/" + 5 + " c'est pas tout a fait ça...";
        resultP.textContent = "Oula ! heureusement que le Riddler est sous les verous... il faut que vous vous repassiez les films, cette fois en enlevant peut-etre le masque qui vous a bloqué la vue ! Aller, rien n'est perdu ! ";
        const anchor = document.createElement("a");
        anchor.href = "./game.html";
        const btn = document.createElement("button");
        btn.id = "mybutton";
        btn.textContent = "recommencer le quiz";
        anchor.appendChild(btn);
        containerResult.appendChild(anchor);
    }
    if(score > 5 && score <= 10){
        resultH1.textContent = score + "/" + questions.length + " pas mal!";
        resultP.textContent = "Encore un peu d'entrainement avec le Chevalier Noir vous serait bénéfique, mais vous pouvez marcher la tete haute vos connaissances sont là, A vous de les consolider, foncez Gotham est votre terrain de chasse ! ";
        const anchor = document.createElement("a");
        anchor.href = "./game.html";
        const btn = document.createElement("button");
        btn.id = "mybutton";
        btn.textContent = "recommencer le quiz";
        anchor.appendChild(btn);
        containerResult.appendChild(anchor);
    }
    if(score > 10 && score <= questions.length){
        resultH1.textContent = score + "/" + questions.length + " bravo!";
        resultP.textContent = "Vous etes véritablement un super fan de l'univers de Batman ! Comics, films, rien ne vous échapper. Bruce Wayne a de quoi etre fier, Gotham est en paix et Batman peut prendre sa retraite, vous veillez aux gains ! ";
        const anchor = document.createElement("a");
        anchor.href = "./game.html";
        const btn = document.createElement("button");
        btn.id = "mybutton";
        btn.textContent = "recommencer le quiz";
        anchor.appendChild(btn);
        containerResult.appendChild(anchor);
    }

}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", combineFunc);

displayQuestion();