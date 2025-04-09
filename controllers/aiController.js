const axios = require("axios");
const buildPrompt = require("../utils/openrouterPrompt");

const generateLesson = async (req, res) => {
  const { topic } = req.body;

  const prompt = buildPrompt(topic);

  try {
    const aiResponse = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini", // model name we are using here.
        messages: [
          { role: "system", content: "You are a helpful AI for course content generation." },
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, // API Key insertion, dont forget to add!
          "Content-Type": "application/json"
        }
      }
    );

    const content = aiResponse.data.choices[0].message.content;
    res.status(200).json({ content });
  } catch (error) {
    console.error("AI Error:", error.message);
    res.status(500).json({ error: "Failed to generate lesson." });
  }
};

module.exports = { generateLesson };
