const Fuzzy = require(`${__dirname}/Fuzzy.js`);
const posCP = [-35,-30,-5,0,5,30,35];
const veloCP = [-500,-200,-50,0,50,200,500];
const PWMVal = [255,255,255,255,200,100,0,-100,-200,-255,-255,-255,-255];
const FuzzyRules = [
    [PWMVal[0],PWMVal[1],PWMVal[2],PWMVal[3],PWMVal[4],PWMVal[5],PWMVal[6]],
    [PWMVal[1],PWMVal[2],PWMVal[3],PWMVal[4],PWMVal[5],PWMVal[6],PWMVal[7]],
    [PWMVal[2],PWMVal[3],PWMVal[4],PWMVal[5],PWMVal[6],PWMVal[7],PWMVal[8]],
    [PWMVal[3],PWMVal[4],PWMVal[5],PWMVal[6],PWMVal[7],PWMVal[8],PWMVal[9]],
    [PWMVal[4],PWMVal[5],PWMVal[6],PWMVal[7],PWMVal[8],PWMVal[9],PWMVal[10]],
    [PWMVal[5],PWMVal[6],PWMVal[7],PWMVal[8],PWMVal[9],PWMVal[10],PWMVal[11]],
    [PWMVal[6],PWMVal[7],PWMVal[8],PWMVal[9],PWMVal[10],PWMVal[11],PWMVal[12]]
]

const Fuzzy1 = new Fuzzy(posCP,1,veloCP,10, FuzzyRules);

console.log(Fuzzy1.Result(0,100));