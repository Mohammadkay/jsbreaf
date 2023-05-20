// declare 30 English questions
import { arr } from "./Register.js";

export function que() {
  const questions = [
    {
      question: "What is the capital of France?",
      choice1: "Paris",
      choice2: "Madrid",
      choice3: "London",
      choice4: "Amsterdam",
      correct: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choice1: "Mars",
      choice2: "Jupiter",
      choice3: "Venus",
      choice4: "Earth",
      correct: "Mars"
    },
    {
      question: "What is the largest ocean on Earth?",
      choice1: "Atlantic Ocean",
      choice2: "Indian Ocean",
      choice3: "Pacific Ocean",
      choice4: "Dead See",
      correct: "Pacific Ocean"
    },
    {
      question: "Who painted the Mona Lisa?",
      choice1: "Vincent van Gogh",
      choice2: "Leonardo da Vinci",
      choice3: "Pablo Picasso",
      choice4: "johnson statham",
      correct: "Leonardo da Vinci"
    },
    {
      question: "What is the chemical symbol for gold?",
      choice1: "Au",
      choice2: "Ag",
      choice3: "Hg",
      choice4: "S",
      correct: "Au"
    },
    {
      question: "Which country is known for inventing the game of cricket?",
      choice1: "India",
      choice2: "Australia",
      choice3: "England",
      choice4: "Bakistan",
      correct: "England"
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      choice1: "William Shakespeare",
      choice2: "George Orwell",
      choice3: "J.K. Rowling",
      choice4: "Ahmad Alshobaki",
      correct: "William Shakespeare"
    },
    {
      question: "Which animal is known as the 'king of the jungle'?",
      choice1: "Elephant",
      choice2: "Lion",
      choice3: "Giraffe",
      choice4: "Tiger",
      correct: "Lion"
    },
    {
      question: "What is the largest planet in our solar system?",
      choice1: "Jupiter",
      choice2: "Saturn",
      choice3: "Neptune",
      choice4: "Earth",
      correct: "Jupiter"
    },
    {
      question: "Who painted the ceiling of the Sistine Chapel?",
      choice1: "Michelangelo",
      choice2: "Pablo Picasso",
      choice3: "Claude Monet",
      choice4: "Laith Alzbaidy",
      correct: "Michelangelo"
    },
    {
      question: "Which country is home to the kangaroo?",
      choice1: "Australia",
      choice2: "Brazil",
      choice3: "Mexico",
      choice4: "Canada",
      correct: "Australia"
    },
    {
      question: "What is the symbol for the chemical element oxygen?",
      choice1: "O",
      choice2: "O2",
      choice3: "H2O",
      choice4: "N",
      correct: "O"
    },
    {
      question: "Who invented the telephone?",
      choice1: "Thomas Edison",
      choice2: "Alexander Graham Bell",
      choice3: "Albert Einstein",
      choice4: "Androw Alex",
      correct: "Alexander Graham Bell"
    },
    {
      question: "What is the tallest mountain in the world?",
      choice1: "Mount Kilimanjaro",
      choice2: "Mount Everest",
      choice3: "Mount Fuji",
      choice4: "Mount Nebo",
      correct: "Mount Everest"
    },
    {
      question: "Which artist painted the famous artwork 'Starry Night'?",
      choice1: "Vincent van Gogh",
      choice2: "Salvador Dali",
      choice3: "Pablo Picasso",
      choice4: "Pablo oscobar",
      correct: "Vincent van Gogh"
    },
    // -------------------------
    {
      question: "Which of the following is a verb?",
      choice1: "House",
      choice2: "Run",
      choice3: "Blue",
      choice4: "Table",
      correct: "Run"
    },
    {
      question: "What is the correct spelling?",
      choice1: "Neccessary",
      choice2: "Necessery",
      choice3: "Necessary",
      choice4: "Neccesary",
      correct: "Necessary"
    },
    {
      question: "Choose the synonym for 'happy':",
      choice1: "Sad",
      choice2: "Angry",
      choice3: "Joyful",
      choice4: "Tired",
      correct: "Joyful"
    },
    {
      question: "Identify the correct sentence:",
      choice1: "She don't like apples",
      choice2: "He doesn't likes apples",
      choice3: "They doesn't like apples",
      choice4: "I don't like apples",
      correct: "I don't like apples"
    },
    {
      question: "What is the plural form of 'child'?",
      choice1: "Childs",
      choice2: "Childen",
      choice3: "Children",
      choice4: "Childies",
      correct: "Children"
    },
    {
      question: "Select the antonym of 'cold':",
      choice1: "Hot",
      choice2: "Warm",
      choice3: "Freezing",
      choice4: "Chilly",
      correct: "Hot"
    },
    {
      question: "Which word is a conjunction?",
      choice1: "But",
      choice2: "Beautiful",
      choice3: "Quickly",
      choice4: "Table",
      correct: "But"
    },
    {
      question: "What is the superlative form of 'good'?",
      choice1: "Gooder",
      choice2: "Better",
      choice3: "Best",
      choice4: "Goodest",
      correct: "Best"
    },
    {
      question: "Choose the correct possessive pronoun:",
      choice1: "Me's",
      choice2: "Yours",
      choice3: "Their",
      choice4: "She",
      correct: "Yours"
    },
    {
      question: "Identify the adverb in the sentence: 'She sings beautifully.'",
      choice1: "Sings",
      choice2: "Beautifully",
      choice3: "She",
      choice4: "The",
      correct: "Beautifully"
    },
    {
      question: "What is the past tense of 'go'?",
      choice1: "Gone",
      choice2: "Went",
      choice3: "Goed",
      choice4: "Going",
      correct: "Went"
    },
    {
      question: "Select the correct sentence:",
      choice1: "We was studying for the test",
      choice2: "They is going to the park",
      choice3: "She am a doctor",
      choice4: "He is playing soccer",
      correct: "He is playing soccer"
    },
    {
      question: "Choose the synonym for 'big':",
      choice1: "Large",
      choice2: "Small",
      choice3: "Tiny",
      choice4: "Huge",
      correct: "Large"
    },
    {
      question: "What is the comparative form of 'happy'?",
      choice1: "Happier",
      choice2: "More happy",
      choice3: "Happyer",
      choice4: "Most happy",
      correct: "Happier"
    },
    {
      question: "Choose the correct spelling:",
      choice1: "ocasion",
      choice2: "occassion",
      choice3: "occasion",
      choice4: "occaision",
      correct: "occasion"
    }
  ];
  //these variables to get score`s correct questions
  let socreArray = [];
  let score = 0;

  // to get 15 questions randomly from the pool of questions
  let randomIndex = [];
  randomIndex.length = 15;
  function shuffle() {
    for (var i = 0; i < randomIndex.length; i++) {
      var ran = Math.floor(Math.random() * questions.length);
      while (randomIndex.includes(ran)) {
        ran = Math.floor(Math.random() * questions.length);
      }
      randomIndex[i] = ran;
      // console.log(questions[randomIndex[i]].question);
      console.log(questions[randomIndex[i]]["question"]);
    }
  }
  shuffle();

  //get key`s object
  let keys = Object.keys(questions[0]);
  console.log(keys);
  //set first questions & choice
  function setFirstValue() {
    $(".title").text(questions[randomIndex[0]][keys[0]]);

    for (let j = 1; j <= 4; j++) {
      $(`#btn-${j}`).text(questions[randomIndex[0]][keys[j]]);
    }
  }
  setFirstValue();
  // counter for question
  var i = 1;
  //set choice and questions isnide  website
  function setChoice() {
    $(".next").on("click", function (event) {
      if (i < 15) {
        for (let j = 1; j < 5; j++) {
          $(`#btn-${j}`).text(questions[randomIndex[i]][keys[j]]);
          //  $(".title").text(questions[randomIndex[i]][keys[0]]);
        }
        $(".title").text(questions[randomIndex[i]]["question"]);
        i++;
        if (i == 15) {
          $(".next").text("submit");
        }
        event.preventDefault();
      } else {
        // window.open('./report.html')
        event.preventDefault();
        let index = sessionStorage.getItem("index");
        arr[index].EnRuslt = score;
        localStorage.setItem("Users", JSON.stringify(arr));
        console.log(arr);
        console.log(arr[index].EnRuslt);
        console.log(sessionStorage.getItem("index"));
        window.open("../Home.html", "_self");
      }
    });
  }

  setChoice();

  // function to get correct answers
  let correctChoice = [];
  function correctAnswer() {
    for (let i = 0; i < randomIndex.length; i++) {
      correctChoice.push(questions[randomIndex[i]]["correct"]);
    }
    // print the correct choices
    console.log(correctChoice);
  }
  correctAnswer();

  //Timer Quiz 12 minutes
  let counter = setInterval(Timer, 1000);
  function Timer() {
    let second = document.querySelector("#sec");
    let minutes = document.querySelector("#min");

    if (minutes.innerHTML <= 0 && second.innerHTML <= 0) {
      clearInterval(counter);
      // Stop the task
      let index = sessionStorage.getItem("index");
      arr[index].EnRuslt = score;
      localStorage.setItem("Users", JSON.stringify(arr));
      window.open("../Home.html", "_self");
      return;
    }
    if (second.innerHTML == 0) {
      second.innerHTML = 60;
      minutes.innerHTML -= 1;
    }
    second.innerHTML -= 1;
  }

  function getValue() {
    $(".QBoxAnsser").on("click", function (event) {
      for (let i = 0; i < correctChoice.length; i++) {
        if ($(event.target).text() === correctChoice[i]) {
          // console.log($(event.target).text() + ' correct')
          if (!socreArray.includes($(event.target).text())) {
            socreArray.push($(event.target).text());
            score += 1;
          }
        }
      }
      // console.log(score)
      // console.log(socreArray)
      event.preventDefault();
    });
    $(".next").on("click", function (event) {
      getValue(); //get correct answer
      event.preventDefault();
    });
  }

  getValue();

  // Change Color in choice
  function changeColor() {
    $(".QBoxAnsser").on("click", function (event) {
      $(event.target).addClass("change-color");
    });
    $(".QBoxAnsser").on("click", function (event) {
      $(".QBoxAnsser").removeClass("change-color");
      $(event.target).addClass("change-color");
    });
    $(".next").on("click", function () {
      $(".QBoxAnsser").removeClass("change-color");
    });
  }
  changeColor();
}
let ent = document.getElementById("engtest");
if (ent !== null) {
  ent.addEventListener("load", que());
}
