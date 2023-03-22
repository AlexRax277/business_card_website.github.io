const symbols = '0123456789';

export default class Matrix{
    constructor(x, fontSize, canvasHeight, context) {
        this.x = x;
        this.y = 0;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.context = context;
    }

    symbolMotion() {
        if(this.y === 0 && Math.random() < 0.95) {
            return;
        }

        const symbolIndex = Math.floor(Math.random() * symbols.length)
        const currentSymbol = symbols[symbolIndex];

        this.context.fillText(currentSymbol, this.x, this.y);
        this.y += this.fontSize;

        if(this.y > this.canvasHeight) {
            this.y = 0;
        } else {
            this.y += this.fontSize;
        }
    }
};
