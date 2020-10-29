const {sum: sum, 
  myRemove: myRemove,
  myRemoveWithoutCopy: myRemoveWithoutCopy,
  myFizzBuzz:myFizzBuzz}= require('./ex1');

describe('testando os requisitos do exercicio 1', () => {
  test('verifique se sum corresponde ao testes do requisito 1', () => {
  expect(sum(4,5)).toEqual(9);
});
  test('verifique se sum corresponde ao testes do requisito 2', () => {
  expect(sum(0,0)).toEqual(0);
});
  test('verifique se sum corresponde ao testes do requisito 3', () => {
   expect(() => {sum(4, '5')}).toThrow();
});
test('verifique se sum corresponde ao testes do requisito 4', () => {
   expect(()=>{ sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
});
});
  
describe('testando os requisitos do exercicio 2', () => {
  test('requisito 1', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('requisito 2', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain([1, 2, 3, 4]);
  });
  // perguntar sobre o requisito 3
  test('requisito 3', () => {
    const array = [1, 2, 3, 4];
    const array2 = [1, 2, 3, 4];
    myRemove(array, 3)
    expect(array).toEqual(array2)
  });
  test('requisito 4', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

describe('testando os requisitos do exercicio 3', () => {
  test('requisito 1', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('requisito 2', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  // perguntar sobre o requisito 3
  test('requisito 4', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

describe('testando os requisitos do exercicio 4', () => {
  test('requisito 1', () => {
    expect(myFizzBuzz(30)).toEqual('fizzbuzz');
  });
  test('requisito 2', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });
test('requisito 3', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });
  // rever o requsito 4
  test('requisito 5', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  });
  test('requisito 5', () => {
    expect(myFizzBuzz('xablau')).toEqual(false);
  });
})