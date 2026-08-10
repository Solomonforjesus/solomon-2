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
  /* =======================================================
     LEVEL 5 — MEET JESUS
     ======================================================= */

  {
    id: "L5-Q001",
    factKey: "jesus-born-bethlehem",
    level: 5,
    type: "multiple-choice",
    question: "Where was Jesus born?",
    answers: [
      "Nazareth",
      "Bethlehem",
      "Jerusalem",
      "Rome"
    ],
    correctIndex: 1,
    explanation:
      "Jesus was born in Bethlehem, just as Scripture had foretold.",
    scripture: "Luke 2:4-7",
    active: true
  },

  {
    id: "L5-Q002",
    factKey: "mary-mother-of-jesus",
    level: 5,
    type: "multiple-choice",
    question: "Who was Jesus' mother?",
    answers: [
      "Martha",
      "Elizabeth",
      "Mary",
      "Ruth"
    ],
    correctIndex: 2,
    explanation:
      "Mary was chosen to give birth to Jesus.",
    scripture: "Luke 1:30-31",
    active: true
  },

  {
    id: "L5-Q003",
    factKey: "jesus-grew-up-nazareth",
    level: 5,
    type: "true-false",
    question: "True or False: Jesus grew up in Nazareth.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus was raised in Nazareth after His family returned from Egypt.",
    scripture: "Matthew 2:19-23",
    active: true
  },

  {
    id: "L5-Q004",
    factKey: "john-baptized-jesus",
    level: 5,
    type: "multiple-choice",
    question: "Who baptized Jesus?",
    answers: [
      "Peter",
      "John the Baptist",
      "Andrew",
      "Nicodemus"
    ],
    correctIndex: 1,
    explanation:
      "John the Baptist baptized Jesus in the Jordan River.",
    scripture: "Matthew 3:13-17",
    active: true
  },

  {
    id: "L5-Q005",
    factKey: "jesus-baptism-spirit-father",
    level: 5,
    type: "multiple-choice",
    question: "What happened when Jesus was baptized?",
    answers: [
      "The heavens opened and the Spirit descended like a dove",
      "The sea divided",
      "Fire came down on a mountain",
      "An angel carried Jesus away"
    ],
    correctIndex: 0,
    explanation:
      "At Jesus' baptism, the Holy Spirit descended like a dove and the Father spoke from heaven.",
    scripture: "Matthew 3:16-17",
    active: true
  },

  {
    id: "L5-Q006",
    factKey: "jesus-chose-twelve-disciples",
    level: 5,
    type: "multiple-choice",
    question: "Jesus called twelve special followers. What were they called?",
    answers: [
      "Kings",
      "Priests",
      "Disciples",
      "Judges"
    ],
    correctIndex: 2,
    explanation:
      "Jesus chose twelve disciples to follow Him closely and learn from Him.",
    scripture: "Matthew 10:1-4",
    active: true
  },

  {
    id: "L5-Q007",
    factKey: "peter-walked-on-water",
    level: 5,
    type: "multiple-choice",
    question: "Which disciple walked on water toward Jesus?",
    answers: [
      "Peter",
      "Thomas",
      "Matthew",
      "Philip"
    ],
    correctIndex: 0,
    explanation:
      "Peter stepped out of the boat and walked toward Jesus on the water.",
    scripture: "Matthew 14:28-29",
    active: true
  },

  {
    id: "L5-Q008",
    factKey: "jesus-healed-sick",
    level: 5,
    type: "true-false",
    question: "True or False: Jesus healed people who were sick.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus healed many people, showing His compassion and power.",
    scripture: "Matthew 4:23-24",
    active: true
  },

  {
    id: "L5-Q009",
    factKey: "feeding-five-thousand-two-fish",
    level: 5,
    type: "multiple-choice",
    question: "Jesus fed more than 5,000 people with five loaves and how many fish?",
    answers: [
      "One",
      "Two",
      "Five",
      "Twelve"
    ],
    correctIndex: 1,
    explanation:
      "Jesus multiplied five loaves and two fish to feed a huge crowd.",
    scripture: "Matthew 14:17-21",
    active: true
  },

  {
    id: "L5-Q010",
    factKey: "jesus-calmed-wind-sea",
    level: 5,
    type: "multiple-choice",
    question: "What did Jesus calm during a storm?",
    answers: [
      "The wind and the sea",
      "A volcano",
      "An earthquake",
      "A forest fire"
    ],
    correctIndex: 0,
    explanation:
      "Jesus commanded the wind and waves, and the storm became calm.",
    scripture: "Mark 4:39-41",
    active: true
  },

  {
    id: "L5-Q011",
    factKey: "zacchaeus-climbed-tree",
    level: 5,
    type: "multiple-choice",
    question: "Which man climbed a tree because he wanted to see Jesus?",
    answers: [
      "Zacchaeus",
      "Lazarus",
      "Bartimaeus",
      "Joseph"
    ],
    correctIndex: 0,
    explanation:
      "Zacchaeus climbed a sycamore tree to see Jesus as He passed by.",
    scripture: "Luke 19:1-5",
    active: true
  },

  {
    id: "L5-Q012",
    factKey: "jesus-raised-lazarus",
    level: 5,
    type: "multiple-choice",
    question: "Jesus raised which man from the dead after he had been in a tomb?",
    answers: [
      "Peter",
      "Lazarus",
      "John",
      "Andrew"
    ],
    correctIndex: 1,
    explanation:
      "Jesus called Lazarus out of the tomb, showing His power over death.",
    scripture: "John 11:43-44",
    active: true
  },

  {
    id: "L5-Q013",
    factKey: "jesus-welcomed-children",
    level: 5,
    type: "true-false",
    question: "True or False: Jesus welcomed children.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus welcomed children and told His disciples not to keep them away.",
    scripture: "Mark 10:13-16",
    active: true
  },

  {
    id: "L5-Q014",
    factKey: "greatest-commandment-love-god",
    level: 5,
    type: "multiple-choice",
    question: "Jesus said the greatest commandment begins with loving whom?",
    answers: [
      "Yourself only",
      "God",
      "The king",
      "Your teacher"
    ],
    correctIndex: 1,
    explanation:
      "Jesus taught us to love God with all our heart, soul, mind, and strength.",
    scripture: "Mark 12:29-30",
    active: true
  },

  {
    id: "L5-Q015",
    factKey: "love-neighbor-as-yourself",
    level: 5,
    type: "multiple-choice",
    question: "Jesus taught that we should also love whom as ourselves?",
    answers: [
      "Only our friends",
      "Our neighbors",
      "Only our family",
      "Only people who agree with us"
    ],
    correctIndex: 1,
    explanation:
      "Jesus taught us to love our neighbor as ourselves.",
    scripture: "Mark 12:31",
    active: true
  },

  {
    id: "L5-Q016",
    factKey: "jesus-taught-lords-prayer",
    level: 5,
    type: "multiple-choice",
    question: "Which prayer did Jesus teach His disciples as a model for prayer?",
    answers: [
      "The Lord's Prayer",
      "The Prayer of Jabez",
      "Hannah's Prayer",
      "Solomon's Prayer"
    ],
    correctIndex: 0,
    explanation:
      "Jesus taught His disciples a model prayer beginning with 'Our Father in heaven.'",
    scripture: "Matthew 6:9-13",
    active: true
  },

  {
    id: "L5-Q017",
    factKey: "jesus-taught-forgiveness",
    level: 5,
    type: "true-false",
    question: "True or False: Jesus forgave people and taught His followers to forgive others.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus taught forgiveness and showed mercy to sinners who came to Him.",
    scripture: "Matthew 6:14; Luke 7:48",
    active: true
  },

  {
    id: "L5-Q018",
    factKey: "jesus-light-of-world",
    level: 5,
    type: "multiple-choice",
    question: "What did Jesus say He is in John 8:12?",
    answers: [
      "The light of the world",
      "A soldier",
      "A farmer",
      "A king of Rome"
    ],
    correctIndex: 0,
    explanation:
      "Jesus said that He is the light of the world.",
    scripture: "John 8:12",
    active: true
  },

  {
    id: "L5-Q019",
    factKey: "jesus-way-truth-life",
    level: 5,
    type: "multiple-choice",
    question: "What did Jesus say about Himself in John 14:6?",
    answers: [
      "I am the way, the truth, and the life",
      "I am only a teacher",
      "I am one prophet among many",
      "Everyone finds God in a different way"
    ],
    correctIndex: 0,
    explanation:
      "Jesus said He is the way, the truth, and the life, and that no one comes to the Father except through Him.",
    scripture: "John 14:6",
    active: true
  },

  {
    id: "L5-Q020",
    factKey: "peter-confessed-jesus-christ-son-god",
    level: 5,
    type: "multiple-choice",
    question: "Who did Peter say Jesus is?",
    answers: [
      "A great soldier",
      "The Christ, the Son of the living God",
      "A king from Rome",
      "Elijah returned"
    ],
    correctIndex: 1,
    explanation:
      "Peter confessed that Jesus is the Christ, the Son of the living God.",
    scripture: "Matthew 16:15-16",
    active: true
  },
  /* =======================================================
     LEVEL 6 — WALKING WITH JESUS
     ======================================================= */

  {
    id: "L6-Q001",
    factKey: "jesus-taught-pray-to-father",
    level: 6,
    type: "multiple-choice",
    question: "Jesus taught His followers to pray to whom?",
    answers: [
      "God the Father",
      "Angels",
      "Kings",
      "Prophets"
    ],
    correctIndex: 0,
    explanation:
      "Jesus taught His followers to pray to God and trust Him as our heavenly Father.",
    scripture: "Matthew 6:9",
    active: true
  },

  {
    id: "L6-Q002",
    factKey: "jesus-taught-forgive-others",
    level: 6,
    type: "true-false",
    question: "True or False: Jesus taught His followers to forgive others.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus taught that forgiveness should be part of the life of those who follow Him.",
    scripture: "Matthew 6:14-15",
    active: true
  },

  {
    id: "L6-Q003",
    factKey: "golden-rule-treat-others",
    level: 6,
    type: "multiple-choice",
    question: "Jesus said we should treat other people the way we want them to treat whom?",
    answers: [
      "Only our friends",
      "Us",
      "Our teachers",
      "Our families"
    ],
    correctIndex: 1,
    explanation:
      "Jesus taught us to treat others as we would want to be treated.",
    scripture: "Matthew 7:12",
    active: true
  },

  {
    id: "L6-Q004",
    factKey: "good-samaritan-helped-stranger",
    level: 6,
    type: "multiple-choice",
    question: "Jesus told a story about a man who helped an injured stranger. What is that story usually called?",
    answers: [
      "The Good Samaritan",
      "The Lost Coin",
      "The Wise Builder",
      "The Great Banquet"
    ],
    correctIndex: 0,
    explanation:
      "The Good Samaritan showed mercy to someone who needed help.",
    scripture: "Luke 10:30-37",
    active: true
  },

  {
    id: "L6-Q005",
    factKey: "love-and-pray-for-enemies",
    level: 6,
    type: "multiple-choice",
    question: "What did Jesus teach us to do for our enemies?",
    answers: [
      "Ignore them forever",
      "Love them and pray for them",
      "Get even with them",
      "Be afraid of them"
    ],
    correctIndex: 1,
    explanation:
      "Jesus taught His followers to love their enemies and pray for those who mistreat them.",
    scripture: "Matthew 5:44",
    active: true
  },

  {
    id: "L6-Q006",
    factKey: "jesus-taught-serve-others",
    level: 6,
    type: "true-false",
    question: "True or False: Jesus said only important people should be served.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation:
      "Jesus taught His followers to serve others, not just people who seem important.",
    scripture: "Mark 10:43-45",
    active: true
  },

  {
    id: "L6-Q007",
    factKey: "jesus-washed-disciples-feet",
    level: 6,
    type: "multiple-choice",
    question: "Jesus washed His disciples' feet to teach them about what?",
    answers: [
      "Winning",
      "Serving others",
      "Traveling",
      "Building churches"
    ],
    correctIndex: 1,
    explanation:
      "Jesus humbly served His disciples and told them to follow His example.",
    scripture: "John 13:12-15",
    active: true
  },

  {
    id: "L6-Q008",
    factKey: "god-cares-for-sparrows",
    level: 6,
    type: "multiple-choice",
    question: "When Jesus taught about God's care, He reminded people that God knows even what small birds?",
    answers: [
      "Eagles",
      "Ravens",
      "Sparrows",
      "Peacocks"
    ],
    correctIndex: 2,
    explanation:
      "Jesus used sparrows to remind us that God knows our needs and cares for us.",
    scripture: "Matthew 10:29-31",
    active: true
  },

  {
    id: "L6-Q009",
    factKey: "wise-person-obeys-jesus-words",
    level: 6,
    type: "multiple-choice",
    question: "Jesus said a wise person hears His words and does what with them?",
    answers: [
      "Forgets them",
      "Obeys them",
      "Hides them",
      "Argues about them"
    ],
    correctIndex: 1,
    explanation:
      "Jesus compared the person who hears and obeys His words to someone building on rock.",
    scripture: "Matthew 7:24",
    active: true
  },

  {
    id: "L6-Q010",
    factKey: "wise-builder-rock-foundation",
    level: 6,
    type: "multiple-choice",
    question: "What kind of foundation did the wise builder use in Jesus' story?",
    answers: [
      "Sand",
      "Mud",
      "Rock",
      "Wood"
    ],
    correctIndex: 2,
    explanation:
      "Jesus said the wise builder built his house on rock.",
    scripture: "Matthew 7:24-25",
    active: true
  },

  {
    id: "L6-Q011",
    factKey: "helping-people-in-need-matters",
    level: 6,
    type: "true-false",
    question: "True or False: Jesus taught that helping people in need matters to God.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus taught His followers to show real compassion and care for people in need.",
    scripture: "Matthew 25:35-40",
    active: true
  },

  {
    id: "L6-Q012",
    factKey: "blessed-are-peacemakers",
    level: 6,
    type: "fill-blank",
    question: "Jesus said, 'Blessed are the ________.'",
    acceptedAnswers: [
      "peacemakers",
      "the peacemakers"
    ],
    displayAnswer: "peacemakers",
    explanation:
      "Jesus taught that peacemaking reflects the character God desires in His people.",
    scripture: "Matthew 5:9",
    active: true
  },

  {
    id: "L6-Q013",
    factKey: "greatness-through-serving",
    level: 6,
    type: "multiple-choice",
    question: "When His disciples argued about who was greatest, Jesus taught that greatness includes doing what?",
    answers: [
      "Serving others",
      "Becoming rich",
      "Winning every argument",
      "Being famous"
    ],
    correctIndex: 0,
    explanation:
      "Jesus taught that true greatness is shown through humble service.",
    scripture: "Mark 9:35",
    active: true
  },

  {
    id: "L6-Q014",
    factKey: "seek-first-kingdom-of-god",
    level: 6,
    type: "fill-blank",
    question: "Jesus said to seek first the kingdom of ________.",
    acceptedAnswers: [
      "God",
      "god"
    ],
    displayAnswer: "God",
    explanation:
      "Jesus taught His followers to put God's kingdom and righteousness first.",
    scripture: "Matthew 6:33",
    active: true
  },

  {
    id: "L6-Q015",
    factKey: "heart-matters-to-jesus",
    level: 6,
    type: "true-false",
    question: "True or False: Jesus taught that what is inside a person's heart matters.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus taught that our words and actions reveal what is happening in our hearts.",
    scripture: "Matthew 15:18-19",
    active: true
  },

  {
    id: "L6-Q016",
    factKey: "followers-salt-of-earth",
    level: 6,
    type: "multiple-choice",
    question: "Jesus told His followers that they are the salt of the what?",
    answers: [
      "Sea",
      "Earth",
      "Desert",
      "Temple"
    ],
    correctIndex: 1,
    explanation:
      "Jesus called His followers the salt of the earth, teaching that their lives should make a difference.",
    scripture: "Matthew 5:13",
    active: true
  },

  {
    id: "L6-Q017",
    factKey: "followers-light-of-world",
    level: 6,
    type: "multiple-choice",
    question: "Jesus also told His followers that they are the light of the what?",
    answers: [
      "World",
      "Temple",
      "Palace",
      "Wilderness"
    ],
    correctIndex: 0,
    explanation:
      "Jesus said His followers are the light of the world and should let their good works point others toward God.",
    scripture: "Matthew 5:14-16",
    active: true
  },

  {
    id: "L6-Q018",
    factKey: "love-jesus-keep-commandments",
    level: 6,
    type: "multiple-choice",
    question: "What did Jesus say His followers should do if they love Him?",
    answers: [
      "Keep His commandments",
      "Become famous",
      "Travel to Jerusalem",
      "Never make mistakes"
    ],
    correctIndex: 0,
    explanation:
      "Jesus connected loving Him with listening to and obeying His teaching.",
    scripture: "John 14:15",
    active: true
  },

  {
    id: "L6-Q019",
    factKey: "following-jesus-not-always-easy",
    level: 6,
    type: "true-false",
    question: "True or False: Following Jesus means we will always have an easy life.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation:
      "Jesus never promised an easy life, but He promised peace in Him even when life is difficult.",
    scripture: "John 16:33",
    active: true
  },

  {
    id: "L6-Q020",
    factKey: "disciples-known-by-love",
    level: 6,
    type: "fill-blank",
    question: "Jesus said people would know His disciples by their ________ for one another.",
    acceptedAnswers: [
      "love",
      "their love"
    ],
    displayAnswer: "love",
    explanation:
      "Jesus said love for one another would be a mark of His disciples.",
    scripture: "John 13:34-35",
    active: true
  },
  /* =======================================================
     LEVEL 7 — THE CROSS & RESURRECTION
     ======================================================= */

  {
    id: "L7-Q001",
    factKey: "jesus-entered-jerusalem",
    level: 7,
    type: "multiple-choice",
    question: "What city did Jesus enter shortly before His crucifixion?",
    answers: [
      "Bethlehem",
      "Jerusalem",
      "Nazareth",
      "Rome"
    ],
    correctIndex: 1,
    explanation:
      "Jesus entered Jerusalem as the final events leading to the cross began.",
    scripture: "Matthew 21:1-10",
    active: true
  },

  {
    id: "L7-Q002",
    factKey: "jesus-rode-donkey-jerusalem",
    level: 7,
    type: "multiple-choice",
    question: "What did Jesus ride into Jerusalem?",
    answers: [
      "A horse",
      "A donkey",
      "A camel",
      "A chariot"
    ],
    correctIndex: 1,
    explanation:
      "Jesus entered Jerusalem riding on a donkey, fulfilling Scripture.",
    scripture: "Matthew 21:5-9",
    active: true
  },

  {
    id: "L7-Q003",
    factKey: "jesus-last-supper-disciples",
    level: 7,
    type: "true-false",
    question: "True or False: Jesus shared a final meal with His disciples before His arrest.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus shared what we call the Last Supper with His disciples.",
    scripture: "Luke 22:14-20",
    active: true
  },

  {
    id: "L7-Q004",
    factKey: "last-supper-bread-body",
    level: 7,
    type: "multiple-choice",
    question: "At the Last Supper, Jesus said the bread represented His what?",
    answers: [
      "Kingdom",
      "Body",
      "Crown",
      "Temple"
    ],
    correctIndex: 1,
    explanation:
      "Jesus used the bread to point His disciples toward His body, which would be given for them.",
    scripture: "Luke 22:19",
    active: true
  },

  {
    id: "L7-Q005",
    factKey: "jesus-prayed-gethsemane",
    level: 7,
    type: "fill-blank",
    question: "Jesus prayed in the Garden of ________ before He was arrested.",
    acceptedAnswers: [
      "Gethsemane",
      "gethsemane",
      "Garden of Gethsemane",
      "garden of gethsemane"
    ],
    displayAnswer: "Gethsemane",
    explanation:
      "Jesus prayed in Gethsemane before His arrest and crucifixion.",
    scripture: "Matthew 26:36-39",
    active: true
  },

  {
    id: "L7-Q006",
    factKey: "judas-betrayed-jesus",
    level: 7,
    type: "multiple-choice",
    question: "Which disciple betrayed Jesus?",
    answers: [
      "Peter",
      "John",
      "Judas Iscariot",
      "Thomas"
    ],
    correctIndex: 2,
    explanation:
      "Judas Iscariot betrayed Jesus and led those who arrested Him to Him.",
    scripture: "Matthew 26:47-50",
    active: true
  },

  {
    id: "L7-Q007",
    factKey: "jesus-predicted-suffering-death-resurrection",
    level: 7,
    type: "true-false",
    question: "True or False: Jesus knew beforehand that He would suffer and die.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus repeatedly told His disciples that He would suffer, die, and rise again.",
    scripture: "Mark 8:31",
    active: true
  },

  {
    id: "L7-Q008",
    factKey: "peter-denied-jesus-three-times",
    level: 7,
    type: "multiple-choice",
    question: "Which disciple denied knowing Jesus three times?",
    answers: [
      "Peter",
      "Andrew",
      "Philip",
      "Matthew"
    ],
    correctIndex: 0,
    explanation:
      "Peter denied Jesus three times, just as Jesus had said he would.",
    scripture: "Luke 22:54-62",
    active: true
  },

  {
    id: "L7-Q009",
    factKey: "pontius-pilate-trial",
    level: 7,
    type: "multiple-choice",
    question: "Who was the Roman governor involved in Jesus' trial?",
    answers: [
      "Caesar Augustus",
      "Pontius Pilate",
      "Herod the Great",
      "Cornelius"
    ],
    correctIndex: 1,
    explanation:
      "Jesus was brought before the Roman governor Pontius Pilate.",
    scripture: "Matthew 27:11-26",
    active: true
  },

  {
    id: "L7-Q010",
    factKey: "jesus-crucified",
    level: 7,
    type: "multiple-choice",
    question: "How was Jesus put to death?",
    answers: [
      "He was crucified",
      "He was stoned",
      "He was imprisoned for life",
      "He was exiled"
    ],
    correctIndex: 0,
    explanation:
      "Jesus was crucified on a cross.",
    scripture: "Luke 23:33",
    active: true
  },

  {
    id: "L7-Q011",
    factKey: "jesus-died-on-cross",
    level: 7,
    type: "fill-blank",
    question: "Jesus died on a ________.",
    acceptedAnswers: [
      "cross",
      "a cross"
    ],
    displayAnswer: "cross",
    explanation:
      "Jesus willingly gave His life on the cross.",
    scripture: "Philippians 2:8",
    active: true
  },

  {
    id: "L7-Q012",
    factKey: "jesus-without-sin",
    level: 7,
    type: "true-false",
    question: "True or False: Jesus had committed sins that deserved His punishment.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation:
      "Jesus was without sin. He suffered not for His own wrongdoing, but gave Himself for sinners.",
    scripture: "1 Peter 2:22-24",
    active: true
  },

  {
    id: "L7-Q013",
    factKey: "jesus-died-for-our-sins",
    level: 7,
    type: "multiple-choice",
    question: "Why is Jesus' death on the cross so important?",
    answers: [
      "He died for our sins",
      "He wanted to become famous",
      "He lost a battle",
      "He was trying to become king of Rome"
    ],
    correctIndex: 0,
    explanation:
      "Jesus gave Himself for our sins so that sinners could be forgiven and brought to God.",
    scripture: "1 Corinthians 15:3; 1 Peter 3:18",
    active: true
  },

  {
    id: "L7-Q014",
    factKey: "jesus-body-placed-tomb",
    level: 7,
    type: "multiple-choice",
    question: "What happened to Jesus' body after He died?",
    answers: [
      "It was placed in a tomb",
      "It was taken to Rome",
      "It disappeared immediately",
      "It was placed in the temple"
    ],
    correctIndex: 0,
    explanation:
      "Jesus' body was wrapped and placed in a tomb.",
    scripture: "Matthew 27:57-60",
    active: true
  },

  {
    id: "L7-Q015",
    factKey: "jesus-did-not-remain-dead",
    level: 7,
    type: "true-false",
    question: "True or False: Jesus remained dead in the tomb.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation:
      "Jesus did not remain in the grave. He rose from the dead.",
    scripture: "Matthew 28:5-6",
    active: true
  },

  {
    id: "L7-Q016",
    factKey: "jesus-rose-third-day",
    level: 7,
    type: "fill-blank",
    question: "On the third day, Jesus ________ from the dead.",
    acceptedAnswers: [
      "rose",
      "arose",
      "rose again"
    ],
    displayAnswer: "rose",
    explanation:
      "Jesus rose bodily from the dead on the third day.",
    scripture: "1 Corinthians 15:3-4",
    active: true
  },

  {
    id: "L7-Q017",
    factKey: "women-found-empty-tomb",
    level: 7,
    type: "multiple-choice",
    question: "Who discovered that Jesus' tomb was empty early on the first day of the week?",
    answers: [
      "Women who had followed Jesus",
      "Roman soldiers",
      "King Herod",
      "The Pharisees"
    ],
    correctIndex: 0,
    explanation:
      "Women who followed Jesus came to the tomb and learned that He had risen.",
    scripture: "Luke 24:1-6",
    active: true
  },

  {
    id: "L7-Q018",
    factKey: "risen-jesus-appeared-followers",
    level: 7,
    type: "multiple-choice",
    question: "After His resurrection, did Jesus appear to His followers?",
    answers: [
      "Yes",
      "No"
    ],
    correctIndex: 0,
    explanation:
      "The risen Jesus appeared to His disciples and many others.",
    scripture: "1 Corinthians 15:5-8",
    active: true
  },

  {
    id: "L7-Q019",
    factKey: "resurrection-victory-over-death",
    level: 7,
    type: "true-false",
    question: "True or False: The resurrection shows that death did not defeat Jesus.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus conquered death. His resurrection is at the heart of the Christian Gospel.",
    scripture: "Revelation 1:17-18",
    active: true
  },

  {
    id: "L7-Q020",
    factKey: "jesus-resurrection-and-life",
    level: 7,
    type: "fill-blank",
    question: "Jesus said, 'I am the resurrection and the ________.'",
    acceptedAnswers: [
      "life",
      "the life"
    ],
    displayAnswer: "life",
    explanation:
      "Jesus declared that He is the resurrection and the life. Our hope is found in Him.",
    scripture: "John 11:25",
    active: true
  },
  /* =======================================================
     LEVEL 8 — THE GOSPEL
     ======================================================= */

  {
    id: "L8-Q001",
    factKey: "everyone-has-sinned",
    level: 8,
    type: "multiple-choice",
    question: "What does the Bible say everyone has done?",
    answers: [
      "Become famous",
      "Sinned",
      "Traveled",
      "Become wise"
    ],
    correctIndex: 1,
    explanation:
      "Every person has sinned and falls short of God's glory.",
    scripture: "Romans 3:23",
    active: true
  },

  {
    id: "L8-Q002",
    factKey: "sin-separates-from-god",
    level: 8,
    type: "true-false",
    question: "True or False: Sin separates us from God and is a serious problem.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Sin is more than making mistakes. It is rebellion against God and separates us from Him.",
    scripture: "Isaiah 59:2; Romans 6:23",
    active: true
  },

  {
    id: "L8-Q003",
    factKey: "wages-of-sin-death",
    level: 8,
    type: "fill-blank",
    question: "The Bible says, 'The wages of sin is ________.'",
    acceptedAnswers: [
      "death"
    ],
    displayAnswer: "death",
    explanation:
      "Sin brings death, but Romans 6:23 continues with wonderful news: God offers eternal life in Jesus Christ.",
    scripture: "Romans 6:23",
    active: true
  },

  {
    id: "L8-Q004",
    factKey: "cannot-save-by-good-works",
    level: 8,
    type: "multiple-choice",
    question: "Can we save ourselves simply by doing enough good things?",
    answers: [
      "Yes",
      "No"
    ],
    correctIndex: 1,
    explanation:
      "Salvation is God's gift of grace. We cannot earn it by doing enough good works.",
    scripture: "Ephesians 2:8-9",
    active: true
  },

  {
    id: "L8-Q005",
    factKey: "jesus-came-save-sinners",
    level: 8,
    type: "multiple-choice",
    question: "Why did Jesus come into the world?",
    answers: [
      "Only to teach history",
      "To save sinners",
      "To become a Roman ruler",
      "To build a palace"
    ],
    correctIndex: 1,
    explanation:
      "Jesus came into the world to save sinners.",
    scripture: "1 Timothy 1:15",
    active: true
  },

  {
    id: "L8-Q006",
    factKey: "jesus-lived-without-sin",
    level: 8,
    type: "true-false",
    question: "True or False: Jesus lived without sin.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus was tempted, yet He remained completely without sin.",
    scripture: "Hebrews 4:15",
    active: true
  },

  {
    id: "L8-Q007",
    factKey: "jesus-died-for-sins-gospel",
    level: 8,
    type: "multiple-choice",
    question: "What did Jesus do for our sins?",
    answers: [
      "Ignored them",
      "Died for them",
      "Pretended they were unimportant",
      "Told us to solve the problem ourselves"
    ],
    correctIndex: 1,
    explanation:
      "Christ died for our sins according to the Scriptures.",
    scripture: "1 Corinthians 15:3",
    active: true
  },

  {
    id: "L8-Q008",
    factKey: "jesus-rose-after-burial-gospel",
    level: 8,
    type: "multiple-choice",
    question: "What happened after Jesus died and was buried?",
    answers: [
      "He remained in the grave",
      "He rose from the dead",
      "His disciples forgot Him",
      "He became a legend many years later"
    ],
    correctIndex: 1,
    explanation:
      "Jesus truly rose from the dead on the third day.",
    scripture: "1 Corinthians 15:4",
    active: true
  },

  {
    id: "L8-Q009",
    factKey: "salvation-gift-of-grace",
    level: 8,
    type: "fill-blank",
    question: "Salvation is a gift of God's ________.",
    acceptedAnswers: [
      "grace"
    ],
    displayAnswer: "grace",
    explanation:
      "Grace means God gives us what we could never earn for ourselves.",
    scripture: "Ephesians 2:8",
    active: true
  },

  {
    id: "L8-Q010",
    factKey: "eternal-life-through-jesus",
    level: 8,
    type: "multiple-choice",
    question: "Through whom does God give eternal life?",
    answers: [
      "Moses",
      "Jesus Christ",
      "David",
      "Abraham"
    ],
    correctIndex: 1,
    explanation:
      "Eternal life is God's gift through Jesus Christ our Lord.",
    scripture: "Romans 6:23",
    active: true
  },

  {
    id: "L8-Q011",
    factKey: "salvation-not-earned-by-comparison",
    level: 8,
    type: "true-false",
    question: "True or False: We can earn salvation by being better than other people.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation:
      "Salvation is not a prize for being better than someone else. It is God's gift through Christ.",
    scripture: "Ephesians 2:8-9",
    active: true
  },

  {
    id: "L8-Q012",
    factKey: "repent-turn-from-sin-to-god",
    level: 8,
    type: "multiple-choice",
    question: "What does it mean to repent?",
    answers: [
      "To turn from sin toward God",
      "To become perfect instantly",
      "To memorize the whole Bible",
      "To hide our mistakes"
    ],
    correctIndex: 0,
    explanation:
      "Repentance means turning from sin toward God with a changed heart.",
    scripture: "Acts 3:19",
    active: true
  },

  {
    id: "L8-Q013",
    factKey: "place-faith-in-jesus",
    level: 8,
    type: "multiple-choice",
    question: "What are we called to place in Jesus Christ?",
    answers: [
      "Our faith",
      "Our money",
      "Our popularity",
      "Our possessions"
    ],
    correctIndex: 0,
    explanation:
      "The Gospel calls us to trust in Jesus Christ rather than ourselves.",
    scripture: "Acts 16:31",
    active: true
  },

  {
    id: "L8-Q014",
    factKey: "believe-in-lord-jesus",
    level: 8,
    type: "fill-blank",
    question: "The Bible says, 'Believe in the Lord ________, and you will be saved.'",
    acceptedAnswers: [
      "Jesus",
      "Jesus Christ",
      "Christ Jesus"
    ],
    displayAnswer: "Jesus",
    explanation:
      "Scripture calls us to believe in the Lord Jesus Christ.",
    scripture: "Acts 16:31",
    active: true
  },

  {
    id: "L8-Q015",
    factKey: "forgiveness-needed-because-sin",
    level: 8,
    type: "true-false",
    question: "True or False: God forgives people because they have never done anything wrong.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation:
      "We need forgiveness precisely because we have sinned. God offers forgiveness through Jesus Christ.",
    scripture: "Ephesians 1:7",
    active: true
  },

  {
    id: "L8-Q016",
    factKey: "god-faithful-forgive-confessed-sins",
    level: 8,
    type: "multiple-choice",
    question: "What does God promise to those who confess their sins?",
    answers: [
      "He will never listen",
      "He is faithful and just to forgive",
      "They must hide forever",
      "They must earn another chance"
    ],
    correctIndex: 1,
    explanation:
      "God is faithful and just to forgive our sins and cleanse us from unrighteousness.",
    scripture: "1 John 1:9",
    active: true
  },

  {
    id: "L8-Q017",
    factKey: "god-loved-world-gave-son",
    level: 8,
    type: "multiple-choice",
    question: "According to John 3:16, why did God give His only Son?",
    answers: [
      "Because God loved the world",
      "Because people deserved Him",
      "Because Rome requested it",
      "Because the disciples demanded it"
    ],
    correctIndex: 0,
    explanation:
      "God's gift of His Son flows from His great love for the world.",
    scripture: "John 3:16",
    active: true
  },

  {
    id: "L8-Q018",
    factKey: "john-316-everlasting-life",
    level: 8,
    type: "fill-blank",
    question: "John 3:16 says whoever believes in Him should not perish but have everlasting ________.",
    acceptedAnswers: [
      "life",
      "eternal life",
      "everlasting life"
    ],
    displayAnswer: "life",
    explanation:
      "Jesus offers everlasting life to those who believe in Him.",
    scripture: "John 3:16",
    active: true
  },

  {
    id: "L8-Q019",
    factKey: "gospel-good-news-jesus-saves",
    level: 8,
    type: "true-false",
    question: "True or False: The Gospel is good news about what Jesus Christ has done to save sinners.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "The Gospel is the good news of Jesus Christ: His death for our sins and His resurrection from the dead.",
    scripture: "1 Corinthians 15:1-4",
    active: true
  },

  {
    id: "L8-Q020",
    factKey: "gospel-summary-faith-in-jesus",
    level: 8,
    type: "multiple-choice",
    question: "Which answer best summarizes the Gospel?",
    answers: [
      "Try hard enough and God may accept you",
      "Jesus died for our sins, rose again, and salvation is received through faith in Him",
      "Everyone saves themselves in a different way",
      "Bible knowledge alone saves us"
    ],
    correctIndex: 1,
    explanation:
      "Jesus Christ died for our sins and rose again. Salvation is God's gift, received through faith in Him.",
    scripture: "1 Corinthians 15:3-4; Ephesians 2:8-9",
    active: true
  },
  /* =======================================================
     LEVEL 9 — LIVING FOR JESUS
     ======================================================= */

  {
    id: "L9-Q001",
    factKey: "holy-spirit-promised-helper",
    level: 9,
    type: "multiple-choice",
    question: "Who did Jesus promise would help His followers after He returned to the Father?",
    answers: [
      "The Holy Spirit",
      "Moses",
      "David",
      "Elijah"
    ],
    correctIndex: 0,
    explanation:
      "Jesus promised the Holy Spirit would be with His followers and help them.",
    scripture: "John 14:16-17",
    active: true
  },

  {
    id: "L9-Q002",
    factKey: "holy-spirit-teaches-reminds",
    level: 9,
    type: "true-false",
    question: "True or False: The Holy Spirit helps believers understand and remember Jesus' teaching.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus said the Holy Spirit would teach His followers and remind them of His words.",
    scripture: "John 14:26",
    active: true
  },

  {
    id: "L9-Q003",
    factKey: "christians-read-scripture",
    level: 9,
    type: "multiple-choice",
    question: "What should Christians regularly read to learn God's truth?",
    answers: [
      "Scripture",
      "Only newspapers",
      "Only stories",
      "Only schoolbooks"
    ],
    correctIndex: 0,
    explanation:
      "God's Word teaches, corrects, and trains us in righteousness.",
    scripture: "2 Timothy 3:16-17",
    active: true
  },

  {
    id: "L9-Q004",
    factKey: "word-lamp-light-path",
    level: 9,
    type: "fill-blank",
    question: "The Bible says, 'Your word is a lamp to my feet and a ________ to my path.'",
    acceptedAnswers: [
      "light",
      "a light"
    ],
    displayAnswer: "light",
    explanation:
      "God's Word gives us truth and guidance for how we live.",
    scripture: "Psalm 119:105",
    active: true
  },

  {
    id: "L9-Q005",
    factKey: "pray-not-only-in-trouble",
    level: 9,
    type: "true-false",
    question: "True or False: Christians should pray only when something bad happens.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation:
      "Prayer is part of an ongoing relationship with God, not only something we do during trouble.",
    scripture: "1 Thessalonians 5:17",
    active: true
  },

  {
    id: "L9-Q006",
    factKey: "confess-sin-to-god",
    level: 9,
    type: "multiple-choice",
    question: "What should we do when we realize we have sinned?",
    answers: [
      "Hide it from God",
      "Confess it to God",
      "Pretend it never happened",
      "Blame someone else"
    ],
    correctIndex: 1,
    explanation:
      "God calls us to confess our sins and promises forgiveness and cleansing.",
    scripture: "1 John 1:9",
    active: true
  },

  {
    id: "L9-Q007",
    factKey: "compassion-care-for-hurting",
    level: 9,
    type: "multiple-choice",
    question: "Which word describes showing kindness and care to someone who is hurting?",
    answers: [
      "Compassion",
      "Pride",
      "Envy",
      "Anger"
    ],
    correctIndex: 0,
    explanation:
      "Jesus showed compassion, and His followers are called to care for others too.",
    scripture: "Colossians 3:12",
    active: true
  },

  {
    id: "L9-Q008",
    factKey: "christians-encourage-one-another",
    level: 9,
    type: "true-false",
    question: "True or False: Christians should encourage one another.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Scripture tells believers to encourage and build one another up.",
    scripture: "1 Thessalonians 5:11",
    active: true
  },

  {
    id: "L9-Q009",
    factKey: "bring-worries-to-god-prayer",
    level: 9,
    type: "multiple-choice",
    question: "What does the Bible tell Christians to do with their worries?",
    answers: [
      "Keep them secret forever",
      "Give them to God in prayer",
      "Pretend they do not exist",
      "Worry even more"
    ],
    correctIndex: 1,
    explanation:
      "God invites us to bring our worries and requests to Him in prayer.",
    scripture: "Philippians 4:6-7",
    active: true
  },

  {
    id: "L9-Q010",
    factKey: "christ-strengthens-me",
    level: 9,
    type: "fill-blank",
    question: "Paul wrote, 'I can do all things through Christ who ________ me.'",
    acceptedAnswers: [
      "strengthens",
      "strengthens me"
    ],
    displayAnswer: "strengthens",
    explanation:
      "Paul learned to depend on Christ's strength in every circumstance.",
    scripture: "Philippians 4:13",
    active: true
  },

  {
    id: "L9-Q011",
    factKey: "fruit-spirit-love",
    level: 9,
    type: "multiple-choice",
    question: "Which of these is part of the fruit of the Spirit?",
    answers: [
      "Love",
      "Revenge",
      "Jealousy",
      "Pride"
    ],
    correctIndex: 0,
    explanation:
      "Love is one part of the fruit the Holy Spirit produces in a believer's life.",
    scripture: "Galatians 5:22-23",
    active: true
  },

  {
    id: "L9-Q012",
    factKey: "fruit-spirit-joy-peace",
    level: 9,
    type: "true-false",
    question: "True or False: Joy and peace are also listed as fruit of the Spirit.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "The fruit of the Spirit includes love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.",
    scripture: "Galatians 5:22-23",
    active: true
  },

  {
    id: "L9-Q013",
    factKey: "do-good-help-others",
    level: 9,
    type: "multiple-choice",
    question: "What should Christians do when they are able to help someone in need?",
    answers: [
      "Ignore them",
      "Do good and help",
      "Make fun of them",
      "Wait for someone else"
    ],
    correctIndex: 1,
    explanation:
      "Scripture calls us to do good and care for others when we have the opportunity.",
    scripture: "Galatians 6:10",
    active: true
  },

  {
    id: "L9-Q014",
    factKey: "forgive-others-as-god-forgave",
    level: 9,
    type: "multiple-choice",
    question: "What should a Christian do after being forgiven by God when someone else wrongs them?",
    answers: [
      "Refuse to forgive",
      "Seek revenge",
      "Be willing to forgive",
      "Never speak to anyone again"
    ],
    correctIndex: 2,
    explanation:
      "Because God has forgiven us in Christ, we are called to forgive others.",
    scripture: "Ephesians 4:32",
    active: true
  },

  {
    id: "L9-Q015",
    factKey: "be-kind-forgiving-one-another",
    level: 9,
    type: "fill-blank",
    question: "The Bible says, 'Be kind to one another, tenderhearted, ________ one another.'",
    acceptedAnswers: [
      "forgiving",
      "forgiving one another"
    ],
    displayAnswer: "forgiving",
    explanation:
      "Christians are called to show kindness, compassion, and forgiveness.",
    scripture: "Ephesians 4:32",
    active: true
  },

  {
    id: "L9-Q016",
    factKey: "christian-choices-still-matter",
    level: 9,
    type: "true-false",
    question: "True or False: Following Jesus means our choices and behavior no longer matter.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation:
      "Salvation is God's gift, and those who belong to Christ are called to live in ways that honor Him.",
    scripture: "Ephesians 2:8-10",
    active: true
  },

  {
    id: "L9-Q017",
    factKey: "believers-gather-worship-encourage",
    level: 9,
    type: "multiple-choice",
    question: "Why do Christians gather together with other believers?",
    answers: [
      "To encourage one another and worship God",
      "Only to compete",
      "Only to eat food",
      "Because God cannot hear them at home"
    ],
    correctIndex: 0,
    explanation:
      "Christians gather to worship, learn, pray, and encourage one another.",
    scripture: "Hebrews 10:24-25",
    active: true
  },

  {
    id: "L9-Q018",
    factKey: "jesus-commanded-baptism",
    level: 9,
    type: "multiple-choice",
    question: "What public act did Jesus command new disciples to receive?",
    answers: [
      "Baptism",
      "A crown",
      "A special uniform",
      "A new name"
    ],
    correctIndex: 0,
    explanation:
      "Jesus commanded His disciples to baptize those who become His followers.",
    scripture: "Matthew 28:19",
    active: true
  },

  {
    id: "L9-Q019",
    factKey: "ready-share-hope-in-jesus",
    level: 9,
    type: "true-false",
    question: "True or False: Christians should be ready to tell others about the hope they have in Jesus.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Followers of Jesus should be ready to explain their hope with gentleness and respect.",
    scripture: "1 Peter 3:15",
    active: true
  },

  {
    id: "L9-Q020",
    factKey: "living-for-jesus-honor-christ",
    level: 9,
    type: "multiple-choice",
    question: "What is the main goal of living for Jesus?",
    answers: [
      "Becoming more famous than everyone else",
      "Honoring Christ with our lives",
      "Never making another mistake",
      "Winning every argument"
    ],
    correctIndex: 1,
    explanation:
      "Living for Jesus means trusting Him, growing in His truth, loving others, and seeking to honor Him with our lives.",
    scripture: "Colossians 3:17",
    active: true
  },
  /* =======================================================
     LEVEL 10 — KINGDOM CHAMPION
     ======================================================= */

  {
    id: "L10-Q001",
    factKey: "god-created-heavens-earth-finale",
    level: 10,
    type: "multiple-choice",
    question: "Who created the heavens and the earth?",
    answers: [
      "Moses",
      "God",
      "David",
      "Solomon"
    ],
    correctIndex: 1,
    explanation:
      "The Bible begins by declaring that God created the heavens and the earth.",
    scripture: "Genesis 1:1",
    active: true
  },

  {
    id: "L10-Q002",
    factKey: "humans-created-image-god-finale",
    level: 10,
    type: "true-false",
    question: "True or False: Human beings were created in the image of God.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Scripture teaches that people are uniquely created in God's image.",
    scripture: "Genesis 1:27",
    active: true
  },

  {
    id: "L10-Q003",
    factKey: "jesus-christ-son-god-finale",
    level: 10,
    type: "multiple-choice",
    question: "Who is Jesus Christ?",
    answers: [
      "Only a teacher",
      "The Son of God and the promised Christ",
      "Only a prophet",
      "A Roman ruler"
    ],
    correctIndex: 1,
    explanation:
      "Jesus is the Christ, the Son of the living God.",
    scripture: "Matthew 16:16",
    active: true
  },

  {
    id: "L10-Q004",
    factKey: "jesus-way-truth-life-finale",
    level: 10,
    type: "fill-blank",
    question: "Jesus said, 'I am the way, the truth, and the ________.'",
    acceptedAnswers: [
      "life",
      "the life"
    ],
    displayAnswer: "life",
    explanation:
      "Jesus said He is the way, the truth, and the life.",
    scripture: "John 14:6",
    active: true
  },

  {
    id: "L10-Q005",
    factKey: "jesus-died-for-sins-finale",
    level: 10,
    type: "multiple-choice",
    question: "What did Jesus do for our sins?",
    answers: [
      "Ignored them",
      "Died for them",
      "Told us to fix them ourselves",
      "Pretended they did not matter"
    ],
    correctIndex: 1,
    explanation:
      "Jesus gave Himself for our sins on the cross.",
    scripture: "1 Corinthians 15:3",
    active: true
  },

  {
    id: "L10-Q006",
    factKey: "jesus-rose-from-dead-finale",
    level: 10,
    type: "true-false",
    question: "True or False: Jesus rose from the dead.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus rose from the dead on the third day.",
    scripture: "1 Corinthians 15:4",
    active: true
  },

  {
    id: "L10-Q007",
    factKey: "salvation-gift-through-jesus-finale",
    level: 10,
    type: "multiple-choice",
    question: "What is salvation?",
    answers: [
      "Something we earn by being perfect",
      "God's gift through Jesus Christ",
      "A prize for knowing the most Bible facts",
      "Something only adults can receive"
    ],
    correctIndex: 1,
    explanation:
      "Salvation is God's gracious gift through Jesus Christ, not something we earn.",
    scripture: "Ephesians 2:8-9",
    active: true
  },

  {
    id: "L10-Q008",
    factKey: "believe-lord-jesus-finale",
    level: 10,
    type: "fill-blank",
    question: "The Bible says, 'Believe in the Lord ________, and you will be saved.'",
    acceptedAnswers: [
      "Jesus",
      "Jesus Christ",
      "Christ Jesus"
    ],
    displayAnswer: "Jesus",
    explanation:
      "Scripture calls us to trust in the Lord Jesus Christ.",
    scripture: "Acts 16:31",
    active: true
  },

  {
    id: "L10-Q009",
    factKey: "goodness-cannot-replace-faith-finale",
    level: 10,
    type: "true-false",
    question: "True or False: Being good enough can replace trusting in Jesus.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 1,
    explanation:
      "Good works cannot replace faith in Christ. Salvation is received through God's grace.",
    scripture: "Ephesians 2:8-9",
    active: true
  },

  {
    id: "L10-Q010",
    factKey: "repentance-turn-to-god-finale",
    level: 10,
    type: "multiple-choice",
    question: "What does repentance mean?",
    answers: [
      "Turning from sin toward God",
      "Never making another mistake",
      "Hiding from God",
      "Memorizing every Bible verse"
    ],
    correctIndex: 0,
    explanation:
      "Repentance means turning from sin toward God with a changed heart.",
    scripture: "Acts 3:19",
    active: true
  },

  {
    id: "L10-Q011",
    factKey: "holy-spirit-helps-believers-finale",
    level: 10,
    type: "multiple-choice",
    question: "Who helps believers follow Jesus and grow in faith?",
    answers: [
      "The Holy Spirit",
      "Pharaoh",
      "Caesar",
      "Goliath"
    ],
    correctIndex: 0,
    explanation:
      "God gives believers the Holy Spirit to help, teach, and guide them.",
    scripture: "John 14:16-17",
    active: true
  },

  {
    id: "L10-Q012",
    factKey: "scripture-teaches-gods-truth-finale",
    level: 10,
    type: "multiple-choice",
    question: "What should Christians use to learn God's truth?",
    answers: [
      "Scripture",
      "Rumors",
      "Popular opinion",
      "Only their feelings"
    ],
    correctIndex: 0,
    explanation:
      "Scripture teaches us God's truth and helps us grow in faith.",
    scripture: "2 Timothy 3:16-17",
    active: true
  },

  {
    id: "L10-Q013",
    factKey: "prayer-relationship-with-god-finale",
    level: 10,
    type: "true-false",
    question: "True or False: Prayer is one way Christians grow in their relationship with God.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Prayer allows believers to speak with God, thank Him, confess sin, and bring Him their needs.",
    scripture: "Philippians 4:6",
    active: true
  },

  {
    id: "L10-Q014",
    factKey: "disciples-known-by-love-finale",
    level: 10,
    type: "fill-blank",
    question: "Jesus said people would know His disciples by their ________ for one another.",
    acceptedAnswers: [
      "love",
      "their love"
    ],
    displayAnswer: "love",
    explanation:
      "Love for one another is one of the clearest marks Jesus gave for His disciples.",
    scripture: "John 13:34-35",
    active: true
  },

  {
    id: "L10-Q015",
    factKey: "confess-sin-finale",
    level: 10,
    type: "multiple-choice",
    question: "What should Christians do when they sin?",
    answers: [
      "Hide from God forever",
      "Confess their sin to God",
      "Blame someone else",
      "Stop praying"
    ],
    correctIndex: 1,
    explanation:
      "God calls believers to confess their sins and trust His forgiveness.",
    scripture: "1 John 1:9",
    active: true
  },

  {
    id: "L10-Q016",
    factKey: "following-jesus-love-serve-finale",
    level: 10,
    type: "true-false",
    question: "True or False: Following Jesus means loving and serving other people.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus calls His followers to love and serve others with humility and compassion.",
    scripture: "Mark 10:43-45",
    active: true
  },

  {
    id: "L10-Q017",
    factKey: "share-hope-in-jesus-finale",
    level: 10,
    type: "multiple-choice",
    question: "What should Christians be ready to share with others?",
    answers: [
      "Their hope in Jesus",
      "Their possessions",
      "Their favorite games",
      "Their disagreements"
    ],
    correctIndex: 0,
    explanation:
      "Followers of Jesus should be ready to explain the hope they have in Him with gentleness and respect.",
    scripture: "1 Peter 3:15",
    active: true
  },

  {
    id: "L10-Q018",
    factKey: "greatest-truth-knowing-jesus",
    level: 10,
    type: "multiple-choice",
    question: "What is the greatest truth this trivia journey points toward?",
    answers: [
      "Knowing the most facts",
      "Winning every level",
      "Knowing who Jesus is and what He has done",
      "Getting every answer correct"
    ],
    correctIndex: 2,
    explanation:
      "Bible knowledge matters, but the greatest truth is knowing who Jesus Christ is and what He has done for us.",
    scripture: "John 20:31",
    active: true
  },

  {
    id: "L10-Q019",
    factKey: "jesus-promises-eternal-life-finale",
    level: 10,
    type: "true-false",
    question: "True or False: Jesus promised eternal life to those who believe in Him.",
    answers: [
      "True",
      "False"
    ],
    correctIndex: 0,
    explanation:
      "Jesus promises eternal life to those who trust in Him.",
    scripture: "John 3:16",
    active: true
  },

  {
    id: "L10-Q020",
    factKey: "whole-trivia-journey-gospel-summary",
    level: 10,
    type: "multiple-choice",
    question: "Which statement best summarizes the entire Bible Trivia with Solomon journey?",
    answers: [
      "Bible facts are the most important thing in life",
      "God created us, sin separated us from Him, Jesus died and rose to save sinners, and we are called to trust and follow Him",
      "Good people save themselves",
      "Christianity is mostly about winning and rules"
    ],
    correctIndex: 1,
    explanation:
      "The Bible's message leads us to Jesus Christ: God created us, sin broke our fellowship with Him, Christ died and rose to save sinners, and He calls us to trust and follow Him.",
    scripture: "Romans 3:23; Romans 5:8; Romans 6:23; 1 Corinthians 15:3-4",
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
