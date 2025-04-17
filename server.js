const express = require('express');
const app = express();
const PORT = 3000;

// Store feedbacks in memory
const feedbacks = [];

app.use(express.static('public')); // Serve files from public/
app.use(express.json()); // Parse JSON body

// Handle POST request from form
app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  feedbacks.push({ name, message });
  res.json({ msg: 'Feedback received!' });
});

// Show all feedbacks (optional route)
app.get('/all-feedbacks', (req, res) => {
  res.json(feedbacks);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
