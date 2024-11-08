const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint 1: Return a welcome message on hitting '/'
app.get('/', (req, res) => {
    res.send('Hi, I am on the main page.');
});

// Endpoint 2: Accept name, email, and password, and return name and email
app.post('/get-details', (req, res) => {
    const { name, email, password } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Please provide name, email, and password.' });
    }

    // Respond with name and email
    res.json({ name, email });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
