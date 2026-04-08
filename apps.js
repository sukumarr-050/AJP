const express = require('express');
const app = express();
app.use(express.json());
let a=10;
let b=30;

app.get('/home',(req,res)=>{
    res.json("THIS IS HOME PAGE add /Operation to the Address");
});

app.get('/home/add', (req, res) => {
    res.json({ result: a + b });
});

app.get('/home/sub', (req, res) => {
    res.json({ result: a - b });
});

app.get('/home/multi', (req, res) => {
    res.json({ result: a * b });
});

app.get('/home/div', (req, res) => {
    res.json({ result: a / b });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Running on Chrome as...https://localhos:3000");
});