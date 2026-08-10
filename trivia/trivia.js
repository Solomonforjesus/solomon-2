/* =========================================================
   BIBLE TRIVIA WITH SOLOMON
   Game Engine
   Supports:
   - Multiple Choice
   - True / False
   - Fill in the Blank
   ========================================================= */

"use strict";


/* =========================================================
   CONFIGURATION
   ========================================================= */

const TRIVIA_CONFIG = {
  questionsPerLevel: 10,
  progressStorageKey: "solomonTriviaProgressV1"
};


/* =========================================================
   GAME STATE
   ========================================================= */

const gameState = {
  playerName: "",
  currentLevel: 1,
  currentQuestions: [],
  currentQuestionIndex: 0,
  score: 0,
  answeredCurrentQuestion: false,
  highestUnlockedLevel: 1,
  completedLevels: []
};


/* =========================================================
   DOM REFERENCES
   ========================================================= */

const screens = {
  welcome: document.getElementById("screen-welcome"),
  levels: document.getElementById("screen-levels"),
  question: document.getElementById("screen-question"),
  levelComplete: document.getElementById("screen-level-complete"),
  final: document.getElementById("screen-final")
};

const playerNameInput =
  document.getElementById("player-name");

const startGameButton =
  document.getElementById("start-game-btn");

const levelWelcomeMessage =
  document.getElementById("level-welcome-message");

const levelGrid =
  document.getElementById("level-grid");

const levelCards =
  Array.from(document.querySelectorAll(".level-card"));

const crownJewels =
  Array.from(document.querySelectorAll(".crown-jewel"));

const crownProgressText =
  document.getElementById("crown-progress-text");

const backToLevelsButton =
  document.getElementById("back-to-levels-btn");

const currentLevelLabel =
  document.getElementById("current-level-label");

const questionCounter =
  document.getElementById("question-counter");

const currentScore =
  document.getElementById("current-score");

const starCounter =
  document.getElementById("star-counter");

const progressTrack =
  document.querySelector(".progress-track");

const questionProgressBar =
  document.getElementById("question-progress-bar");

const questionLevelName =
  document.getElementById("question-level-name");

const questionText =
  document.getElementById("question-text");

const answerGrid =
  document.getElementById("answer-grid");

const answerButtons =
  Array.from(document.querySelectorAll(".answer-btn"));

const solomonResponse =
  document.getElementById("solomon-response");

const responseIcon =
  document.getElementById("response-icon");

const responseHeading =
  document.getElementById("response-heading");

const responseMessage =
  document.getElementById("response-message");

const responseScripture =
  document.getElementById("response-scripture");

const nextQuestionWrap =
  document.getElementById("next-question-wrap");

const nextQuestionButton =
  document.getElementById("next-question-btn");

const completionTitle =
  document.getElementById("completion-title");

const completionMessage =
  document.getElementById("completion-message");

const resultBadgeIcon =
  document.getElementById("result-badge-icon");

const resultBadgeTitle =
  document.getElementById("result-badge-title");

const resultBadgeScore =
  document.getElementById("result-badge-score");

const jewelMessage =
  document.getElementById("jewel-message");

const continueButton =
  document.getElementById("continue-btn");

const replayLevelButton =
  document.getElementById("replay-level-btn");

const playAgainButton =
  document.getElementById("play-again-btn");

const chooseLevelButton =
  document.getElementById("choose-level-btn");


/* =========================================================
   FILL-IN-THE-BLANK UI
   Created by JavaScript only when needed
   ========================================================= */

const fillBlankWrap =
  document.createElement("div");

fillBlankWrap.id = "fill-blank-wrap";
fillBlankWrap.hidden = true;

fillBlankWrap.innerHTML = `
  <div class="fill-blank-entry">
    <label for="fill-blank-input">
      Type your answer:
    </label>

    <input
      id="fill-blank-input"
      type="text"
      maxlength="40"
      autocomplete="off"
      spellcheck="false"
      placeholder="Your answer"
    />

    <button
      id="fill-blank-submit"
      class="primary-game-btn compact-btn"
      type="button"
    >
      Check Answer
    </button>
  </div>
`;

answerGrid.insertAdjacentElement(
  "afterend",
  fillBlankWrap
);

const fillBlankInput =
  document.getElementById("fill-blank-input");

const fillBlankSubmit =
  document.getElementById("fill-blank-submit");


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initializeTriviaGame
);


function initializeTriviaGame() {
  loadSavedProgress();
  bindEvents();
  updateLevelCards();
  updateCrownProgress();
  showScreen("welcome");
}


/* =========================================================
   EVENT BINDING
   ========================================================= */

function bindEvents() {

  startGameButton.addEventListener(
    "click",
    handleStartGame
  );


  playerNameInput.addEventListener(
    "keydown",
    event => {
      if (event.key === "Enter") {
        handleStartGame();
      }
    }
  );


  levelGrid.addEventListener(
    "click",
    handleLevelSelection
  );


  answerGrid.addEventListener(
    "click",
    handleAnswerSelection
  );


  fillBlankSubmit.addEventListener(
    "click",
    handleFillBlankSubmission
  );


  fillBlankInput.addEventListener(
    "keydown",
    event => {
      if (event.key === "Enter") {
        handleFillBlankSubmission();
      }
    }
  );


  nextQuestionButton.addEventListener(
    "click",
    moveToNextQuestion
  );


  backToLevelsButton.addEventListener(
    "click",
    returnToLevelMap
  );


  continueButton.addEventListener(
    "click",
    handleContinueJourney
  );


  replayLevelButton.addEventListener(
    "click",
    () => startLevel(gameState.currentLevel)
  );


  playAgainButton.addEventListener(
    "click",
    handlePlayAgain
  );


  chooseLevelButton.addEventListener(
    "click",
    returnToLevelMap
  );
}


/* =========================================================
   SCREEN MANAGEMENT
   ========================================================= */

function showScreen(screenName) {

  Object.entries(screens).forEach(
    ([name, screen]) => {

      if (!screen) {
        return;
      }

      const isActive =
        name === screenName;

      screen.hidden =
        !isActive;

      screen.classList.toggle(
        "active-screen",
        isActive
      );
    }
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   START / PLAYER NAME
   ========================================================= */

function handleStartGame() {

  gameState.playerName =
    sanitizePlayerName(
      playerNameInput.value
    );

  updatePlayerGreeting();

  showScreen("levels");
}


function sanitizePlayerName(value) {

  return String(value || "")
    .trim()
    .replace(/[<>]/g, "")
    .slice(0, 24);
}


function updatePlayerGreeting() {

  if (gameState.playerName) {

    levelWelcomeMessage.textContent =
      `Ready, ${gameState.playerName}? Choose a level and continue your Bible journey.`;

  } else {

    levelWelcomeMessage.textContent =
      "Choose a level and continue your Bible journey.";
  }
}


/* =========================================================
   LEVEL SELECTION
   ========================================================= */

function handleLevelSelection(event) {

  const card =
    event.target.closest(".level-card");

  if (!card || card.disabled) {
    return;
  }


  const levelNumber =
    Number(card.dataset.level);


  if (!Number.isInteger(levelNumber)) {
    return;
  }


  startLevel(levelNumber);
}


/* =========================================================
   START LEVEL
   ========================================================= */

function startLevel(levelNumber) {

  const level =
    getTriviaLevel(levelNumber);


  if (!level) {
    return;
  }


  const availableQuestions =
    getActiveQuestionsForLevel(
      levelNumber
    );


  if (
    availableQuestions.length <
    TRIVIA_CONFIG.questionsPerLevel
  ) {

    showTemporaryLevelMessage(
      levelNumber,
      `${level.name} is not ready for play yet.`
    );

    return;
  }


  gameState.currentLevel =
    levelNumber;

  gameState.currentQuestions =
    getQuestionSetForLevel(
      levelNumber,
      TRIVIA_CONFIG.questionsPerLevel
    );

  gameState.currentQuestionIndex = 0;
  gameState.score = 0;
  gameState.answeredCurrentQuestion = false;


  resetQuestionScreen();

  showScreen("question");

  renderCurrentQuestion();
}


/* =========================================================
   TEMPORARY DEVELOPMENT MESSAGE
   ========================================================= */

function showTemporaryLevelMessage(
  levelNumber,
  message
) {

  const card =
    levelCards.find(
      item =>
        Number(item.dataset.level) ===
        levelNumber
    );


  if (!card) {
    return;
  }


  const status =
    card.querySelector(".level-status");


  if (!status) {
    return;
  }


  const previousText =
    status.textContent;


  status.textContent =
    message;


  window.setTimeout(() => {

    updateLevelCards();

    if (
      status.textContent === message
    ) {
      status.textContent =
        previousText;
    }

  }, 2200);
}


/* =========================================================
   RENDER CURRENT QUESTION
   ========================================================= */

function renderCurrentQuestion() {

  const question =
    gameState.currentQuestions[
      gameState.currentQuestionIndex
    ];

  const level =
    getTriviaLevel(
      gameState.currentLevel
    );


  if (!question || !level) {
    return;
  }


  gameState.answeredCurrentQuestion =
    false;


  currentLevelLabel.textContent =
    `Level ${gameState.currentLevel}`;


  questionCounter.textContent =
    `Question ${
      gameState.currentQuestionIndex + 1
    } of ${
      gameState.currentQuestions.length
    }`;


  currentScore.textContent =
    gameState.score;


  starCounter.setAttribute(
    "aria-label",
    `${gameState.score} correct ${
      gameState.score === 1
        ? "answer"
        : "answers"
    }`
  );


  const completedQuestionCount =
    gameState.currentQuestionIndex + 1;


  const progressPercent =
    (
      completedQuestionCount /
      gameState.currentQuestions.length
    ) * 100;


  questionProgressBar.style.width =
    `${progressPercent}%`;


  progressTrack.setAttribute(
    "aria-valuenow",
    String(completedQuestionCount)
  );


  questionLevelName.textContent =
    level.name;


  questionText.textContent =
    question.question;


  resetResponsePanel();

  resetAnswerPresentation();


  if (
    question.type ===
    "fill-blank"
  ) {

    renderFillBlankQuestion();

  } else {

    renderButtonQuestion(
      question
    );
  }


  questionText.setAttribute(
    "tabindex",
    "-1"
  );


  questionText.focus({
    preventScroll: true
  });
}


/* =========================================================
   RESET ANSWER PRESENTATION
   ========================================================= */

function resetAnswerPresentation() {

  answerGrid.hidden = false;

  fillBlankWrap.hidden = true;

  fillBlankInput.value = "";
  fillBlankInput.disabled = false;
  fillBlankSubmit.disabled = false;


  answerButtons.forEach(button => {

    const answerText =
      button.querySelector(".answer-text");

    const answerLetter =
      button.querySelector(".answer-letter");


    button.hidden = false;
    button.style.display = "";
    button.disabled = false;


    button.classList.remove(
      "correct-answer",
      "incorrect-answer"
    );


    if (answerText) {
      answerText.textContent = "";
    }


    if (answerLetter) {
      answerLetter.textContent = "";
    }
  });
}


/* =========================================================
   MULTIPLE CHOICE / TRUE-FALSE
   ========================================================= */

function renderButtonQuestion(question) {

  answerGrid.hidden = false;
  fillBlankWrap.hidden = true;


  answerButtons.forEach(
    (button, index) => {

      const answer =
        question.answers[index];

      const answerText =
        button.querySelector(".answer-text");

      const answerLetter =
        button.querySelector(".answer-letter");


      button.classList.remove(
        "correct-answer",
        "incorrect-answer"
      );


      button.disabled = false;

      answerText.textContent = "";
      answerLetter.textContent = "";


      /*
        IMPORTANT:
        If the current question has no answer
        for this button position, remove it
        completely from the layout.
      */

      if (answer === undefined) {

        button.hidden = true;
        button.style.display = "none";

        return;
      }


      /*
        This button belongs to the current
        question, so restore it explicitly.
      */

      button.hidden = false;
      button.style.display = "";

      answerText.textContent =
        answer;


      if (
        question.type ===
        "true-false"
      ) {

        answerLetter.textContent =
          index === 0
            ? "T"
            : "F";

      } else {

        answerLetter.textContent =
          String.fromCharCode(
            65 + index
          );
      }
    }
  );
}


/* =========================================================
   FILL IN THE BLANK
   ========================================================= */

function renderFillBlankQuestion() {

  answerGrid.hidden = true;
  fillBlankWrap.hidden = false;

  fillBlankInput.value = "";
  fillBlankInput.disabled = false;
  fillBlankSubmit.disabled = false;


  window.setTimeout(() => {

    fillBlankInput.focus({
      preventScroll: true
    });

  }, 50);
}


/* =========================================================
   MULTIPLE CHOICE ANSWER HANDLING
   ========================================================= */

function handleAnswerSelection(event) {

  const button =
    event.target.closest(".answer-btn");


  if (
    !button ||
    button.disabled ||
    gameState.answeredCurrentQuestion
  ) {
    return;
  }


  const question =
    getCurrentQuestion();


  if (
    !question ||
    question.type === "fill-blank"
  ) {
    return;
  }


  const selectedIndex =
    Number(
      button.dataset.answerIndex
    );


  if (!Number.isInteger(selectedIndex)) {
    return;
  }


  gameState.answeredCurrentQuestion =
    true;


  const isCorrect =
    selectedIndex ===
    question.correctIndex;


  if (isCorrect) {

    gameState.score += 1;

    button.classList.add(
      "correct-answer"
    );

  } else {

    button.classList.add(
      "incorrect-answer"
    );


    const correctButton =
      answerButtons[
        question.correctIndex
      ];


    if (correctButton) {

      correctButton.classList.add(
        "correct-answer"
      );
    }
  }


  disableAnswerButtons();

  updateScoreDisplay();

  showSolomonResponse(
    question,
    isCorrect
  );
}


/* =========================================================
   FILL-IN-THE-BLANK ANSWER HANDLING
   ========================================================= */

function handleFillBlankSubmission() {

  if (
    gameState.answeredCurrentQuestion
  ) {
    return;
  }


  const question =
    getCurrentQuestion();


  if (
    !question ||
    question.type !== "fill-blank"
  ) {
    return;
  }


  const typedAnswer =
    normalizeTypedAnswer(
      fillBlankInput.value
    );


  if (!typedAnswer) {
    return;
  }


  const acceptedAnswers =
    question.acceptedAnswers.map(
      answer =>
        normalizeTypedAnswer(answer)
    );


  const isCorrect =
    acceptedAnswers.includes(
      typedAnswer
    );


  gameState.answeredCurrentQuestion =
    true;


  if (isCorrect) {

    gameState.score += 1;
  }


  fillBlankInput.disabled = true;
  fillBlankSubmit.disabled = true;


  updateScoreDisplay();


  showSolomonResponse(
    question,
    isCorrect
  );
}


/* =========================================================
   NORMALIZE TYPED ANSWER
   ========================================================= */

function normalizeTypedAnswer(value) {

  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[.,!?'"“”‘’]/g, "")
    .replace(/\s+/g, " ");
}


/* =========================================================
   CURRENT QUESTION HELPER
   ========================================================= */

function getCurrentQuestion() {

  return gameState.currentQuestions[
    gameState.currentQuestionIndex
  ];
}


/* =========================================================
   SCORE DISPLAY
   ========================================================= */

function updateScoreDisplay() {

  currentScore.textContent =
    gameState.score;


  starCounter.setAttribute(
    "aria-label",
    `${gameState.score} correct ${
      gameState.score === 1
        ? "answer"
        : "answers"
    }`
  );
}


/* =========================================================
   DISABLE ANSWER BUTTONS
   ========================================================= */

function disableAnswerButtons() {

  answerButtons.forEach(
    button => {

      if (
        !button.hidden &&
        button.style.display !== "none"
      ) {

        button.disabled = true;
      }
    }
  );
}


/* =========================================================
   SOLOMON RESPONSE
   ========================================================= */

function showSolomonResponse(
  question,
  isCorrect
) {

  const namePart =
    gameState.playerName
      ? `, ${gameState.playerName}`
      : "";


  solomonResponse.hidden = false;


  solomonResponse.classList.remove(
    "correct-response",
    "gentle-response"
  );


  if (isCorrect) {

    solomonResponse.classList.add(
      "correct-response"
    );

    responseIcon.textContent =
      "★";

    responseHeading.textContent =
      `Correct${namePart}!`;

    responseMessage.textContent =
      question.explanation;

  } else {

    solomonResponse.classList.add(
      "gentle-response"
    );

    responseIcon.textContent =
      "✓";

    responseHeading.textContent =
      `Almost${namePart}!`;


    let correctAnswer = "";


    if (
      question.type ===
      "fill-blank"
    ) {

      correctAnswer =
        question.displayAnswer;

    } else {

      correctAnswer =
        question.answers[
          question.correctIndex
        ];
    }


    responseMessage.textContent =
      `The correct answer is ${correctAnswer}. ${question.explanation}`;
  }


  if (question.scripture) {

    responseScripture.textContent =
      `See ${question.scripture}`;

    responseScripture.hidden =
      false;

  } else {

    responseScripture.hidden =
      true;
  }


  nextQuestionWrap.hidden =
    false;


  responseHeading.setAttribute(
    "tabindex",
    "-1"
  );


  responseHeading.focus({
    preventScroll: true
  });
}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function moveToNextQuestion() {

  if (
    !gameState.answeredCurrentQuestion
  ) {
    return;
  }


  const isLastQuestion =
    gameState.currentQuestionIndex >=
    gameState.currentQuestions.length - 1;


  if (isLastQuestion) {

    completeCurrentLevel();

    return;
  }


  gameState.currentQuestionIndex += 1;

  renderCurrentQuestion();
}


/* =========================================================
   RESET QUESTION SCREEN
   ========================================================= */

function resetQuestionScreen() {

  currentScore.textContent =
    "0";


  questionProgressBar.style.width =
    "10%";


  progressTrack.setAttribute(
    "aria-valuenow",
    "1"
  );


  resetResponsePanel();
}


/* =========================================================
   RESET RESPONSE PANEL
   ========================================================= */

function resetResponsePanel() {

  solomonResponse.hidden =
    true;


  solomonResponse.classList.remove(
    "correct-response",
    "gentle-response"
  );


  responseHeading.textContent =
    "";


  responseMessage.textContent =
    "";


  responseScripture.textContent =
    "";


  responseScripture.hidden =
    true;


  nextQuestionWrap.hidden =
    true;
}


/* =========================================================
   COMPLETE LEVEL
   ========================================================= */

function completeCurrentLevel() {

  const level =
    getTriviaLevel(
      gameState.currentLevel
    );


  if (!level) {
    return;
  }


  markLevelCompleted(
    gameState.currentLevel
  );


  unlockNextLevel(
    gameState.currentLevel
  );


  saveProgress();

  updateLevelCards();
  updateCrownProgress();


  if (
    gameState.currentLevel === 10
  ) {

    showScreen("final");

    return;
  }


  renderCompletionScreen(level);

  showScreen("levelComplete");
}


/* =========================================================
   COMPLETION SCREEN
   ========================================================= */

function renderCompletionScreen(level) {

  const score =
    gameState.score;

  const total =
    gameState.currentQuestions.length;

  const reward =
    getRewardForScore(score);


  completionTitle.textContent =
    getCompletionTitle(score);


  if (gameState.playerName) {

    completionMessage.textContent =
      `${gameState.playerName}, you completed ${level.name}! ${getLearningMessage(level.level)}`;

  } else {

    completionMessage.textContent =
      `You completed ${level.name}! ${getLearningMessage(level.level)}`;
  }


  resultBadgeIcon.textContent =
    reward.icon;


  resultBadgeTitle.textContent =
    reward.title;


  resultBadgeScore.textContent =
    `${score} of ${total} correct`;


  jewelMessage.textContent =
    `You have completed ${
      gameState.completedLevels.length
    } of 10 levels.`;
}


/* =========================================================
   REWARD SYSTEM
   ========================================================= */

function getRewardForScore(score) {

  if (score === 10) {
    return {
      title: "Gold Crown",
      icon: "♛"
    };
  }


  if (score >= 8) {
    return {
      title: "Gold Star",
      icon: "★"
    };
  }


  if (score >= 6) {
    return {
      title: "Silver Star",
      icon: "☆"
    };
  }


  return {
    title: "Bible Explorer",
    icon: "◆"
  };
}


function getCompletionTitle(score) {

  if (score === 10) {
    return "Perfect Round!";
  }


  if (score >= 8) {
    return "Wonderful Work!";
  }


  if (score >= 6) {
    return "Great Job!";
  }


  return "Journey Complete!";
}


/* =========================================================
   LEVEL LEARNING MESSAGES
   ========================================================= */

function getLearningMessage(levelNumber) {

  const messages = {

    1:
      "You learned more about God's creation and the beginnings recorded in Genesis.",

    2:
      "You learned more about people and stories found throughout the Bible.",

    3:
      "You explored some of the Bible's remarkable events.",

    4:
      "You learned about kings, prophets, and God's promises.",

    5:
      "You learned more about Jesus and His life.",

    6:
      "You explored what Jesus taught about following Him.",

    7:
      "You learned more about the cross and resurrection of Jesus Christ.",

    8:
      "You explored the good news of the Gospel.",

    9:
      "You learned more about living faithfully for Jesus.",

    10:
      "You brought your Bible journey together around Jesus Christ and the Gospel."
  };


  return (
    messages[levelNumber] ||
    "You learned more about God's Word."
  );
}


/* =========================================================
   COMPLETED LEVELS
   ========================================================= */

function markLevelCompleted(levelNumber) {

  if (
    !gameState.completedLevels.includes(
      levelNumber
    )
  ) {

    gameState.completedLevels.push(
      levelNumber
    );


    gameState.completedLevels.sort(
      (a, b) => a - b
    );
  }
}


/* =========================================================
   UNLOCK NEXT LEVEL
   ========================================================= */

function unlockNextLevel(levelNumber) {

  const nextLevel =
    levelNumber + 1;


  if (
    nextLevel <=
    SOLOMON_TRIVIA_LEVELS.length
  ) {

    gameState.highestUnlockedLevel =
      Math.max(
        gameState.highestUnlockedLevel,
        nextLevel
      );
  }
}


/* =========================================================
   LEVEL MAP
   ========================================================= */

function updateLevelCards() {

  levelCards.forEach(card => {

    const levelNumber =
      Number(card.dataset.level);


    const status =
      card.querySelector(
        ".level-status"
      );


    const isCompleted =
      gameState.completedLevels.includes(
        levelNumber
      );


    const isUnlocked =
      levelNumber <=
      gameState.highestUnlockedLevel;


    const questionCount =
      getActiveQuestionsForLevel(
        levelNumber
      ).length;


    const hasPlayableBank =
      questionCount >=
      TRIVIA_CONFIG.questionsPerLevel;


    card.classList.toggle(
      "completed",
      isCompleted
    );


    const canPlay =
      isUnlocked &&
      hasPlayableBank;


    card.disabled =
      !canPlay;


    card.classList.toggle(
      "locked",
      !canPlay
    );


    if (!status) {
      return;
    }


    if (isCompleted) {

      status.textContent =
        "✓ Completed — Play Again";

    } else if (
      isUnlocked &&
      hasPlayableBank
    ) {

      status.textContent =
        "Ready to Play";

    } else if (
      isUnlocked &&
      !hasPlayableBank
    ) {

      status.textContent =
        "More Questions Coming";

    } else {

      status.textContent =
        `🔒 Complete Level ${
          levelNumber - 1
        }`;
    }
  });
}


/* =========================================================
   CROWN PROGRESS
   ========================================================= */

function updateCrownProgress() {

  crownJewels.forEach(jewel => {

    const jewelNumber =
      Number(jewel.dataset.jewel);


    const earned =
      gameState.completedLevels.includes(
        jewelNumber
      );


    jewel.classList.toggle(
      "earned",
      earned
    );
  });


  const completedCount =
    gameState.completedLevels.length;


  if (completedCount === 0) {

    crownProgressText.textContent =
      "Complete levels to illuminate the crown.";

    return;
  }


  if (completedCount === 10) {

    crownProgressText.textContent =
      "Your Solomon Crown is complete!";

    return;
  }


  crownProgressText.textContent =
    `${completedCount} of 10 crown jewels illuminated.`;
}


/* =========================================================
   RETURN TO LEVEL MAP
   ========================================================= */

function returnToLevelMap() {

  updateLevelCards();
  updateCrownProgress();
  updatePlayerGreeting();

  showScreen("levels");
}


/* =========================================================
   CONTINUE JOURNEY
   ========================================================= */

function handleContinueJourney() {

  returnToLevelMap();
}


/* =========================================================
   PLAY AGAIN
   ========================================================= */

function handlePlayAgain() {

  gameState.currentLevel = 1;
  gameState.currentQuestions = [];
  gameState.currentQuestionIndex = 0;
  gameState.score = 0;
  gameState.answeredCurrentQuestion = false;

  returnToLevelMap();
}


/* =========================================================
   LOCAL PROGRESS STORAGE
   ========================================================= */

function saveProgress() {

  const progress = {

    highestUnlockedLevel:
      gameState.highestUnlockedLevel,

    completedLevels:
      gameState.completedLevels
  };


  try {

    localStorage.setItem(
      TRIVIA_CONFIG.progressStorageKey,
      JSON.stringify(progress)
    );

  } catch (error) {

    console.warn(
      "Trivia progress could not be saved."
    );
  }
}


/* =========================================================
   LOAD SAVED PROGRESS
   ========================================================= */

function loadSavedProgress() {

  try {

    const saved =
      localStorage.getItem(
        TRIVIA_CONFIG.progressStorageKey
      );


    if (!saved) {
      return;
    }


    const parsed =
      JSON.parse(saved);


    if (
      Number.isInteger(
        parsed.highestUnlockedLevel
      )
    ) {

      gameState.highestUnlockedLevel =
        Math.min(
          Math.max(
            parsed.highestUnlockedLevel,
            1
          ),
          10
        );
    }


    if (
      Array.isArray(
        parsed.completedLevels
      )
    ) {

      gameState.completedLevels =
        parsed.completedLevels
          .filter(
            level =>
              Number.isInteger(level) &&
              level >= 1 &&
              level <= 10
          )
          .filter(
            (
              level,
              index,
              array
            ) =>
              array.indexOf(level) ===
              index
          )
          .sort(
            (a, b) => a - b
          );
    }

  } catch (error) {

    console.warn(
      "Saved trivia progress could not be loaded."
    );
  }
}


/* =========================================================
   DEVELOPMENT / TESTING HELPER
   ========================================================= */

window.resetSolomonTriviaProgress =
  function resetSolomonTriviaProgress() {

    try {

      localStorage.removeItem(
        TRIVIA_CONFIG.progressStorageKey
      );

    } catch (error) {
      /* Ignore storage failure */
    }


    gameState.highestUnlockedLevel = 1;
    gameState.completedLevels = [];
    gameState.currentLevel = 1;
    gameState.currentQuestions = [];
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.answeredCurrentQuestion = false;


    updateLevelCards();
    updateCrownProgress();

    showScreen("welcome");


    console.log(
      "Bible Trivia with Solomon progress reset."
    );
  };
