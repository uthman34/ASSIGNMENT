const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const users = [];

// Middlewares
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// 1. GET Route to show the page
app.get('/signup', (req, res) => {
    res.render('signup'); 
});

// 2. POST Route to handle the form submission
// IMPORTANT: Make sure your <form action="/register" ...> matches this path!
app.post('/register', (req, res) => {
    const user = req.body;
    users.push(user);
    console.log("Current Users:", users);
    
    // Instead of just sending text, let's redirect to a success page or login
    res.send('Registration successful! Check your terminal to see the user list.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

