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
    focus: "Moses, David, Daniel, Jonah and other familiar Bible people"
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
   SUPPORTED QUESTION TYPES
   ========================================================= */

const SOLOMON_TRIVIA_TYPES = [
  "multiple-choice",
  "true-false",
  "fill-blank"
];


/* =========================================================
   QUESTION BANK
   ========================================================= */

const SOLOMON_TRIVIA_QUESTIONS = [

  /* =======================================================
     LEVEL 1 — BIBLE BEGINNINGS
     ======================================================= */

  {
    id: "L1-Q001",
    factKey: "creation-god-created-heavens-earth",
    level: 1,
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
    type: "multiple-choice",
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
  },


  /* =======================================================
     LEVEL 2 — HEROES OF FAITH
     ======================================================= */

  {
    id: "L2-Q001",
    factKey: "moses-baby-basket-river",
    level: 2,
    type: "multiple-choice",
    question: "Moses was placed in a basket when he was a baby. Where was the basket placed?",
    answers: [
      "In a river",
      "In a cave",
      "In a palace",
      "On a mountain"
    ],
    correctIndex: 0,
    explanation:
      "Moses' mother placed him in a basket among the reeds by the river, where Pharaoh's daughter found him.",
    scripture: "Exodus 2:3-5",
    active: true
  },

  {
    id: "L2-Q002",
    factKey: "david-cared-for-sheep",
    level: 2,
    type: "multiple-choice",
    question: "Before David became king, what animals did he care for?",
    answers: [
      "Camels",
      "Sheep",
      "Horses",
      "Goats"
    ],
    correctIndex: 1,
    explanation:
      "David was a shepherd before he became king of Israel.",
    scripture: "1 Samuel 16:11",
    active: true
  },

  {
    id: "L2-Q003",
    factKey: "daniel-thrown-lions-den",
    level: 2,
    type: "multiple-choice",
    question: "Daniel kept praying to God even when it became dangerous. Where was he thrown?",
    answers: [
      "Into a furnace",
      "Into the sea",
      "Into a lions' den",
      "Into prison"
    ],
    correctIndex: 2,
    explanation:
      "Daniel stayed faithful to God, and God protected him among the lions.",
    scripture: "Daniel 6:16-23",
    active: true
  },

  {
    id: "L2-Q004",
    factKey: "jonah-swallowed-great-fish",
    level: 2,
    type: "multiple-choice",
    question: "Jonah tried to run away from what God told him to do. What swallowed him?",
    answers: [
      "A great fish",
      "A lion",
      "A crocodile",
      "A giant bird"
    ],
    correctIndex: 0,
    explanation:
      "God appointed a great fish to swallow Jonah, and Jonah was inside it for three days and three nights.",
    scripture: "Jonah 1:17",
    active: true
  },

  {
    id: "L2-Q005",
    factKey: "moses-burning-bush",
    level: 2,
    type: "multiple-choice",
    question: "God spoke to Moses from something that was burning but did not burn up. What was it?",
    answers: [
      "A tree",
      "A bush",
      "A tent",
      "A pile of wood"
    ],
    correctIndex: 1,
    explanation:
      "God called Moses from the burning bush and gave him an important mission.",
    scripture: "Exodus 3:2-10",
    active: true
  },

  {
    id: "L2-Q006",
    factKey: "david-sling-stone",
    level: 2,
    type: "multiple-choice",
    question: "David used a sling when he faced Goliath. What did he put in the sling?",
    answers: [
      "A coin",
      "An arrow",
      "A stone",
      "A piece of wood"
    ],
    correctIndex: 2,
    explanation:
      "David trusted God and used a stone from his sling to strike Goliath.",
    scripture: "1 Samuel 17:49",
    active: true
  },

  {
    id: "L2-Q007",
    factKey: "samson-great-strength",
    level: 2,
    type: "true-false",
    question: "True or False: Samson was known for great physical strength.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Samson was given unusual strength by God during his life.",
    scripture: "Judges 14:5-6",
    active: true
  },

  {
    id: "L2-Q008",
    factKey: "ruth-stayed-with-naomi",
    level: 2,
    type: "multiple-choice",
    question: "Ruth chose to stay with which woman instead of leaving her?",
    answers: [
      "Esther",
      "Naomi",
      "Sarah",
      "Miriam"
    ],
    correctIndex: 1,
    explanation:
      "Ruth stayed faithfully with Naomi and traveled with her to a new home.",
    scripture: "Ruth 1:16-17",
    active: true
  },

  {
    id: "L2-Q009",
    factKey: "aaron-moses-brother",
    level: 2,
    type: "multiple-choice",
    question: "What was the name of Moses' brother?",
    answers: [
      "Aaron",
      "David",
      "Samuel",
      "Jonah"
    ],
    correctIndex: 0,
    explanation:
      "Aaron helped Moses speak before Pharaoh and the people.",
    scripture: "Exodus 4:14-16",
    active: true
  },

  {
    id: "L2-Q010",
    factKey: "miriam-moses-sister",
    level: 2,
    type: "multiple-choice",
    question: "What was the name of Moses' sister?",
    answers: [
      "Ruth",
      "Rachel",
      "Miriam",
      "Esther"
    ],
    correctIndex: 2,
    explanation:
      "Miriam watched over baby Moses from a distance when he was placed near the river.",
    scripture: "Exodus 2:4",
    active: true
  },

  {
    id: "L2-Q011",
    factKey: "samuel-heard-god-call",
    level: 2,
    type: "multiple-choice",
    question: "Young Samuel heard someone calling his name during the night. Who was calling him?",
    answers: [
      "King Saul",
      "Moses",
      "God",
      "David"
    ],
    correctIndex: 2,
    explanation:
      "Samuel first thought Eli was calling him, but it was the Lord speaking to him.",
    scripture: "1 Samuel 3:4-10",
    active: true
  },

  {
    id: "L2-Q012",
    factKey: "solomon-famous-wisdom",
    level: 2,
    type: "multiple-choice",
    question: "Solomon became especially famous for something God gave him. What was it?",
    answers: [
      "Great speed",
      "Wisdom",
      "Great height",
      "Musical talent"
    ],
    correctIndex: 1,
    explanation:
      "Solomon asked God for wisdom, and God gave him great understanding.",
    scripture: "1 Kings 3:9-12",
    active: true
  },

  {
    id: "L2-Q013",
    factKey: "esther-became-queen",
    level: 2,
    type: "multiple-choice",
    question: "Esther became what in the land where she lived?",
    answers: [
      "A shepherd",
      "A queen",
      "A prophet",
      "A judge"
    ],
    correctIndex: 1,
    explanation:
      "Esther became queen and later showed courage in helping her people.",
    scripture: "Esther 2:17",
    active: true
  },

  {
    id: "L2-Q014",
    factKey: "david-shepherd-before-king",
    level: 2,
    type: "true-false",
    question: "True or False: David was a shepherd before he became king.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "David cared for sheep before God led him into a very different future.",
    scripture: "1 Samuel 16:11",
    active: true
  },

  {
    id: "L2-Q015",
    factKey: "daniel-protected-lions-den",
    level: 2,
    type: "multiple-choice",
    question: "What happened to Daniel while he was in the lions' den?",
    answers: [
      "God kept him safe",
      "He escaped through a tunnel",
      "The lions carried him away",
      "He fought the lions himself"
    ],
    correctIndex: 0,
    explanation:
      "God sent His angel and shut the lions' mouths so Daniel was not harmed.",
    scripture: "Daniel 6:22",
    active: true
  },

  {
    id: "L2-Q016",
    factKey: "jonah-fish-spit-dry-land",
    level: 2,
    type: "multiple-choice",
    question: "After Jonah was inside the great fish, what eventually happened?",
    answers: [
      "The fish carried him to Egypt",
      "The fish spit him out onto dry land",
      "Jonah stayed there forever",
      "Jonah built a boat inside it"
    ],
    correctIndex: 1,
    explanation:
      "God commanded the fish, and it released Jonah onto dry land.",
    scripture: "Jonah 2:10",
    active: true
  },

  {
    id: "L2-Q017",
    factKey: "moses-led-israel-out-egypt",
    level: 2,
    type: "multiple-choice",
    question: "Moses later helped lead God's people out of which country?",
    answers: [
      "Egypt",
      "Rome",
      "Greece",
      "Babylon"
    ],
    correctIndex: 0,
    explanation:
      "God used Moses to lead the Israelites out of slavery in Egypt.",
    scripture: "Exodus 12:31-42",
    active: true
  },

  {
    id: "L2-Q018",
    factKey: "david-became-king-after-saul",
    level: 2,
    type: "multiple-choice",
    question: "After Saul, which man became king of Israel?",
    answers: [
      "Daniel",
      "David",
      "Aaron",
      "Jonah"
    ],
    correctIndex: 1,
    explanation:
      "David became king after Saul and ruled Israel for many years.",
    scripture: "2 Samuel 5:3-4",
    active: true
  },

  {
    id: "L2-Q019",
    factKey: "esther-courage-helped-people",
    level: 2,
    type: "true-false",
    question: "True or False: Esther showed courage by helping her people when they were in danger.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Esther bravely spoke up when her people were threatened.",
    scripture: "Esther 4:14-16",
    active: true
  },

  {
    id: "L2-Q020",
    factKey: "solomon-father-david",
    level: 2,
    type: "multiple-choice",
    question: "Solomon's father was also a famous king. What was his name?",
    answers: [
      "David",
      "Moses",
      "Daniel",
      "Joshua"
    ],
    correctIndex: 0,
    explanation:
      "David was Solomon's father and king of Israel before him.",
    scripture: "1 Kings 2:10-12",
    active: true
  },
  /* =======================================================
     LEVEL 3 — AMAZING BIBLE EVENTS
     ======================================================= */

  {
    id: "L3-Q001",
    factKey: "red-sea-divided",
    level: 3,
    type: "multiple-choice",
    question: "When Moses stretched out his hand over the sea, what happened?",
    answers: [
      "The water turned red",
      "The sea divided",
      "Fish jumped onto the land",
      "A storm began"
    ],
    correctIndex: 1,
    explanation:
      "God divided the sea so the Israelites could cross safely.",
    scripture: "Exodus 14:21-22",
    active: true
  },

  {
    id: "L3-Q002",
    factKey: "red-sea-crossed-dry-ground",
    level: 3,
    type: "multiple-choice",
    question: "The Israelites walked through the Red Sea on what kind of ground?",
    answers: [
      "Muddy ground",
      "Dry ground",
      "Sand dunes",
      "A wooden bridge"
    ],
    correctIndex: 1,
    explanation:
      "God made a path through the sea, and the people crossed on dry ground.",
    scripture: "Exodus 14:22",
    active: true
  },

  {
    id: "L3-Q003",
    factKey: "jericho-walls-fell",
    level: 3,
    type: "true-false",
    question: "True or False: The walls of Jericho fell after the Israelites marched around the city as God instructed.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "The people obeyed God, shouted, and the walls of Jericho fell.",
    scripture: "Joshua 6:20",
    active: true
  },

  {
    id: "L3-Q004",
    factKey: "david-defeated-goliath",
    level: 3,
    type: "multiple-choice",
    question: "What did David defeat when he was still a young man?",
    answers: [
      "A bear named Saul",
      "A giant named Goliath",
      "A king from Egypt",
      "A lion in a palace"
    ],
    correctIndex: 1,
    explanation:
      "David trusted God when he faced Goliath and defeated him.",
    scripture: "1 Samuel 17:45-50",
    active: true
  },

  {
    id: "L3-Q005",
    factKey: "fiery-furnace-men-protected",
    level: 3,
    type: "multiple-choice",
    question: "Three men were thrown into a fiery furnace because they would not worship a golden image. What happened to them?",
    answers: [
      "They escaped before the fire started",
      "They were protected from the fire",
      "They hid under the furnace",
      "They put out the fire themselves"
    ],
    correctIndex: 1,
    explanation:
      "God protected Shadrach, Meshach, and Abednego in the fiery furnace.",
    scripture: "Daniel 3:24-27",
    active: true
  },

  {
    id: "L3-Q006",
    factKey: "manna-fed-israelites",
    level: 3,
    type: "multiple-choice",
    question: "What came down from heaven to feed the Israelites in the wilderness?",
    answers: [
      "Manna",
      "Apples",
      "Bread from Egypt",
      "Fish"
    ],
    correctIndex: 0,
    explanation:
      "God provided manna for His people while they traveled through the wilderness.",
    scripture: "Exodus 16:14-15",
    active: true
  },

  {
    id: "L3-Q007",
    factKey: "ten-commandments-mount-sinai",
    level: 3,
    type: "true-false",
    question: "True or False: God gave Moses the Ten Commandments on Mount Sinai.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "God gave Moses the commandments on Mount Sinai.",
    scripture: "Exodus 19-20",
    active: true
  },

  {
    id: "L3-Q008",
    factKey: "water-from-rock",
    level: 3,
    type: "multiple-choice",
    question: "When the Israelites needed water in the wilderness, what did God provide from a rock?",
    answers: [
      "Oil",
      "Water",
      "Honey",
      "Milk"
    ],
    correctIndex: 1,
    explanation:
      "God provided water for His people from the rock.",
    scripture: "Exodus 17:5-6",
    active: true
  },

  {
    id: "L3-Q009",
    factKey: "jordan-river-stopped",
    level: 3,
    type: "multiple-choice",
    question: "What happened when Joshua and the Israelites crossed the Jordan River?",
    answers: [
      "The water stopped so they could cross",
      "They built boats",
      "They swam across",
      "A bridge appeared"
    ],
    correctIndex: 0,
    explanation:
      "God stopped the river so His people could cross safely.",
    scripture: "Joshua 3:14-17",
    active: true
  },

  {
    id: "L3-Q010",
    factKey: "sun-stood-still-joshua",
    level: 3,
    type: "multiple-choice",
    question: "What unusual thing happened when Joshua prayed during a battle?",
    answers: [
      "The moon disappeared",
      "The sun stood still",
      "It began to snow",
      "The mountains moved"
    ],
    correctIndex: 1,
    explanation:
      "Scripture says the sun stood still while Joshua and Israel fought their enemies.",
    scripture: "Joshua 10:12-14",
    active: true
  },

  {
    id: "L3-Q011",
    factKey: "elijah-fire-mount-carmel",
    level: 3,
    type: "multiple-choice",
    question: "Elijah prayed on Mount Carmel and fire came down from heaven. What did the fire burn?",
    answers: [
      "Only the wood",
      "The sacrifice, wood, stones, and water",
      "The whole mountain",
      "Elijah's clothes"
    ],
    correctIndex: 1,
    explanation:
      "God answered Elijah's prayer with fire, showing the people that the Lord is God.",
    scripture: "1 Kings 18:36-39",
    active: true
  },

  {
    id: "L3-Q012",
    factKey: "daniel-survived-lions-den",
    level: 3,
    type: "true-false",
    question: "True or False: Daniel survived spending a night in a lions' den.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "God protected Daniel, and he was brought safely out of the lions' den.",
    scripture: "Daniel 6:22-23",
    active: true
  },

  {
    id: "L3-Q013",
    factKey: "jonah-fish-after-sea",
    level: 3,
    type: "multiple-choice",
    question: "What happened to Jonah after he was thrown into the sea?",
    answers: [
      "He swam to shore",
      "A great fish swallowed him",
      "A boat rescued him",
      "He walked on the water"
    ],
    correctIndex: 1,
    explanation:
      "God appointed a great fish to swallow Jonah.",
    scripture: "Jonah 1:17",
    active: true
  },

  {
    id: "L3-Q014",
    factKey: "gideon-army-300",
    level: 3,
    type: "multiple-choice",
    question: "When Gideon's small army went into battle, how many men did he have?",
    answers: [
      "30",
      "300",
      "3,000",
      "30,000"
    ],
    correctIndex: 1,
    explanation:
      "God reduced Gideon's army to 300 men so Israel would know the victory came from Him.",
    scripture: "Judges 7:7",
    active: true
  },

  {
    id: "L3-Q015",
    factKey: "samson-pillars-building-fell",
    level: 3,
    type: "multiple-choice",
    question: "What happened when Samson pushed against the pillars of the building?",
    answers: [
      "The doors opened",
      "The building fell",
      "Fire came down",
      "The pillars turned to water"
    ],
    correctIndex: 1,
    explanation:
      "Samson pushed against the pillars, and the building collapsed.",
    scripture: "Judges 16:29-30",
    active: true
  },

  {
    id: "L3-Q016",
    factKey: "balaam-donkey-spoke",
    level: 3,
    type: "true-false",
    question: "True or False: God used a donkey to speak to Balaam.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "God opened the donkey's mouth, and it spoke to Balaam.",
    scripture: "Numbers 22:28",
    active: true
  },

  {
    id: "L3-Q017",
    factKey: "lots-wife-pillar-salt",
    level: 3,
    type: "multiple-choice",
    question: "What happened to Lot's wife when she looked back toward Sodom?",
    answers: [
      "She became a pillar of salt",
      "She became invisible",
      "She fell asleep",
      "She turned into stone"
    ],
    correctIndex: 0,
    explanation:
      "Scripture says Lot's wife looked back and became a pillar of salt.",
    scripture: "Genesis 19:26",
    active: true
  },

  {
    id: "L3-Q018",
    factKey: "pillar-fire-guided-night",
    level: 3,
    type: "multiple-choice",
    question: "What did God send to guide the Israelites by night while they traveled through the wilderness?",
    answers: [
      "A bright star",
      "A pillar of fire",
      "An angel with a torch",
      "Lightning"
    ],
    correctIndex: 1,
    explanation:
      "God guided His people by a pillar of cloud during the day and a pillar of fire at night.",
    scripture: "Exodus 13:21-22",
    active: true
  },

  {
    id: "L3-Q019",
    factKey: "elisha-axe-head-floated",
    level: 3,
    type: "multiple-choice",
    question: "A borrowed iron axe head fell into the water during the prophet Elisha's time. What happened next?",
    answers: [
      "It floated",
      "It disappeared",
      "It turned into gold",
      "A fish swallowed it"
    ],
    correctIndex: 0,
    explanation:
      "God worked through Elisha, and the iron axe head floated to the surface.",
    scripture: "2 Kings 6:5-7",
    active: true
  },

  {
    id: "L3-Q020",
    factKey: "ravens-fed-elijah",
    level: 3,
    type: "multiple-choice",
    question: "When Elijah stayed near the Brook Cherith, what kind of birds brought him food?",
    answers: [
      "Doves",
      "Eagles",
      "Ravens",
      "Sparrows"
    ],
    correctIndex: 2,
    explanation:
      "God commanded ravens to bring Elijah bread and meat while he stayed near the brook.",
    scripture: "1 Kings 17:4-6",
    active: true
  },
  /* =======================================================
     LEVEL 4 — KINGS, PROPHETS & PROMISES
     ======================================================= */

  {
    id: "L4-Q001",
    factKey: "solomon-built-temple",
    level: 4,
    type: "multiple-choice",
    question: "Solomon built a magnificent building in Jerusalem for the worship of God. What was it?",
    answers: [
      "A palace",
      "The temple",
      "A fortress",
      "A school"
    ],
    correctIndex: 1,
    explanation:
      "King Solomon built the temple in Jerusalem as a place for Israel to worship God.",
    scripture: "1 Kings 6:1",
    active: true
  },

  {
    id: "L4-Q002",
    factKey: "solomon-asked-for-wisdom",
    level: 4,
    type: "multiple-choice",
    question: "When God told Solomon to ask for something, what did Solomon ask for?",
    answers: [
      "Great riches",
      "A larger army",
      "Wisdom",
      "A longer life"
    ],
    correctIndex: 2,
    explanation:
      "Solomon asked God for wisdom to lead the people well.",
    scripture: "1 Kings 3:5-12",
    active: true
  },

  {
    id: "L4-Q003",
    factKey: "elijah-challenged-baal-mount-carmel",
    level: 4,
    type: "multiple-choice",
    question: "Elijah challenged the prophets of Baal on what mountain?",
    answers: [
      "Mount Sinai",
      "Mount Carmel",
      "Mount Ararat",
      "Mount Zion"
    ],
    correctIndex: 1,
    explanation:
      "Elijah challenged the prophets of Baal on Mount Carmel, where God showed that He alone is God.",
    scripture: "1 Kings 18:20-39",
    active: true
  },

  {
    id: "L4-Q004",
    factKey: "elijah-taken-whirlwind",
    level: 4,
    type: "multiple-choice",
    question: "What happened to Elijah at the end of his earthly ministry?",
    answers: [
      "He sailed away",
      "He was taken up in a whirlwind",
      "He became king",
      "He moved to Egypt"
    ],
    correctIndex: 1,
    explanation:
      "Elijah was taken up toward heaven in a whirlwind.",
    scripture: "2 Kings 2:11",
    active: true
  },

  {
    id: "L4-Q005",
    factKey: "elisha-followed-elijah",
    level: 4,
    type: "multiple-choice",
    question: "Elisha continued the work of which prophet?",
    answers: [
      "Isaiah",
      "Jeremiah",
      "Elijah",
      "Samuel"
    ],
    correctIndex: 2,
    explanation:
      "Elisha followed Elijah and continued serving God as a prophet.",
    scripture: "2 Kings 2:9-15",
    active: true
  },

  {
    id: "L4-Q006",
    factKey: "prophets-spoke-gods-message",
    level: 4,
    type: "true-false",
    question: "True or False: God used prophets to deliver His messages to people.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "God spoke through prophets to teach, warn, and guide His people.",
    scripture: "Hebrews 1:1",
    active: true
  },

  {
    id: "L4-Q007",
    factKey: "isaiah-immanuel-prophecy",
    level: 4,
    type: "multiple-choice",
    question: "Which prophet wrote about a child who would be called Immanuel?",
    answers: [
      "Isaiah",
      "Jonah",
      "Daniel",
      "Amos"
    ],
    correctIndex: 0,
    explanation:
      "Isaiah foretold the birth of Immanuel, a name meaning 'God with us.'",
    scripture: "Isaiah 7:14",
    active: true
  },

  {
    id: "L4-Q008",
    factKey: "micah-bethlehem-ruler",
    level: 4,
    type: "multiple-choice",
    question: "Which prophet said that a ruler would come from Bethlehem?",
    answers: [
      "Micah",
      "Elijah",
      "Samuel",
      "Ezekiel"
    ],
    correctIndex: 0,
    explanation:
      "Micah foretold that a ruler would come from Bethlehem.",
    scripture: "Micah 5:2",
    active: true
  },

  {
    id: "L4-Q009",
    factKey: "david-wrote-psalms",
    level: 4,
    type: "multiple-choice",
    question: "King David wrote many songs and prayers found in which Bible book?",
    answers: [
      "Proverbs",
      "Psalms",
      "Acts",
      "Exodus"
    ],
    correctIndex: 1,
    explanation:
      "David wrote many of the psalms, which include praise, prayer, sorrow, and trust in God.",
    scripture: "Psalm 23",
    active: true
  },

  {
    id: "L4-Q010",
    factKey: "solomon-connected-proverbs",
    level: 4,
    type: "multiple-choice",
    question: "Solomon is especially connected with which Bible book filled with wise sayings?",
    answers: [
      "Proverbs",
      "Genesis",
      "Mark",
      "Revelation"
    ],
    correctIndex: 0,
    explanation:
      "Many of the sayings in Proverbs are connected with Solomon and teach practical wisdom.",
    scripture: "Proverbs 1:1",
    active: true
  },

  {
    id: "L4-Q011",
    factKey: "david-sinned-needed-forgiveness",
    level: 4,
    type: "true-false",
    question: "True or False: King David was perfect and never sinned.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation:
      "David loved God, but he also sinned and needed God's forgiveness.",
    scripture: "Psalm 51:1-4",
    active: true
  },

  {
    id: "L4-Q012",
    factKey: "hezekiah-prayed-illness",
    level: 4,
    type: "multiple-choice",
    question: "Which king prayed to God when he became very sick?",
    answers: [
      "Hezekiah",
      "Saul",
      "Ahab",
      "Pharaoh"
    ],
    correctIndex: 0,
    explanation:
      "King Hezekiah prayed during his illness, and God answered him.",
    scripture: "2 Kings 20:1-6",
    active: true
  },

  {
    id: "L4-Q013",
    factKey: "jeremiah-called-people-return",
    level: 4,
    type: "multiple-choice",
    question: "Jeremiah often warned God's people to do what?",
    answers: [
      "Build ships",
      "Turn back to God",
      "Choose a new king",
      "Leave Jerusalem forever"
    ],
    correctIndex: 1,
    explanation:
      "Jeremiah repeatedly called God's people to turn away from sin and return to Him.",
    scripture: "Jeremiah 3:12-14",
    active: true
  },

  {
    id: "L4-Q014",
    factKey: "ezekiel-valley-dry-bones",
    level: 4,
    type: "multiple-choice",
    question: "Which prophet saw a vision of a valley filled with dry bones?",
    answers: [
      "Ezekiel",
      "Jonah",
      "Nathan",
      "Malachi"
    ],
    correctIndex: 0,
    explanation:
      "Ezekiel saw a powerful vision in which God brought the dry bones together and gave them life.",
    scripture: "Ezekiel 37:1-14",
    active: true
  },

  {
    id: "L4-Q015",
    factKey: "davidic-covenant-royal-line",
    level: 4,
    type: "true-false",
    question: "True or False: God made a special promise concerning David's royal family line.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "God promised David that his royal line would have an important place in His plan.",
    scripture: "2 Samuel 7:12-16",
    active: true
  },

  {
    id: "L4-Q016",
    factKey: "prophet-job-speak-gods-word",
    level: 4,
    type: "multiple-choice",
    question: "What was one important job of an Old Testament prophet?",
    answers: [
      "Entertain the king",
      "Speak God's message",
      "Build roads",
      "Train soldiers"
    ],
    correctIndex: 1,
    explanation:
      "Prophets were called to speak God's message faithfully.",
    scripture: "Jeremiah 1:7",
    active: true
  },

  {
    id: "L4-Q017",
    factKey: "samuel-anointed-david",
    level: 4,
    type: "multiple-choice",
    question: "Which prophet anointed young David to become king?",
    answers: [
      "Samuel",
      "Isaiah",
      "Elijah",
      "Jeremiah"
    ],
    correctIndex: 0,
    explanation:
      "God sent Samuel to anoint David, even though David was the youngest of Jesse's sons.",
    scripture: "1 Samuel 16:11-13",
    active: true
  },

  {
    id: "L4-Q018",
    factKey: "messiah-line-of-david",
    level: 4,
    type: "multiple-choice",
    question: "The promised Messiah would come through the family line of which king?",
    answers: [
      "David",
      "Ahab",
      "Pharaoh",
      "Nebuchadnezzar"
    ],
    correctIndex: 0,
    explanation:
      "God's promises pointed to a coming King from David's family line.",
    scripture: "Isaiah 11:1",
    active: true
  },

  {
    id: "L4-Q019",
    factKey: "prophets-future-events",
    level: 4,
    type: "true-false",
    question: "True or False: Some prophets spoke about events that would happen in the future.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "God gave some prophets messages about events and promises that were still to come.",
    scripture: "1 Peter 1:10-12",
    active: true
  },

  {
    id: "L4-Q020",
    factKey: "isaiah-suffering-servant",
    level: 4,
    type: "multiple-choice",
    question: "Which prophet described a servant who would suffer for the sins of others?",
    answers: [
      "Isaiah",
      "Jonah",
      "Elijah",
      "Samuel"
    ],
    correctIndex: 0,
    explanation:
      "Isaiah described a suffering servant who would bear the sins of others, pointing forward to Jesus.",
    scripture: "Isaiah 53:4-6",
    active: true
  },
   
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
   ========================================================= */

function validateTriviaQuestionBank() {

  const seenIds = new Set();
  const seenFactKeys = new Set();

  const duplicateIds = [];
  const duplicateFactKeys = [];
  const missingFactKeys = [];
  const invalidTypes = [];
  const malformedQuestions = [];


  SOLOMON_TRIVIA_QUESTIONS.forEach(question => {

    if (seenIds.has(question.id)) {

      duplicateIds.push(question.id);

    } else {

      seenIds.add(question.id);
    }


    if (!question.factKey) {

      missingFactKeys.push(question.id);

    } else if (
      seenFactKeys.has(question.factKey)
    ) {

      duplicateFactKeys.push(
        question.factKey
      );

    } else {

      seenFactKeys.add(
        question.factKey
      );
    }


    if (
      !SOLOMON_TRIVIA_TYPES.includes(
        question.type
      )
    ) {

      invalidTypes.push(
        `${question.id}: ${question.type}`
      );

      return;
    }


    if (
      question.type === "multiple-choice"
    ) {

      if (
        !Array.isArray(question.answers) ||
        question.answers.length < 3 ||
        question.answers.length > 4 ||
        !Number.isInteger(question.correctIndex) ||
        question.correctIndex < 0 ||
        question.correctIndex >= question.answers.length
      ) {

        malformedQuestions.push(
          question.id
        );
      }
    }


    if (
      question.type === "true-false"
    ) {

      if (
        !Array.isArray(question.answers) ||
        question.answers.length !== 2 ||
        !Number.isInteger(question.correctIndex) ||
        question.correctIndex < 0 ||
        question.correctIndex > 1
      ) {

        malformedQuestions.push(
          question.id
        );
      }
    }


    if (
      question.type === "fill-blank"
    ) {

      if (
        !Array.isArray(question.acceptedAnswers) ||
        question.acceptedAnswers.length === 0 ||
        !question.displayAnswer
      ) {

        malformedQuestions.push(
          question.id
        );
      }
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


  if (invalidTypes.length > 0) {

    console.error(
      "Unsupported trivia question types found:",
      invalidTypes
    );
  }


  if (malformedQuestions.length > 0) {

    console.error(
      "Malformed trivia questions found:",
      malformedQuestions
    );
  }


  if (
    missingFactKeys.length === 0 &&
    duplicateIds.length === 0 &&
    duplicateFactKeys.length === 0 &&
    invalidTypes.length === 0 &&
    malformedQuestions.length === 0
  ) {

    console.log(
      `Trivia bank check passed: ${SOLOMON_TRIVIA_QUESTIONS.length} questions, no duplicate IDs, duplicate facts, invalid types, or malformed questions.`
    );
  }
}


validateTriviaQuestionBank();
