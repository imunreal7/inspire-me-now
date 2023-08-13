const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const categories = ['inspirational', 'motivational', 'funny', 'life'];

// Sample collection of quotes for each category
const quotes = {
  inspirational: [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    'The future depends on what you do today. - Mahatma Gandhi',
    'The journey of a thousand miles begins with one step. - Lao Tzu',
    'The harder I work, the luckier I get. - Samuel Goldwyn',
    'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs',
    // ... more inspirational quotes
  ],
  motivational: [
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    'Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill',
    'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    'The secret of getting ahead is getting started. - Mark Twain',
    'It does not matter how slowly you go as long as you do not stop. - Confucius',
    'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson',
    // ... more motivational quotes
  ],
  funny: [
    "I'm writing a book. I've got the page numbers done. - Steven Wright",
    "I'm on a seafood diet. I see food, and I eat it. - Anonymous",
    'I told my wife she was drawing her eyebrows too high. She seemed surprised. - Anonymous',
    'I used to play piano by ear, but now I use my hands. - Anonymous',
    "Why don't scientists trust atoms? Because they make up everything. - Anonymous",
    'The early bird might get the worm, but the second mouse gets the cheese. - Anonymous',
    "I'm reading a book on anti-gravity. It's impossible to put down. - Anonymous",
    // ... more funny quotes
  ],
  life: [
    'Life is really simple, but we insist on making it complicated. - Confucius',
    "Life is short, and it's up to you to make it sweet. - Sarah Louise Delany",
    'Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll',
    'The purpose of our lives is to be happy. - Dalai Lama',
    "Life isn't about finding yourself. It's about creating yourself. - George Bernard Shaw",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    'Life is really simple, but we insist on making it complicated. - Confucius',
    // ... more life quotes
  ],
};

// Route to get a random quote from a specific category
app.get('/api/quote/:category', (req, res) => {
  const { category } = req.params;
  if (categories.includes(category)) {
    const randomIndex = Math.floor(Math.random() * quotes[category].length);
    const randomQuote = quotes[category][randomIndex];
    res.json({ quote: randomQuote });
  } else {
    res.status(400).json({ error: 'Invalid category' });
  }
});

// Route to add a user-submitted quote
app.post('/api/quote', (req, res) => {
  const { category, quote } = req.body;
  if (category && quote) {
    if (!quotes.hasOwnProperty(category)) {
      quotes[category] = [];
    }
    quotes[category].push(quote);
    res.status(201).json({ message: 'Quote added successfully' });
  } else {
    res.status(400).json({ error: 'Invalid request' });
  }
});

// External API integration: Chuck Norris jokes
app.get('/api/chuck-norris-joke', async (req, res) => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    const joke = data.value;
    res.json({ joke });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

// Error handling middleware
app.use((req, res) => {
  res.status(404).send('<h1>API not found</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
