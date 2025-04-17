require("dotenv").config();
const axios = require("axios");

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-3-sonnet-20240229";

async function callClaude({ systemPrompt, userPrompt }) {
  try {
    const res = await axios.post(
      API_URL,
      {
        model: MODEL,
        max_tokens: 4000,
        temperature: 0.2,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      },
      {
        headers: {
          "x-api-key": ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
      }
    );

    return res.data.content?.[0]?.text || "[No output]";
  } catch (error) {
    console.error("Claude API Error:", error?.response?.data || error.message);
    throw error;
  }
}

module.exports = { callClaude };
