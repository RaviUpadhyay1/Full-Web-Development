const express = require('express')
const app = express()
const port = 3000

// Middleware

app.use(express.urlencoded({ extended: true }))
// Middleware to parse form data (from POST forms).
// extended: true allows parsing nested objects.

app.use(express.static('public'))
// Serves static files (like CSS, images) from the public folder.

app.set('view engine', 'ejs')
// Sets EJS as the view/template engine so we can render .ejs files.




const guestbookEntries = [];
// Stores guest entries in memory (resets when server restarts).


// Home page
app.get('/', (req, res) => {
    res.render('index')
})
// Route for the home page (GET /)
// Renders the views/index.ejs form.


// POST form submission
// Guests page - show all entries
app.post('/sign', (req, res, next) => {
    const { name, message } = req.body
    // Handles form submissions from /sign
    // Destructures name and message from form data.


    if (!name || !message) {
        const err = new Error('Name and message are required!');
        err.status = 400;
        return next(err);
        // If name or message is missing, sends an error to the error handler.
    }
    guestbookEntries.push({ name, message });
    res.redirect('/guests');
    // Adds the entry to the array and redirects to the guest list page.
})

// Guest Page
app.get('/guests', (req, res) => {
    res.render('guests', { entries: guestbookEntries })
})
// Shows the guestbook entries by rendering guests.ejs
// Passes guestbookEntries to the template as entries.


// 404 handler
app.use((req, res) => {
    res.status(404).send('404 Not Found - Sorry Page doesnot exit!')
})
// Middleware to handle unmatched routes (404).




// Error handler middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(`<h1>Error ${err.status || 500}</h1><p>${err.message}</p>`)
})
// Centralized error handler.
// Sends a custom error message with the status code.

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
// Starts the Express server on localhost:3000