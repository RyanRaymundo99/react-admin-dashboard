import axios from "axios";
import Candle from "./candle";

export async function getCancles(symbol = 'IBOV', interval = '1d'){
    const response = await axios.get(`https://brapi.dev/api/quote/${symbol.toUpperCase}%2C%5EBVSP?range=1d&interval=${interval}&fundamental=false&dividends=false`);
    const candles = response.data.map( k => {
        return new Candle(k[0], k[1], k[2], k[3], k[4]);
    })
    return candles;
}