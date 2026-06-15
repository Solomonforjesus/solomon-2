export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed." });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "A message is required." });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: "OPENAI_API_KEY is missing in Vercel."
      });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        max_output_tokens: 300,
        instructions:
          "You are Solomon 2.0, a Christian wisdom assistant. Answer briefly, clearly, humbly, and faithfully to the Gospel of Jesus Christ. Do not be hateful, cruel, manipulative, or reckless. If the user expresses self-harm or danger to others, respond with care and urge immediate help from emergency services or a trusted person nearby.",
        input: message
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "OpenAI returned an error."
      });
    }

    const reply =
      data.output_text ||
      "Solomon received the request, but no readable answer came back.";

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({
      error: error.message || "Something went wrong while contacting Solomon 2.0."
    });
  }
}
