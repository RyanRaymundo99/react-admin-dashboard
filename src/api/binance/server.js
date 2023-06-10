const express = require('express');
const port = 3001;

const app = express();

const cors = require('cors');
app.use(cors());

const axios = require('axios');
app.get('/klines', async (req, res, next) => {
    const {symbol, interval} = req.query;
    if(!symbol || !interval) return res.status(422).send('Symbol and interval are required.')

    try{
        const response = await axios.get(`https://brapi.dev/api/quote/${symbol}%2C%5EBVSP?range=1d&interval=${interval}&fundamental=false&dividends=false`);
        res.json(response.data);          
    }
    catch(err){
        res.status(500).json(err.response ? err.response.data : err.message);
    }
})

app.listen(port);
console.log('Server listening...');