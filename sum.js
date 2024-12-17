const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json())
app.use(cors())

app.get('/sum',(req,res)=>
{
    const number1 = req.query.number1;
    const number2 = req.query.number2;
    if(number1 && number2)
    {
        const ans = parseInt(number1) +  parseInt(number2)
        res.status(200).send(`sum:${ans}`);
    }
    else{
        res.status(400).send('Something went Wrong:')
    }})

const port = 3000;
app.listen(port,()=>
{
    console.log(`listening on port ${port}`)
})
