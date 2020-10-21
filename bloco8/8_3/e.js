    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((acumulador, objeto) => {
   return acumulador + objeto.match(/a/gi).length
  }, 0)
}
assert.deepEqual(containsA(), 20);