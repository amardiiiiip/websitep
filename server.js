// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Initialize visitor count
let visitorCount = 0;

// Load the current visitor count from a file if it exists
if (fs.existsSync('visitorCount.json')) {
    const data = fs.readFileSync('visitorCount.json');
    visitorCount = JSON.parse(data).count;
}

// Endpoint to increment visitor count
app.get('/api/visit', (req, res) => {
    visitorCount++;
    fs.writeFileSync('visitorCount.json', JSON.stringify({ count: visitorCount }));
    res.json({ count: visitorCount });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});