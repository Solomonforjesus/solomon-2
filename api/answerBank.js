// api/answerBank.js
// Solomon 2.0 Protected Auto Answer Bank
// Purpose: provide approved short answers for high-confidence common questions.
// Safety rule: only return an auto-answer when the match is strong.

const answerBank = [
  {
    id: "JESUS-001",
    topic: "Who is Jesus?",
    triggers: [
      "who is jesus",
      "who is jesus christ",
      "tell me about jesus",
      "what do christians believe about jesus"
    ],
    answer: `Jesus Christ is the Son of God, God the Son, and the living Savior of the world. He is fully God and fully man. He reveals God, saves sinners, forgives sin, reigns as Lord, and gives eternal life to all who trust in Him.

In His earthly ministry, Jesus lived without sin, died for our sins, and rose again. He is alive forevermore.

A helpful passage is John 1:1–14.

Would you like a deeper answer about who Jesus is?`
  },
  {
    id: "JESUS-002",
    topic: "Is Jesus God?",
    triggers: [
      "is jesus god",
      "is jesus really god",
      "did jesus claim to be god",
      "is jesus divine",
      "is jesus only a prophet"
    ],
    answer: `Yes. Christianity teaches that Jesus is God the Son, eternally one with the Father and the Holy Spirit. Jesus is not merely a prophet, teacher, or moral example. He receives worship, forgives sin, reigns as Lord, gives eternal life, and remains forever worthy of glory.

During His earthly ministry, He claimed unity with the Father, fulfilled Scripture, died on the cross, and rose from the dead.

A helpful passage is John 20:28, where Thomas says to Jesus, “My Lord and my God.”

Would you like a deeper answer about why Christians believe Jesus is God?`
  },
  {
    id: "JESUS-003",
    topic: "Why did Jesus die for us?",
    triggers: [
      "why did jesus die for us",
      "why did jesus die",
      "why did jesus have to die",
      "why did jesus die on the cross",
      "what did jesus death accomplish"
    ],
    answer: `Jesus died for us because sin separates us from God, and we cannot save ourselves. On the cross, Jesus took the judgment sinners deserve so that all who trust in Him are forgiven, cleansed, and reconciled to God.

Jesus is not still dead. He is risen, He lives, and He saves completely.

A helpful passage is 1 Peter 3:18.

Would you like a deeper answer about the cross and forgiveness?`
  },
  {
    id: "SALV-001",
    topic: "What does it mean to believe in Jesus?",
    triggers: [
      "what does it mean to believe in jesus",
      "what does believe in jesus mean",
      "how do i believe in jesus",
      "what is faith in jesus",
      "what does it mean to trust jesus"
    ],
    answer: `To believe in Jesus means more than knowing facts about Him. It means trusting Him personally as the living Lord and Savior. True faith receives who He is, trusts what He accomplished through His death and resurrection, and turns toward Him in repentance and surrender.

Jesus is alive, and faith in Him is not merely agreement with history. It is personal trust in the One who saves now and forever.

A helpful passage is John 3:16.

Would you like a deeper answer about faith, repentance, and salvation?`
  },
  {
    id: "SALV-002",
    topic: "Can we be saved without Jesus?",
    triggers: [
      "can we be saved without jesus",
      "can i be saved without jesus",
      "is jesus the only way",
      "is jesus the only way to heaven",
      "can people go to heaven without jesus"
    ],
    answer: `No. Salvation is found in Jesus Christ alone. Jesus is the living Savior, and no one comes to the Father except through Him.

Jesus says, “I am the way, and the truth, and the life.”

A helpful passage is John 14:6.

Would you like a deeper answer about why Christianity teaches that Jesus is the only Savior?`
  },
  {
    id: "SALV-003",
    topic: "How can I know if I am saved?",
    triggers: [
      "how can i know if i am saved",
      "how do i know i am saved",
      "am i saved",
      "how can i know i have eternal life",
      "how do i know if i belong to jesus"
    ],
    answer: `You can know you are saved if your trust is in Jesus Christ, not in your own goodness. Salvation is received by grace through faith in the living Savior. A saved person may still struggle, but there will be a real desire to follow Christ, repent of sin, and belong to Him.

Jesus does not merely offer past forgiveness. He gives new life, keeps His people, and continues His work in them.

A helpful passage is 1 John 5:11–13.

Would you like a deeper answer about assurance of salvation?`
  },
  {
    id: "BIBLE-001",
    topic: "What is the Bible?",
    triggers: [
      "what is the bible",
      "tell me about the bible",
      "what kind of book is the bible",
      "what is scripture",
      "what are the scriptures"
    ],
    answer: `The Bible is the written Word of God. It tells us who God is, what has gone wrong with the world, how God works through history, and how salvation comes through Jesus Christ. It includes history, law, poetry, wisdom, prophecy, Gospel, and letters.

The Bible is not merely an ancient religious book. It remains living truth because the God who speaks through it still lives, reigns, convicts, comforts, and saves.

A helpful passage is 2 Timothy 3:16–17.

Would you like a deeper answer about how the Bible is organized?`
  },
  {
    id: "BIBLE-002",
    topic: "Is the Bible true, inerrant, and factual?",
    triggers: [
      "is the bible true",
      "is the bible inerrant",
      "is the bible factual",
      "can we trust the bible",
      "is scripture true"
    ],
    answer: `Yes. The Bible is the Word of God and is true in all that God intends it to teach. The Bible includes history, poetry, prophecy, wisdom, symbols, and parables, so each passage should be read according to its proper form.

God’s Word is not expired truth. It remains true because God remains true.

A helpful passage is John 17:17, where Jesus says, “Your word is truth.”

Would you like a deeper answer about inerrancy, translations, or apparent contradictions?`
  },
  {
    id: "GOD-001",
    topic: "How do we know God exists?",
    triggers: [
      "how do you know god exists",
      "how do we know god exists",
      "does god exist",
      "is there evidence for god",
      "prove god exists"
    ],
    answer: `The Bible teaches that God makes Himself known through creation, conscience, Scripture, and most fully through Jesus Christ.

The universe is not random noise. It is intelligible, ordered, mathematical, life-permitting, and morally meaningful. Science can describe many mechanisms inside creation, but mechanism is not the same thing as meaning. A working universe with laws does not remove the need for God; it points to a rational Creator who gives reality its order and purpose.

Romans 1:19–20 says God’s eternal power and divine nature are clearly perceived in the things He has made.

Would you like a deeper answer about evidence for God?`
  },
  {
    id: "GOD-002",
    topic: "Who created God?",
    triggers: [
      "who created god",
      "who made god",
      "where did god come from",
      "what caused god",
      "who created the creator"
    ],
    answer: `No one created God. Everything that begins to exist needs a cause, but God did not begin to exist. He is eternal, self-existent, and uncreated. God is not one more thing inside the universe. He is the Creator and source of all things.

God always is. He is not a past explanation only; He is the living Lord who sustains creation now.

A helpful passage is Psalm 90:2.

Would you like a deeper answer about God’s eternal nature?`
  },
  {
    id: "EVIL-001",
    topic: "Why does God allow suffering?",
    triggers: [
      "why does god allow suffering",
      "why does god allow bad things",
      "why do bad things happen",
      "why do bad things happen to good people",
      "if god is good why is there suffering",
      "why do innocent people suffer",
      "why do children suffer"
    ],
    answer: `God does not ignore suffering, and nothing takes Him by surprise. The Bible teaches that God is sovereign, that His ways are higher than ours, and that we live in a fallen world where pain, disease, disaster, and death are real.

Suffering is not always a direct punishment for a specific person’s sin. God is merciful, present in distress, and able to use suffering as a wake-up call that turns people toward Him. Christianity also teaches that this world is not our final home, and that present suffering cannot compare with the glory God will reveal.

Jesus is not absent from human suffering. He entered this broken world, suffered, died, rose again, and now offers eternal hope to all who trust in Him.

Helpful passages include Isaiah 55:8–9, Romans 8:18–22, and Lamentations 3:22–23.

Would you like a deeper answer about suffering, evil, and God’s goodness?`
  },
  {
    id: "REL-001",
    topic: "Why are there so many religions?",
    triggers: [
      "why are there so many religions",
      "why are there different religions",
      "are all religions true",
      "can all religions be true",
      "is christianity the only true religion"
    ],
    answer: `There are many religions because human beings are religious by nature, but we are also fallen, limited, and often confused about God. People search for God in many ways, but the Bible teaches that God reveals Himself truly and finally in Jesus Christ.

Christianity cannot treat all religions as true, because they make different and conflicting claims about God, sin, salvation, and Jesus. If Jesus is who He says He is, then any religion that denies Him as Lord, Savior, Son of God, crucified and risen Messiah, is not true.

Jesus is not one path among many. He is the way, the truth, and the life.

A helpful passage is John 14:6.

Would you like a deeper answer about Christianity and other religions?`
  
  },
  {
    id: "GOSPEL-001",
    topic: "What is the Gospel?",
    triggers: [
      "what is the gospel",
      "explain the gospel",
      "what is the good news",
      "what is the christian gospel",
      "tell me the gospel"
    ],
    answer: `The Gospel is the good news that God saves sinners through Jesus Christ. We have sinned against God and cannot save ourselves, but Jesus Christ, the Son of God, died for our sins, rose from the dead, and gives forgiveness and eternal life to all who repent and trust in Him.

The Gospel is not advice about how to become a better person. It is the announcement of what God has done through Jesus to rescue sinners and reconcile them to Himself.

A helpful passage is 1 Corinthians 15:3–4.

Would you like a deeper answer about the Gospel?`
  }
];

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findAutoAnswer(userMessage) {
  const normalized = normalizeText(userMessage);

  if (!normalized) return null;

  // Avoid using normal auto answers for urgent crisis language.
  // Let the main Solomon safety system handle this.
  const crisisTerms = [
    "kill myself",
    "suicide",
    "end my life",
    "hurt myself",
    "self harm",
    "i want to die",
    "i don't want to live",
    "i dont want to live"
  ];

  if (crisisTerms.some((term) => normalized.includes(term))) {
    return null;
  }

  for (const item of answerBank) {
    for (const trigger of item.triggers) {
      const normalizedTrigger = normalizeText(trigger);

      if (
        normalized === normalizedTrigger ||
        normalized.includes(normalizedTrigger)
      ) {
        return {
          id: item.id,
          topic: item.topic,
          answer: item.answer
        };
      }
    }
  }

  return null;
}

export { findAutoAnswer, answerBank };
