/* =========================================================
   BIBLE TRIVIA WITH SOLOMON
   Question Bank + Level Metadata
   ========================================================= */

const SOLOMON_TRIVIA_LEVELS = [
  {
    level: 1,
    name: "Bible Beginnings",
    focus: "Creation, Noah, early Bible stories"
  },
  {
    level: 2,
    name: "Heroes of Faith",
    focus: "Abraham, Joseph, Moses, David and more"
  },
  {
    level: 3,
    name: "Amazing Bible Events",
    focus: "Red Sea, Jericho, Goliath, Jonah and more"
  },
  {
    level: 4,
    name: "Kings, Prophets & Promises",
    focus: "Solomon, Elijah, Isaiah and God's promises"
  },
  {
    level: 5,
    name: "Meet Jesus",
    focus: "His birth, disciples, miracles and teaching"
  },
  {
    level: 6,
    name: "Walking with Jesus",
    focus: "Faith, prayer, compassion and forgiveness"
  },
  {
    level: 7,
    name: "The Cross & Resurrection",
    focus: "Jesus' sacrifice, burial and resurrection"
  },
  {
    level: 8,
    name: "The Gospel",
    focus: "Sin, grace, faith, salvation and forgiveness"
  },
  {
    level: 9,
    name: "Living for Jesus",
    focus: "Holy Spirit, Scripture, prayer and Christian life"
  },
  {
    level: 10,
    name: "Kingdom Champion",
    focus: "Put your whole Bible journey together"
  }
];


/* =========================================================
   QUESTION BANK

   Each question contains:

   id              Unique question ID
   factKey         Unique fact/topic key
   level           Level number
   question        Question text
   answers         Answer choices
   correctIndex    Zero-based correct answer
   explanation     Solomon's short teaching response
   scripture       Optional Scripture reference
   active          Allows us to retire a question later
   ========================================================= */

const SOLOMON_TRIVIA_QUESTIONS = [

  /* =======================================================
     LEVEL 1 — BIBLE BEGINNINGS
     ======================================================= */

  {
    id: "L1-Q001",
    factKey: "creation-god-created-heavens-earth",
    level: 1,
    question: "Who created the heavens and the earth?",
    answers: [
      "God",
      "Moses",
      "Noah",
      "Abraham"
    ],
    correctIndex: 0,
    explanation:
      "God is the Creator of the heavens, the earth, and everything in them.",
    scripture: "Genesis 1:1",
    active: true
  },

  {
    id: "L1-Q002",
    factKey: "adam-eve-first-man-woman",
    level: 1,
    question: "What were the names of the first man and woman?",
    answers: [
      "Abraham and Sarah",
      "Adam and Eve",
      "Noah and Ruth",
      "Joseph and Mary"
    ],
    correctIndex: 1,
    explanation:
      "Adam and Eve were the first man and woman described in the Bible.",
    scripture: "Genesis 2:7, 22",
    active: true
  },

  {
    id: "L1-Q003",
    factKey: "eden-garden-location",
    level: 1,
    question: "Where did Adam and Eve live at the beginning?",
    answers: [
      "Jerusalem",
      "Bethlehem",
      "The Garden of Eden",
      "Egypt"
    ],
    correctIndex: 2,
    explanation:
      "God placed Adam in the Garden of Eden, and Eve lived there with him.",
    scripture: "Genesis 2:8",
    active: true
  },

  {
    id: "L1-Q004",
    factKey: "noah-built-ark",
    level: 1,
    question: "Who built the ark before the great flood?",
    answers: [
      "Noah",
      "David",
      "Daniel",
      "Peter"
    ],
    correctIndex: 0,
    explanation:
      "Noah obeyed God and built the ark exactly as God instructed him.",
    scripture: "Genesis 6:13-22",
    active: true
  },

  {
    id: "L1-Q005",
    factKey: "noah-rainbow-covenant",
    level: 1,
    question: "What sign did God place in the sky after the flood?",
    answers: [
      "A bright star",
      "A rainbow",
      "A pillar of fire",
      "A cloud shaped like a dove"
    ],
    correctIndex: 1,
    explanation:
      "God placed the rainbow in the clouds as a sign of His covenant after the flood.",
    scripture: "Genesis 9:13",
    active: true
  },

  {
    id: "L1-Q006",
    factKey: "creation-six-days",
    level: 1,
    question: "How many days did God use to create the heavens and the earth before resting on the seventh day?",
    answers: [
      "Three days",
      "Five days",
      "Six days",
      "Ten days"
    ],
    correctIndex: 2,
    explanation:
      "God completed His work of creation in six days and rested on the seventh day.",
    scripture: "Genesis 2:2",
    active: true
  },

  {
    id: "L1-Q007",
    factKey: "creation-first-day-light",
    level: 1,
    question: "What did God create on the first day?",
    answers: [
      "Light",
      "Animals",
      "People",
      "The sun and moon"
    ],
    correctIndex: 0,
    explanation:
      "God said, “Let there be light,” and there was light.",
    scripture: "Genesis 1:3",
    active: true
  },

  {
    id: "L1-Q008",
    factKey: "noah-dove-olive-leaf",
    level: 1,
    question: "What did Noah send out from the ark that later returned with an olive leaf?",
    answers: [
      "An eagle",
      "A sparrow",
      "A dove",
      "A raven"
    ],
    correctIndex: 2,
    explanation:
      "Noah sent out a dove, and it later returned with a freshly plucked olive leaf.",
    scripture: "Genesis 8:10-11",
    active: true
  },

  {
    id: "L1-Q009",
    factKey: "cain-killed-abel",
    level: 1,
    question: "Who was the son of Adam and Eve who killed his brother Abel?",
    answers: [
      "Cain",
      "Seth",
      "Noah",
      "Isaac"
    ],
    correctIndex: 0,
    explanation:
      "Cain became angry with his brother Abel and killed him.",
    scripture: "Genesis 4:8",
    active: true
  },

  {
    id: "L1-Q010",
    factKey: "babel-tower",
    level: 1,
    question: "What was the name of the tower people tried to build high into the heavens?",
    answers: [
      "Tower of David",
      "Tower of Babel",
      "Tower of Jericho",
      "Tower of Zion"
    ],
    correctIndex: 1,
    explanation:
      "The people built the Tower of Babel, and God confused their language.",
    scripture: "Genesis 11:4-9",
    active: true
  },

  {
    id: "L1-Q011",
    factKey: "abraham-called-leave-homeland",
    level: 1,
    question: "Who was told by God to leave his homeland and go to a land God would show him?",
    answers: [
      "Abraham",
      "Samuel",
      "Solomon",
      "Jonah"
    ],
    correctIndex: 0,
    explanation:
      "God called Abraham to leave his country and trust Him for the journey ahead.",
    scripture: "Genesis 12:1",
    active: true
  },

  {
    id: "L1-Q012",
    factKey: "sarah-wife-abraham",
    level: 1,
    question: "What was the name of Abraham's wife?",
    answers: [
      "Rachel",
      "Sarah",
      "Ruth",
      "Miriam"
    ],
    correctIndex: 1,
    explanation:
      "Sarah was Abraham's wife and the mother of Isaac.",
    scripture: "Genesis 17:15-19",
    active: true
  },

  {
    id: "L1-Q013",
    factKey: "isaac-promised-son",
    level: 1,
    question: "What was the name of Abraham and Sarah's promised son?",
    answers: [
      "Isaac",
      "Jacob",
      "Joseph",
      "Samuel"
    ],
    correctIndex: 0,
    explanation:
      "Isaac was the son God promised to Abraham and Sarah.",
    scripture: "Genesis 21:1-3",
    active: true
  },

  {
    id: "L1-Q014",
    factKey: "jacob-renamed-israel",
    level: 1,
    question: "Who was Isaac's son whose name was later changed to Israel?",
    answers: [
      "Esau",
      "Jacob",
      "Joseph",
      "Benjamin"
    ],
    correctIndex: 1,
    explanation:
      "Jacob's name was changed to Israel, and his family became the people of Israel.",
    scripture: "Genesis 32:28",
    active: true
  },

  {
    id: "L1-Q015",
    factKey: "joseph-special-coat",
    level: 1,
    question: "Which of Jacob's sons received a special coat from his father?",
    answers: [
      "Judah",
      "Benjamin",
      "Joseph",
      "Reuben"
    ],
    correctIndex: 2,
    explanation:
      "Jacob loved Joseph deeply and gave him a special robe.",
    scripture: "Genesis 37:3",
    active: true
  },

  {
    id: "L1-Q016",
    factKey: "joseph-leader-egypt",
    level: 1,
    question: "Where did Joseph eventually become a powerful leader?",
    answers: [
      "Rome",
      "Egypt",
      "Bethlehem",
      "Babylon"
    ],
    correctIndex: 1,
    explanation:
      "God used Joseph in Egypt, where he rose to great authority under Pharaoh.",
    scripture: "Genesis 41:39-41",
    active: true
  },

  {
    id: "L1-Q017",
    factKey: "joseph-sold-by-brothers",
    level: 1,
    question: "What happened to Joseph after his brothers became jealous of him?",
    answers: [
      "They made him king",
      "They sent him to school",
      "They sold him into slavery",
      "They built him a house"
    ],
    correctIndex: 2,
    explanation:
      "Joseph's brothers sold him into slavery, but God later used Joseph's life for good.",
    scripture: "Genesis 37:28; 50:20",
    active: true
  },

  {
    id: "L1-Q018",
    factKey: "humanity-created-image-of-god",
    level: 1,
    question: "What did God make in His own image?",
    answers: [
      "The stars",
      "Human beings",
      "The oceans",
      "The mountains"
    ],
    correctIndex: 1,
    explanation:
      "The Bible teaches that God created human beings in His own image.",
    scripture: "Genesis 1:27",
    active: true
  },

  {
    id: "L1-Q019",
    factKey: "creation-very-good",
    level: 1,
    question: "What did God say about everything He had made at the end of creation?",
    answers: [
      "It was unfinished",
      "It was very good",
      "It needed repair",
      "It was too small"
    ],
    correctIndex: 1,
    explanation:
      "God looked at everything He had made and declared that it was very good.",
    scripture: "Genesis 1:31",
    active: true
  },

  {
    id: "L1-Q020",
    factKey: "genesis-first-book",
    level: 1,
    question: "Which book of the Bible tells us about Creation, Noah, Abraham, and Joseph?",
    answers: [
      "Genesis",
      "Psalms",
      "Matthew",
      "Revelation"
    ],
    correctIndex: 0,
    explanation:
      "Genesis is the first book of the Bible and tells us about the beginning of God's creation and His early dealings with humanity.",
    scripture: "Genesis",
    active: true
  }

];


/* =========================================================
   HELPERS
   ========================================================= */

function getTriviaLevel(levelNumber) {
  return SOLOMON_TRIVIA_LEVELS.find(
    level => level.level === Number(levelNumber)
  );
}


function getActiveQuestionsForLevel(levelNumber) {
  return SOLOMON_TRIVIA_QUESTIONS.filter(
    question =>
      question.level === Number(levelNumber) &&
      question.active === true
  );
}


function shuffleTriviaQuestions(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] =
      [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}


function getQuestionSetForLevel(levelNumber, count = 10) {
  const questions = getActiveQuestionsForLevel(levelNumber);

  return shuffleTriviaQuestions(questions).slice(0, count);
}


/* =========================================================
   QUESTION BANK VALIDATION

   This checks:
   - duplicate question IDs
   - duplicate fact keys
   - missing fact keys

   It does NOT affect normal gameplay.
   ========================================================= */

function validateTriviaQuestionBank() {
  const seenIds = new Set();
  const seenFactKeys = new Set();

  const duplicateIds = [];
  const duplicateFactKeys = [];
  const missingFactKeys = [];


  SOLOMON_TRIVIA_QUESTIONS.forEach(question => {

    if (seenIds.has(question.id)) {
      duplicateIds.push(question.id);
    } else {
      seenIds.add(question.id);
    }


    if (!question.factKey) {

      missingFactKeys.push(question.id);

    } else if (seenFactKeys.has(question.factKey)) {

      duplicateFactKeys.push(question.factKey);

    } else {

      seenFactKeys.add(question.factKey);
    }

  });


  if (missingFactKeys.length > 0) {
    console.warn(
      "Trivia questions missing fact keys:",
      missingFactKeys
    );
  }


  if (duplicateIds.length > 0) {
    console.error(
      "Duplicate trivia question IDs found:",
      duplicateIds
    );
  }


  if (duplicateFactKeys.length > 0) {
    console.error(
      "Duplicate trivia facts found:",
      duplicateFactKeys
    );
  }


  if (
    missingFactKeys.length === 0 &&
    duplicateIds.length === 0 &&
    duplicateFactKeys.length === 0
  ) {

    console.log(
      `Trivia bank check passed: ${SOLOMON_TRIVIA_QUESTIONS.length} questions, no duplicate IDs or fact keys.`
    );
  }
}


validateTriviaQuestionBank();
