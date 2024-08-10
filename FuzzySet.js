class FuzzySet {
    #pos;
    #a1;
    #a2;
    #d1;
    #d2
    constructor(position, a1, a2, d1, d2) {
        this.#pos = position;
        this.#a1 = a1;
        this.#a2 = a2;
        this.#d1 = d1;
        this.#d2 = d2;
    }
    get pos() {
        return this.#pos;
    }
    membership(val) {
        if(val < this.#a1) return 0;
        if(val >= this.#d2) return 0;
        if(val >= this.#a2 && val < this.#d1) return 1;
        if(val >= this.#a1 && val < this.#a2) return (val-this.#a1)/(this.#a2-this.#a1);
        if(val >= this.#d1 && val < this.#d2) return 1 - (val - this.#d1)/(this.#d2 - this.#d1);
    }
}

module.exports = FuzzySet;