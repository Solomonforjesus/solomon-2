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
  },
  {
    id: "SIN-001",
    topic: "What is sin?",
    triggers: [
      "what is sin",
      "define sin",
      "what does sin mean",
      "why is sin serious",
      "what is sinful"
    ],
    answer: `Sin is rebellion against God. It includes wrong actions, wrong desires, unbelief, pride, selfishness, and anything that falls short of God’s holy character. Sin separates us from God and shows why we need a Savior.

The Bible teaches that all people have sinned, but it also teaches that Jesus Christ saves sinners who come to Him in faith.

A helpful passage is Romans 3:23.

Would you like a deeper answer about sin and forgiveness?`
  },
  {
    id: "REPENT-001",
    topic: "What is repentance?",
    triggers: [
      "what is repentance",
      "what does repent mean",
      "what does repentance mean",
      "how do i repent",
      "do i need to repent"
    ],
    answer: `Repentance means turning from sin and turning to God. It is not merely feeling bad or being afraid of consequences. True repentance includes sorrow over sin, agreement with God about sin, and a changed direction of heart and life.

Repentance does not earn salvation. Salvation is by grace through faith in Jesus Christ. But real faith does not make peace with sin; it turns toward Christ.

A helpful passage is Acts 3:19.

Would you like a deeper answer about repentance and faith?`
  },
  {
    id: "BAPTISM-001",
    topic: "Do I need to be baptized to be saved?",
    triggers: [
      "do i need to be baptized to be saved",
      "is baptism required for salvation",
      "does baptism save me",
      "do you have to be baptized to go to heaven",
      "is baptism necessary to be saved"
    ],
    answer: `Baptism is important because Jesus commands it, but baptism does not save apart from faith in Christ. We are saved by grace through faith in Jesus, not by a religious act.

Baptism is a public sign of belonging to Christ. It pictures death to sin, new life in Christ, and identification with His death and resurrection. A believer should not treat baptism as optional or unimportant, but the water itself is not the Savior. Jesus is.

A helpful passage is Ephesians 2:8–9.

Would you like a deeper answer about baptism?`
  },
  {
    id: "SALV-004",
    topic: "Can I lose my salvation?",
    triggers: [
      "can i lose my salvation",
      "can you lose your salvation",
      "can a christian lose salvation",
      "can i stop being saved",
      "can someone lose eternal life"
    ],
    answer: `A true believer is kept by the power and grace of God. Salvation does not depend on human strength, but on Jesus Christ, who saves and keeps His people.

At the same time, the Bible warns against false faith, careless living, and turning away from Christ. A person who belongs to Jesus may struggle, stumble, and need correction, but God continues His work in those who are truly His.

A helpful passage is John 10:27–29.

Would you like a deeper answer about assurance and perseverance?`
  },
  {
    id: "SPIRIT-001",
    topic: "What is the role of the Holy Spirit?",
    triggers: [
      "what is the role of the holy spirit",
      "who is the holy spirit",
      "what does the holy spirit do",
      "how does the holy spirit help us",
      "what is the holy spirit"
    ],
    answer: `The Holy Spirit is God, the third Person of the Trinity. He convicts the world of sin, gives new birth, indwells believers, teaches truth, produces spiritual fruit, gives strength for obedience, and glorifies Jesus Christ.

The Christian life is not lived by human willpower alone. Believers need the Holy Spirit’s presence, guidance, correction, comfort, and power.

A helpful passage is John 16:13–14.

Would you like a deeper answer about the Holy Spirit?`
  },
  {
    id: "GROW-001",
    topic: "How can I grow in my faith?",
    triggers: [
      "how can i grow in my faith",
      "how do i grow as a christian",
      "how can i get closer to god",
      "how do i strengthen my faith",
      "how can i live a christian life"
    ],
    answer: `You grow in faith by staying close to Jesus Christ. Read Scripture, pray honestly, obey what God shows you, confess sin quickly, gather with faithful believers, worship God, serve others, and keep your eyes on Christ.

Growth is usually not instant. God often matures His people through daily faithfulness, trials, correction, encouragement, and dependence on Him.

A helpful passage is 2 Peter 3:18.

Would you like a deeper answer about growing as a Christian?`
  },
  {
    id: "LOVE-001",
    topic: "How should Christians treat others?",
    triggers: [
      "how should christians treat others",
      "how should christians treat people",
      "how should i treat others",
      "what does christian love mean",
      "how should christians love others"
    ],
    answer: `Christians should treat others with love, truth, humility, patience, mercy, and respect. Every person is made in the image of God, so no one should be treated as worthless.

Christian love does not mean approving everything someone believes or does. It means seeking their good before God, speaking truth without cruelty, and remembering that we ourselves need grace.

A helpful passage is Matthew 22:37–39.

Would you like a deeper answer about Christian love and truth?`
  },
  {
    id: "ISLAM-001",
    topic: "How should Christians treat Muslims?",
    triggers: [
      "how should christians treat muslims",
      "how should a christian treat a muslim",
      "can a muslim be my friend",
      "should christians hate muslims",
      "how should christians talk to muslims"
    ],
    answer: `Christians should treat Muslims with love, dignity, kindness, honesty, and prayer. A Muslim is not an enemy to hate, mock, or mistreat. Every person is made in the image of God and should be treated with respect.

At the same time, Christians must remain faithful to the Gospel. Christianity and Islam make different claims about Jesus, salvation, the cross, and the nature of God. Christians should be truthful about those differences while still showing real love.

A helpful passage is 1 Peter 3:15.

Would you like a deeper answer about loving people of other faiths?`
  },
  {
    id: "ISLAM-002",
    topic: "What is the difference between Christianity and Islam?",
    triggers: [
      "what is the difference between christianity and islam",
      "how is christianity different from islam",
      "christianity vs islam",
      "difference between jesus and islam",
      "do christians and muslims believe the same thing"
    ],
    answer: `Christianity and Islam differ most sharply over Jesus Christ. Christianity teaches that Jesus is God the Son, the crucified and risen Savior, and the only way to the Father. Islam denies that Jesus is God the Son and denies the Christian Gospel of salvation through His death and resurrection.

These differences are not small. They concern the identity of Jesus, the cross, salvation, Scripture, and the nature of God. Christians should explain these differences clearly, but without hatred or mockery.

A helpful passage is John 14:6.

Would you like a deeper answer comparing Christianity and Islam?`
  },
  {
    id: "SCI-001",
    topic: "Does science disprove the Bible?",
    triggers: [
      "does science disprove the bible",
      "does science disprove god",
      "has science disproved christianity",
      "science and the bible",
      "does science contradict the bible"
    ],
    answer: `No. Science does not disprove the Bible. Science can study patterns, mechanisms, matter, energy, life, and the observable world. But science cannot replace God, explain why there is something rather than nothing, or tell us the ultimate meaning and purpose of reality.

The Bible is not a modern science textbook, but it tells the truth about God, creation, humanity, sin, and salvation. When Scripture is read carefully and science is understood honestly, truth does not need to fear truth.

A helpful passage is Psalm 19:1.

Would you like a deeper answer about science and Scripture?`
  },
  {
    id: "SCI-002",
    topic: "Does evolution disprove God?",
    triggers: [
      "does evolution disprove god",
      "does evolution disprove the bible",
      "does evolution disprove christianity",
      "doesn't evolution disprove god",
      "doesnt evolution disprove god",
      "evolution and god"
    ],
    answer: `No. Evolution does not disprove God. Even if someone believes biological change occurs through natural processes, that does not explain why life exists, why the universe is ordered, why laws of nature exist, why information exists, or why human beings have moral and spiritual meaning.

Christians differ on some details of creation and biological history, but Solomon remains faithful to this foundation: God is the Creator, human beings are made in His image, sin is real, and salvation comes through Jesus Christ.

A helpful passage is Genesis 1:1.

Would you like a deeper answer about creation, evolution, and God?`
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
