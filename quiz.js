const start_but = document.getElementById("start");
const quit_but = document.getElementById("quit");
const msg = document.querySelector(".msg");
const options = document.querySelectorAll(".opt");
const question = document.querySelector("#question");
var i = -1;
let c = 0;
var score = 0;

quit_but.addEventListener("click", () => {
    clearTimeout(qt);
    clearInterval(xt);
    clearInterval(tdr);
    msg.innerHTML = "You gave up.\nYour score is " + score;
    document.querySelector(".container").style.display = "none";
})

let tdr;
start_but.addEventListener("click", start);
function start() {
    c = -1;
    i = -1;
    score = 0;
    var td = 6;
    tdr = setInterval(() => {
        td -= 1;
        msg.innerHTML = "You will get 10 seconds to answer each question.\nGame starts in ..." + td;
        if (td <= 0) { 
            clearInterval(tdr); 
            optchange(); 
            document.querySelector(".container").style.display = "flex";
            document.querySelector("#progress").style.display = "flex";
        }
    }, 1000);
    quit_but.disabled = false;
}
let qt;
let xt;

let optchange = () => {
    c+=1;
    document.getElementById("bar").value = c;
    document.getElementById("qc").innerHTML = c+"/20";
    clearInterval(xt);
    i += 1;
    if (i < 20) {
        question.innerHTML = Questions[i];
        for (let a = 0; a < 4; a++) { options[a].innerHTML = Options[i][a] };
        qt = setTimeout(optchange, 10000);

        let x = 10;
        msg.innerHTML = "Next question in .." + x;
        xt = setInterval(() => {
            if (x < 1) { clearInterval(xt); }
            x -= 1;
            msg.innerHTML = "Next question in .." + x;
        }, 1000);
    }
    else {
        quit_but.disabled = true;
        msg.innerHTML = "Your score is " + score;
        document.querySelector(".container").style.display = "none";
    }
}

function checkanswer(element) {
    if (element.innerHTML === Answers[i]) {
        element.style.backgroundColor = "green";
        score += 1;
        setTimeout(() => {
            clearTimeout(qt);
            clearInterval(xt);
            element.style.backgroundColor = "#f4a259";
            optchange();
        }, 1000);
    }
    else {
        element.style.backgroundColor = "red";
        setTimeout(() => {
            clearTimeout(qt);
            clearInterval(xt);
            element.style.backgroundColor = "#f4a259";
            optchange();
        }, 1000);
    }
}

const Questions = [
    "What is the capital of France?",
    "Who wrote 'To Kill a Mockingbird'?",
    "What is the largest planet in our solar system?",
    "What year did the Titanic sink?",
    "Who painted the Mona Lisa?",
    "What is the smallest country in the world?",
    "What is the longest river in the world?",
    "Who discovered penicillin?",
    "What is the hardest natural substance on Earth?",
    "What is the main ingredient in guacamole?",
    "Who was the first person to walk on the moon?",
    "What is the tallest mountain in the world?",
    "What is the chemical symbol for gold?",
    "Who wrote 'Pride and Prejudice'?",
    "What is the largest ocean on Earth?",
    "What is the capital of Japan?",
    "Who invented the telephone?",
    "What is the currency of the United Kingdom?",
    "What is the most spoken language in the world?",
    "What is the fastest land animal?"
];
const Answers = [
    "Paris",
    "Harper Lee",
    "Jupiter",
    "1912",
    "Leonardo da Vinci",
    "Vatican City",
    "Nile",
    "Alexander Fleming",
    "Diamond",
    "Avocado",
    "Neil Armstrong",
    "Mount Everest",
    "Au",
    "Jane Austen",
    "Pacific Ocean",
    "Tokyo",
    "Alexander Graham Bell",
    "Pound Sterling",
    "Mandarin Chinese",
    "Cheetah"
];
const Options = [
    ["London", "Berlin", "Madrid", "Paris"],
    ["Jane Austen", "Harper Lee", "Mark Twain", "F. Scott Fitzgerald"],
    ["Jupiter", "Saturn", "Mars", "Earth"],
    ["1914", "1916", "1912", "1918"],
    ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    ["Amazon", "Yangtze", "Nile", "Mississippi"],
    ["Alexander Fleming", "Marie Curie", "Charles Darwin", "Louis Pasteur"],
    ["Ruby", "Emerald", "Diamond", "Sapphire"],
    ["Tomato", "Onion", "Garlic", "Avocado"],
    ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"],
    ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    ["Ag", "Au", "Cu", "Fe"],
    ["Jane Austen", "Emily Bronte", "Charlotte Bronte", "Louisa May Alcott"],
    ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    ["Kyoto", "Osaka", "Yokohama", "Tokyo"],
    ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
    ["Pound Sterling", "Euro", "Dollar", "Yen"],
    ["Spanish", "English", "Mandarin Chinese", "Hindi"],
    ["Lion", "Leopard", "Cheetah", "Jaguar"]
];
