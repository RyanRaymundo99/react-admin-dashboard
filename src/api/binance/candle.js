export default class Candle {
    constructor(openTime, open, high, low, close){
        this.x = new Date(openTime);
        this.y = [open, high, low, close]
    }
}