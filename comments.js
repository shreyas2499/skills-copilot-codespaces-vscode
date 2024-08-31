// Create web server with express
// Create route for POST /comments
// Add middleware to parse JSON request body
// Add middleware to log request information
// Add middleware to authenticate user
// Add middleware to validate request body
// Add middleware to store comment in database
// Add middleware to send response
// Add middleware to handle errors
// Start web server

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.post('/comments', (req, res, next) => {
    const { user, comment } = req.body;
    if (!user || !comment) {
        return res.status(400).json({ error: 'user and comment are required' });
    }
    if (typeof user !== 'string' || typeof comment !== 'string') {
        return res.status(400).json({ error: 'user and comment must be strings' });
    }
    if (comment.length > 500) {
        return res.status(400).json({ error: 'comment cannot exceed 500 characters' });
    }
    next();
});

app.post('/comments', (req, res, next) => {
    const { user, comment } = req.body;
    const commentId = comments.length + 1;
    comments.push({ id: commentId, user, comment });
    res.status(201).json({ id: commentId, user, comment });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});