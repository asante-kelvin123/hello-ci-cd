// app.js
const express = require('express');
const { styleText } = require('util');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000

app.get('/', (req,res) =>{
    res.send();
})

styleText 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})


