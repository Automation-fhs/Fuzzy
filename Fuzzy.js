const FuzzySet = require(`${__dirname}/FuzzySet.js`);
const Position = [];
const Velo = [];

// Position[0] = new FuzzySet(-3,-35,-35,-35,-30);
// Position[1] = new FuzzySet(-2,-35,-31,-29,-15);
// Position[2] = new FuzzySet(-1,-30,-15,-15,0);
// Position[3] = new FuzzySet(0,-15,-1,1,15);
// Position[4] = new FuzzySet(1,0,15,15,30);
// Position[5] = new FuzzySet(2,15,29,31,35);
// Position[6] = new FuzzySet(3,30,35,35,35);

// Velo[0] = new FuzzySet(-3,-500,-500,-500,-200);
// Velo[1] = new FuzzySet(-2,-500,-200,-200,-50);
// Velo[2] = new FuzzySet(-1,-200,-50,-50,0);
// Velo[3] = new FuzzySet(0,-50,-10,10,50);
// Velo[4] = new FuzzySet(1,0,50,50,200);
// Velo[5] = new FuzzySet(2,50,200,200,500);
// Velo[6] = new FuzzySet(3,30,35,35,35);

class Fuzzy {
    #posCP = [];
    #veloCP = [];
    #posErr;
    #veloErr;
    Position = [];
    Velo = [];
    #FuzzyRules = [];

    constructor(posCP,posErr, veloCP, veloErr, FuzzyRules){
        this.#posCP = posCP;
        this.#veloCP = veloCP;
        this.#posErr = posErr;
        this.#veloErr = veloErr;
        this.#FuzzyRules = FuzzyRules;
        Position[0] = new FuzzySet(-3,this.#posCP[0],this.#posCP[0],this.#posCP[0],this.#posCP[1]);
        Position[1] = new FuzzySet(-2,this.#posCP[0],this.#posCP[1]-this.#posErr,this.#posCP[1]+this.#posErr,this.#posCP[2]);
        Position[2] = new FuzzySet(-1,this.#posCP[1],this.#posCP[2],this.#posCP[2],this.#posCP[3]);
        Position[3] = new FuzzySet(0,this.#posCP[2],this.#posCP[3]-this.#posErr,this.#posCP[3]+this.#posErr,this.#posCP[4]);
        Position[4] = new FuzzySet(1,this.#posCP[3],this.#posCP[4],this.#posCP[4],this.#posCP[5]);
        Position[5] = new FuzzySet(2,this.#posCP[4],this.#posCP[5]-this.#posErr,this.#posCP[5]+this.#posErr,this.#posCP[6]);
        Position[6] = new FuzzySet(3,this.#posCP[5],this.#posCP[6],this.#posCP[6],this.#posCP[6]);

        Velo[0] = new FuzzySet(-3,this.#veloCP[0],this.#veloCP[0],this.#veloCP[0],this.#veloCP[1]);
        Velo[1] = new FuzzySet(-2,this.#veloCP[0],this.#veloCP[1],this.#veloCP[1],this.#veloCP[2]);
        Velo[2] = new FuzzySet(-1,this.#veloCP[1],this.#veloCP[2],this.#veloCP[2],this.#veloCP[3]);
        Velo[3] = new FuzzySet(0,this.#veloCP[2],this.#veloCP[3]-this.#veloErr,this.#veloCP[3]+this.#veloErr,this.#veloCP[4]);
        Velo[4] = new FuzzySet(1,this.#veloCP[3],this.#veloCP[4],this.#veloCP[4],this.#veloCP[5]);
        Velo[5] = new FuzzySet(2,this.#veloCP[4],this.#veloCP[5],this.#veloCP[5],this.#veloCP[6]);
        Velo[6] = new FuzzySet(3,this.#veloCP[5],this.#veloCP[6],this.#veloCP[6],this.#veloCP[6]);
    }
    
    Result(posVal, veloVal) {
        let sumVal = 0;
        let sumMem = 0;
        for(let i = 0; i < this.#posCP.length; i++) {
            for(let j = 0; j < this.#veloCP.length; j++) {
                sumVal += this.#FuzzyRules[i][j]*Math.min(Position[i].membership(posVal),Velo[j].membership(veloVal));
                //console.log(`Value at pos ${i} vel ${j} is ${Math.min(Position[i].membership(posVal),Velo[j].membership(veloVal))}`);
                sumMem += Math.min(Position[i].membership(posVal),Velo[j].membership(veloVal));
            }
        }
        return sumVal/sumMem;
    } 
}

module.exports = Fuzzy;