const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    const num = Math.ceil(Math.random()*100);
    const reply = { value: num};
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(reply));    
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('The numbers API listens on ', port))