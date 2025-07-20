const express = require('express');
const app = express();
const port = 3000;
app.get('/info/:userId', (req, res) => {
    console.log('🔗 Full URL path:', req.url);            // logs full request path
    console.log('📨 Method:', req.method);                // logs GET
    console.log('📦 Route Params:', req.params);          // e.g., { userId: '5' }
    console.log('❓ Query Params:', req.query);            // e.g., { admin: 'true' }


    res.send('Check console');
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

