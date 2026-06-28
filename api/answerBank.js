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
 
  
  },
  {
    id: "BIBLE-003",
    topic: "Who wrote the Bible?",
    triggers: [
      "who wrote the bible",
      "who wrote scripture",
      "who are the authors of the bible",
      "did god write the bible",
      "how was the bible written"
    ],
    answer: `The Bible was written by many human authors over many centuries, but the Holy Spirit guided them so that Scripture is truly the Word of God.

The Bible includes writings from prophets, kings, shepherds, apostles, eyewitnesses, and servants of God. Though the human authors differ, the Bible has one ultimate Author: God.

A helpful passage is 2 Peter 1:20–21.

Would you like a deeper answer about how God inspired Scripture?`
  },
  {
    id: "BIBLE-004",
    topic: "Why are there different Bible translations?",
    triggers: [
      "why are there different bible translations",
      "why so many bible translations",
      "which bible translation should i use",
      "are bible translations reliable",
      "why are there different versions of the bible"
    ],
    answer: `There are different Bible translations because the Bible was originally written mainly in Hebrew, Aramaic, and Greek. Translation brings those original languages into the language people read today.

Some translations aim for word-for-word accuracy. Others aim for thought-for-thought clarity. A good translation does not create a new Bible; it helps readers understand the same Scripture faithfully.

Solomon’s approved English translations include NKJV, ESV, and NRSV.

Would you like a deeper answer about choosing a Bible translation?`
  },
  {
    id: "BIBLE-005",
    topic: "Has the Bible been corrupted?",
    triggers: [
      "has the bible been corrupted",
      "was the bible corrupted",
      "has scripture been changed",
      "how do we know the bible has not been corrupted",
      "can we trust the bible manuscripts"
    ],
    answer: `No. The Bible has been carefully preserved through manuscripts, quotations, translations, and historical transmission. There are manuscript differences, but they do not overthrow the core message of Scripture or the Gospel of Jesus Christ.

God has not failed to preserve His Word. The Bible we have faithfully gives us what God intended His people to receive.

A helpful passage is Isaiah 40:8.

Would you like a deeper answer about biblical manuscripts and preservation?`
  },
  {
    id: "BIBLE-006",
    topic: "Who decided which books belong in the Bible?",
    triggers: [
      "who decided which books belong in the bible",
      "who chose the books of the bible",
      "who decided the bible canon",
      "how was the bible canon decided",
      "why are some books not in the bible"
    ],
    answer: `The church did not invent Scripture’s authority. The church recognized the books God had given.

For the New Testament, the recognized books carried apostolic authority, faithfulness to the Gospel, widespread use among the churches, and consistency with the truth already received. The canon was not a political invention; it was the recognition of God’s inspired writings.

A helpful passage is Luke 24:44–45.

Would you like a deeper answer about the biblical canon?`
  },
  {
    id: "BIBLE-007",
    topic: "Are there contradictions in the Bible?",
    triggers: [
      "are there contradictions in the bible",
      "does the bible contradict itself",
      "are bible contradictions real",
      "why are there contradictions in scripture",
      "the bible has contradictions"
    ],
    answer: `The Bible is true and trustworthy because it is God’s Word. Some passages can look difficult at first because they involve different authors, perspectives, summaries, translations, time periods, or ancient writing styles.

An apparent contradiction is not automatically a real contradiction. Many difficulties can be answered by reading carefully, checking context, understanding genre, and letting Scripture interpret Scripture.

A helpful passage is John 17:17.

Would you like to ask about a specific Bible passage that seems contradictory?`
  },
  {
    id: "BIBLE-008",
    topic: "Is the Bible literal or symbolic?",
    triggers: [
      "is the bible literal",
      "is the bible symbolic",
      "is the bible literal or symbolic",
      "should the bible be read literally",
      "how literal is the bible"
    ],
    answer: `The Bible should be read as true, but not every sentence should be read in the same way. Scripture includes history, poetry, prophecy, wisdom, parables, visions, symbols, law, letters, and Gospel narrative.

Faithful interpretation asks: What kind of writing is this? What did the author intend? What does the context show? Literal history should be read as history. Symbolic visions should be read as symbolic truth, not as falsehood.

A helpful passage is Nehemiah 8:8.

Would you like a deeper answer about reading the Bible rightly?`
  },
  {
    id: "BIBLE-009",
    topic: "How should we interpret the Bible?",
    triggers: [
      "how should we interpret the bible",
      "how do i interpret scripture",
      "how do i understand the bible",
      "how should i study the bible",
      "how do we read the bible correctly"
    ],
    answer: `We should interpret the Bible humbly, carefully, prayerfully, and in context. A good reader asks what the passage says, what kind of writing it is, who wrote it, who received it, and how it fits with the whole message of Scripture.

We should not twist verses to fit our desires. Scripture should correct us; we should not correct Scripture.

A helpful passage is 2 Timothy 2:15.

Would you like a deeper answer about how to study the Bible?`
  },
  {
    id: "JESUS-004",
    topic: "Did Jesus really exist historically?",
    triggers: [
      "did jesus really exist",
      "did jesus exist historically",
      "was jesus a real person",
      "is jesus historical",
      "how do we know jesus existed"
    ],
    answer: `Yes. Jesus of Nazareth truly lived in history. Christianity is not built on a myth or vague spiritual idea. It is rooted in real events: Jesus’ life, teaching, crucifixion, burial, resurrection, and the witness of those who followed Him.

The New Testament gives the primary witness to Jesus, and even outside Christian writings, Jesus is recognized as a real historical figure.

A helpful passage is Luke 1:1–4.

Would you like a deeper answer about historical evidence for Jesus?`
  },
  {
    id: "JESUS-005",
    topic: "Are the Gospels reliable?",
    triggers: [
      "are the gospels reliable",
      "can we trust the gospels",
      "how do we know the gospels are reliable",
      "are the gospels true",
      "were the gospels written by eyewitnesses"
    ],
    answer: `Yes. The Gospels are reliable witnesses to Jesus Christ. They are rooted in eyewitness testimony, early Christian proclamation, historical detail, and the life of the church that preserved and proclaimed the truth about Jesus.

The Gospels are not detached biographies written merely to satisfy curiosity. They are faithful testimony so that people may know who Jesus is, what He has done, and why He is worthy of trust.

A helpful passage is John 20:30–31.

Would you like a deeper answer about the reliability of the Gospels?`
  },
  {
    id: "JESUS-006",
    topic: "Did Jesus really rise from the dead?",
    triggers: [
      "did jesus really rise from the dead",
      "did jesus rise from the dead",
      "is the resurrection real",
      "did the resurrection happen",
      "was jesus resurrected"
    ],
    answer: `Yes. Christianity stands on the real resurrection of Jesus Christ. Jesus did not merely inspire His followers after death. He bodily rose from the grave, appeared to many witnesses, and lives forever as Lord and Savior.

If Jesus did not rise, Christianity would collapse. But because He is risen, sin, death, and the grave do not have the final word.

A helpful passage is 1 Corinthians 15:14–20.

Would you like a deeper answer about evidence for the resurrection?`
  },
  {
    id: "JESUS-007",
    topic: "Could the disciples have stolen Jesus’ body?",
    triggers: [
      "could the disciples have stolen jesus body",
      "did the disciples steal jesus body",
      "was jesus body stolen",
      "did someone steal jesus body",
      "empty tomb stolen body"
    ],
    answer: `No. That explanation does not fit the evidence well. The disciples were afraid after Jesus’ crucifixion, and they later suffered for proclaiming that He had risen. People may die for something false if they think it is true, but they do not willingly suffer for something they know they fabricated.

The better Christian answer is that the tomb was empty because Jesus truly rose from the dead.

A helpful passage is Matthew 28:11–15.

Would you like a deeper answer about the empty tomb?`
  },
  {
    id: "JESUS-008",
    topic: "Was Jesus just a good moral teacher?",
    triggers: [
      "was jesus just a good moral teacher",
      "was jesus only a teacher",
      "was jesus just a prophet",
      "was jesus merely a good man",
      "was jesus just a moral example"
    ],
    answer: `No. Jesus is not merely a good moral teacher. He claims authority over sin, life, death, judgment, and salvation. He receives worship, forgives sin, identifies Himself uniquely with the Father, and calls all people to follow Him.

A merely good teacher does not rightly claim what Jesus claims unless those claims are true. Jesus is Lord, God the Son, the crucified and risen Savior.

A helpful passage is John 10:30.

Would you like a deeper answer about Jesus’ identity?`

  },
  {
    id: "SALV-005",
    topic: "How do I become a Christian?",
    triggers: [
      "how do i become a christian",
      "how can i become a christian",
      "how do i get saved",
      "how can i be saved",
      "how do i give my life to jesus"
    ],
    answer: `To become a Christian, turn from sin and trust in Jesus Christ as Lord and Savior. You are not saved by being good enough, religious enough, or smart enough. You are saved by God’s grace through faith in Jesus.

Jesus died for sinners, rose from the dead, and gives forgiveness and eternal life to all who come to Him. Call on Him honestly, confess your sin, trust Him, and follow Him.

A helpful passage is Romans 10:9–13.

Would you like a simple prayer of repentance and faith?`
  },
  {
    id: "FORGIVE-001",
    topic: "Can God forgive me?",
    triggers: [
      "can god forgive me",
      "will god forgive me",
      "can jesus forgive me",
      "am i too sinful for god",
      "can god forgive my sins"
    ],
    answer: `Yes. God can forgive you through Jesus Christ. No sin is too strong for the blood of Christ, and no sinner is beyond God’s mercy if they truly come to Him in repentance and faith.

Forgiveness is not earned by pretending your sin was small. Forgiveness comes because Jesus is a great Savior. He died for sinners, rose again, and receives those who turn to Him.

A helpful passage is 1 John 1:9.

Would you like a deeper answer about forgiveness and repentance?`
  },
  {
    id: "SIN-002",
    topic: "What if I keep sinning?",
    triggers: [
      "what if i keep sinning",
      "why do i keep sinning",
      "i keep falling into sin",
      "can god forgive me if i keep sinning",
      "how do i stop sinning"
    ],
    answer: `If you keep sinning, do not hide from God. Come to Him honestly. Confess your sin, ask for mercy, and seek help to fight it. A Christian may still struggle, but should not make peace with sin.

Jesus saves sinners not only from guilt, but also from sin’s power. Growth may be slow, but God calls His people to repent, obey, and depend on the Holy Spirit.

A helpful passage is Romans 6:1–4.

Would you like a deeper answer about fighting repeated sin?`
  },
  {
    id: "PRAYER-001",
    topic: "What is prayer?",
    triggers: [
      "what is prayer",
      "what does prayer mean",
      "explain prayer",
      "why do christians pray",
      "what is christian prayer"
    ],
    answer: `Prayer is talking with God. It includes worship, confession, thanksgiving, asking for help, praying for others, and surrendering our will to God.

Prayer is not magic, performance, or a way to control God. It is humble communion with the living God through faith. Because of Jesus, believers may come to God as Father.

A helpful passage is Matthew 6:9–13.

Would you like a deeper answer about how to pray?`
  },
  {
    id: "PRAYER-002",
    topic: "Does God answer prayer?",
    triggers: [
      "does god answer prayer",
      "does god hear my prayers",
      "why does god not answer prayer",
      "does prayer work",
      "will god answer my prayer"
    ],
    answer: `Yes. God answers prayer according to His wisdom, will, timing, and goodness. Sometimes He says yes, sometimes no, sometimes wait, and sometimes He gives something better than what we asked.

Prayer is not about forcing God to follow our plans. It is about trusting Him, seeking Him, and bringing our needs before Him with faith and humility.

A helpful passage is 1 John 5:14–15.

Would you like a deeper answer about unanswered prayer?`
  },
  {
    id: "TRINITY-001",
    topic: "What is the Trinity?",
    triggers: [
      "what is the trinity",
      "explain the trinity",
      "what does trinity mean",
      "how can god be three in one",
      "father son and holy spirit"
    ],
    answer: `The Trinity means there is one God eternally existing as three Persons: the Father, the Son, and the Holy Spirit. The Father is God, the Son is God, and the Holy Spirit is God. Yet there are not three gods, but one God.

The Trinity is not a puzzle invented by man. It is how God has revealed Himself in Scripture. We may not fully comprehend God’s nature, but we can truly know what He has revealed.

A helpful passage is Matthew 28:19.

Would you like a deeper answer about the Trinity?`
  },
  {
    id: "HEAVEN-001",
    topic: "What is heaven?",
    triggers: [
      "what is heaven",
      "what is heaven like",
      "tell me about heaven",
      "is heaven real",
      "where do christians go after death"
    ],
    answer: `Heaven is the dwelling place of God and the future home of all who belong to Jesus Christ. It is not merely clouds, symbols, or imagination. It is life with God, free from sin, death, grief, and evil.

The final Christian hope is not escape into nothingness, but resurrection life with God in His restored creation. Jesus is the center of heaven’s joy.

A helpful passage is Revelation 21:1–4.

Would you like a deeper answer about heaven and eternal life?`
  },
  {
    id: "HELL-001",
    topic: "What is hell?",
    triggers: [
      "what is hell",
      "is hell real",
      "tell me about hell",
      "why does hell exist",
      "what does the bible say about hell"
    ],
    answer: `Hell is the final judgment of God against sin, rebellion, and unbelief. It is real, serious, and terrible because separation from God’s mercy is terrible.

God does not delight in wickedness or injustice. He is holy, and sin matters. But the Gospel also declares that Jesus came to save sinners from judgment and give eternal life to all who trust in Him.

A helpful passage is Matthew 25:46.

Would you like a deeper answer about judgment, hell, and salvation?`
  },
  {
    id: "CHURCH-001",
    topic: "What is the church?",
    triggers: [
      "what is the church",
      "what does church mean",
      "why does the church matter",
      "what is a biblical church",
      "what is the purpose of the church"
    ],
    answer: `The church is the people of God redeemed by Jesus Christ. It is not merely a building, event, or organization. The church is made up of believers who worship God, proclaim the Gospel, teach Scripture, pray, serve, and encourage one another.

A faithful church points people to Jesus, honors Scripture, practices love and truth, and helps believers grow in obedience.

A helpful passage is Acts 2:42.

Would you like a deeper answer about the purpose of the church?`
  },
  {
    id: "CHURCH-002",
    topic: "Why should I go to church?",
    triggers: [
      "why should i go to church",
      "do i need to go to church",
      "is church necessary",
      "why is church important",
      "can i be a christian without church"
    ],
    answer: `A Christian should gather with a faithful church because God did not design believers to follow Jesus alone. Christians need worship, teaching, correction, encouragement, prayer, fellowship, and service.

Church attendance does not save you. Jesus saves. But those who belong to Jesus should desire to grow with His people.

A helpful passage is Hebrews 10:24–25.

Would you like a deeper answer about finding a faithful church?`
  },
  {
    id: "GUIDANCE-001",
    topic: "How do I know God’s will?",
    triggers: [
      "how do i know god's will",
      "how do i know gods will",
      "what is god's will for my life",
      "what is gods will for my life",
      "how does god guide me"
    ],
    answer: `You know God’s will first through Scripture. God’s will is never contrary to God’s Word. Pray for wisdom, obey what Scripture clearly teaches, seek godly counsel, examine your motives, and trust God step by step.

God may not reveal every detail ahead of time. Often He guides His people through faithful obedience in the next right step.

A helpful passage is Proverbs 3:5–6.

Would you like a deeper answer about decision-making and God’s guidance?`
  },
  {
    id: "MORAL-001",
    topic: "Can morality exist without God?",
    triggers: [
      "can morality exist without god",
      "can there be morality without god",
      "can atheists be moral",
      "do we need god for morality",
      "is morality possible without god"
    ],
    answer: `People can know moral truths even if they deny God, because human beings are made in God’s image and have conscience. But without God, morality loses its ultimate foundation.

If morality is only personal opinion, culture, or survival instinct, then good and evil become unstable. The Bible teaches that moral reality is grounded in God’s holy character.

A helpful passage is Romans 2:14–15.

Would you like a deeper answer about morality and God?`
  },
  {
    id: "MIRACLE-001",
    topic: "Are miracles possible?",
    triggers: [
      "are miracles possible",
      "do miracles happen",
      "can miracles happen",
      "are miracles real",
      "does god still do miracles"
    ],
    answer: `Yes. Miracles are possible because God is the Creator and Lord over nature. The laws of nature describe the normal order God upholds; they do not prevent God from acting within His creation.

The greatest miracle at the center of Christianity is the resurrection of Jesus Christ. If God raised Jesus from the dead, then miracles are not impossible.

A helpful passage is Luke 1:37.

Would you like a deeper answer about miracles and evidence?`
  },
  {
    id: "DESIGN-001",
    topic: "Does fine-tuning point to God?",
    triggers: [
      "does fine tuning point to god",
      "does fine-tuning point to god",
      "what is fine tuning",
      "is the universe fine tuned",
      "does the universe point to god"
    ],
    answer: `Yes. The fine-tuning of the universe points strongly toward God. The universe is ordered in a way that allows life, mathematics, chemistry, stars, planets, and human existence.

Fine-tuning does not prove every detail of Christian doctrine by itself, but it fits powerfully with the biblical truth that the universe is not an accident. Creation reflects wisdom, order, and purpose from the Creator.

A helpful passage is Psalm 19:1.

Would you like a deeper answer about fine-tuning and design?`
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
