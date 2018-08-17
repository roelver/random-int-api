const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const num = Math.ceil(Math.random()*1000);
    const reply = { value: num};
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(reply));    
});
const port = process.env.port || 3000;
app.listen(port, () => console.log('The numbers API listens on ', port))