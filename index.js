// Get Letters
let letterWord = "abcdefghijklmnopqrstuvwxyz";

// ArrayFromLetter
let letterArray = Array.from(letterWord);

// Select letterContainer
const letterContainer = document.querySelector(".letters");

// looping on lettarArray

letterArray.forEach((letter) => {
  // Create Span
  let span = document.createElement("span");
  // add Class To Span
  span.className = "letter-box";
  // Append
  span.appendChild(document.createTextNode(letter));
  letterContainer.appendChild(span);
});

// theWords

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// getRandom

let allKeys = Object.keys(words);

// GetRandomNumber
let randomNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomNumber];
let randomPropValue = words[randomPropName];

// randomPropNumber
let randomPropNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValue = randomPropValue[randomPropNumber];

// Select The Category Name

document.querySelector(".category span").innerHTML = randomPropName;

// Guess Letter

let guessWord = document.querySelector(".guess-word");

// Array From Write Word ============= randomValue

let arrayValue = Array.from(randomValue);

arrayValue.forEach((value) => {
  // Create Span
  let span = document.createElement("span");
  // Add class To Span
  span.className = "item";
  // Append
  guessWord.appendChild(span);
});

// Select SpanGuess
let spanGuess = document.querySelectorAll(".guess-word span");
// setOption
let wrongTime = 0;
// Select hangman-draw
let hangDraw = document.querySelector(".hangman-draw");

// HandleClicked

document.addEventListener("click", (e) => {
  // theStatus
  let theStatus = false;
  // Check
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    // e.target At Variable
    let theClicked = e.target.innerHTML.toLowerCase();
    let theChossen = Array.from(randomValue.toLowerCase());
    // Looping On theChossen
    theChossen.forEach((choose, wordIndx) => {
      if (theClicked == choose) {
        theStatus = true;
        spanGuess.forEach((span, indx) => {
          if (wordIndx == indx) {
            span.innerHTML = theClicked;
          }
        });
      }
    });
    if (theStatus !== true) {
      wrongTime++;
      hangDraw.classList.add(`wrong-${wrongTime}`);
      document.getElementById("fail").play();
      if (wrongTime === 8) {
        endGame();
        letterContainer.classList.add("finished");
      }
    } else {
      document.getElementById("success").play();
    }
  }
});

function endGame() {
  // Create div
  let mainDiv = document.createElement("div");
  // add Class To mainDiv
  mainDiv.className = "popup";
  // CreateBox
  let theBox = document.createElement("div");
  theBox.className = "theBox";
  // Create H2
  let theHeading = document.createElement("h2");
  let theHeadText = document.createTextNode("Game Over ☠️ !! The Word Is ");
  // Create Span
  let span = document.createElement("span");
  // Create TextNode
  span.appendChild(document.createTextNode(randomValue));
  // Create Btn
  let theBtn = document.createElement("button");
  // Append TextNode Into Button
  theBtn.appendChild(document.createTextNode("Try Again"));
  // Add Class To Button
  theBtn.className = "theBtn";
  // Add EventClick To theBtn
  theBtn.addEventListener("click", () => {
    window.location.reload();
  });
  // Append Text To theHeading
  theHeading.appendChild(theHeadText);
  // Append Span To theHeading
  theHeading.append(span);
  // Append h2 To theBox
  theBox.appendChild(theHeading);
  // Append button To theBox
  theBox.appendChild(theBtn);
  // Append theBox To mainDiv
  mainDiv.appendChild(theBox);
  // Append h2 To body
  document.body.appendChild(mainDiv);
}
