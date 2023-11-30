let symbols = 'ᚕ ᚖ ᚠ ᚡ ᚢ ᚣ ᚤ ᚥ ᚦ ᚧ ᚨ ᚩ ᚪ ᚫ ᚬ ᚭ ᚮ ᚯ ᚰ ᚱ ᚲ ᚳ ᚴ ᚵ ᚶ ᚷ ᚸ ᚹ ᚺ ᚻ ᚼ ᚽ ᚾ ᚿ ᛁ ᛃ ᛄ ᛅ ᛆ ᛇ ᛈ ᛉ ᛊ ᛋ ᛏ ᛑ ᛒ ᛓ ᛔ ᛕ ᛖ ᛗ ᛘ ᛚ ᛛ ᛜ ᛝ ᛞ ᛟ ᛠ ᛡ ᛢ ᛣ ᛤ ᛥ ᛦ ᛩ ᛪ ᛮ ᛯ ᛰ';
symbols = symbols.replace(/ /g,'');

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
