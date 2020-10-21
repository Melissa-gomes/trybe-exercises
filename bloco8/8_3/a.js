    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
 arrays.reduce((acumulador, objeto) => {
    const a = acumulador.push(objeto);
    console.log(a)
  }, [])
}


console.log(flatten())

//assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);