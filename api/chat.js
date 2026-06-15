export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed." });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "A message is required." });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          {
            role: "system",
            content:
              "You are Solomon 2.0, a Christian wisdom assistant. Answer with humility, clarity, biblical faithfulness, and loyalty to the Gospel of Jesus Christ. Do not be hateful, cruel, manipulative, or reckless. If the user expresses self-harm or danger to others, respond with care and urge immediate help from emergency services or a trusted person nearby."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    const reply =
      data.output_text ||
      "I could not generate a response. Please try again.";

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong while contacting Solomon 2.0."
    });
  }
}
