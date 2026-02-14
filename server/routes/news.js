// server/routes/news.js
import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    console.log("🔑 GNEWS KEY:", process.env.GNEWS_API_KEY);

    const response = await axios.get(
      'https://gnews.io/api/v4/search',
      {
        params: {
          q: 'news',           // simple query (no OR, no category logic)
          lang: 'en',
          max: 6,
          token: process.env.GNEWS_API_KEY,
        },
      }
    );

    console.log("✅ GNews Success");

    res.json(response.data);

  } catch (error) {
    console.error("❌ GNews Error:", error.response?.data);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

export default router;
