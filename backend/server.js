/**
 * EDUPATH AI - EXPRESS API SERVER
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'EduPath AI API', timestamp: new Date() });
});

// Mock Search & Roadmap API Endpoint
app.get('/api/search', (req, res) => {
  const query = req.query.q || 'Full Stack';
  res.json({
    domain: {
      title: `${query} Developer Path`,
      category: 'Software Engineering',
      description: `A curated learning path generated for ${query}.`
    },
    stages: [
      {
        title: 'Foundations',
        duration: '3-4 Weeks',
        summary: 'Core concepts and underlying fundamentals.',
        topics: ['Core Syntax', 'Tooling', 'Version Control']
      },
      {
        title: 'Intermediate Concepts',
        duration: '4-6 Weeks',
        summary: 'Deep dive into practical frameworks and real-world tools.',
        topics: ['Frameworks', 'API Integration', 'Data Handling']
      }
    ]
  });
});

// Gemini Chat Endpoint Placeholder
app.post('/api/ai/chat', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }
  
  // Dynamic mock AI response for testing frontend integration
  res.json({
    reply: `Here is advice regarding "${prompt}": Focus on building hands-on projects and understanding underlying concepts step-by-step.`
  });
});

app.listen(PORT, () => {
  console.log(`🚀 EduPath AI Server running on port ${PORT}`);
});