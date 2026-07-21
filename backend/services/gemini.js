/**
 * EDUPATH AI - GEMINI AI INTEGRATION SERVICE
 */
const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

/**
 * Sends a structured prompt to Gemini AI with contextual system instructions.
 * @param {string} userPrompt - User query or input
 * @param {object} context - Academic or roadmap context
 */
async function generateAIResponse(userPrompt, context = {}) {
  if (!genAI) {
    return {
      reply: "Gemini API key is not configured on the server. Running in mock mode.",
      isMock: true
    };
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemInstruction = `
You are EduPath AI, an expert academic and career guidance mentor.
Provide concise, actionable, and encouraging answers formatted with clean Markdown.
Keep responses focused on practical learning steps and practical skill development.
    `;

    const promptWithContext = `
[Context: ${JSON.stringify(context)}]
User Question: ${userPrompt}
    `;

    const result = await model.generateContent([
      { text: systemInstruction },
      { text: promptWithContext }
    ]);

    const response = await result.response;
    return {
      reply: response.text(),
      isMock: false
    };
  } catch (error) {
    console.error('[Gemini API Error]:', error);
    throw new Error('Failed to fetch response from Gemini AI');
  }
}

/**
 * Generates a structured JSON study plan using Gemini.
 * @param {string} topic - Subject or module
 * @param {number} days - Timeframe in days
 */
async function generateStudyPlan(topic, days = 7) {
  if (!genAI) {
    return { error: "Gemini API key missing" };
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = `
Create a ${days}-day study plan for the subject/topic: "${topic}".
Return ONLY a valid JSON object matching this schema:
{
  "topic": "${topic}",
  "durationDays": ${days},
  "schedule": [
    {
      "day": 1,
      "focus": "Topic area",
      "tasks": ["Task 1", "Task 2"]
    }
  ]
}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return JSON.parse(response.text());
  } catch (error) {
    console.error('[Gemini Study Plan Error]:', error);
    throw error;
  }
}

module.exports = {
  generateAIResponse,
  generateStudyPlan
};