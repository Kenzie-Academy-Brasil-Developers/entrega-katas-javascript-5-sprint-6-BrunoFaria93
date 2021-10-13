// implemente aqui as funções de teste

function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testeReverseString2() {
    let result = reverseString(123);
    let expected = 'string';
    console.assert(typeof result === expected, `esperado: string, obtido: ${typeof result}`)
 }

 function reverseString(frase){
    let result = ''
    for(let i = frase.length - 1; i >= 0; i --){
        result += frase[i]
    }
    return result
 }


function testReverseSentence1(){
    let result = reverseSentence('bob likes dogs')
    let expected = "dogs likes bob"

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

function testReverseSentence2(){
    let result = reverseString(123);
    let expected = 'string';
    console.assert(typeof result === expected, `esperado: string, obtido: ${typeof result}`)
}
function reverseSentence(frase){
    let array = frase.split(' ')
    let result = []
    for(let i = array.length - 1; i >= 0; i --){
        result.push(array[i])
    }
    return result.join(' ')
}


function testMinimumValue1(){
    let array = [2, 5, 7, 1, 9]
    let result = minimumValue(array);
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testMinimumValue2(){
    let result = minimumValue('123');
    let expected = 'number';

    console.assert(typeof result === expected, `esperado: number, obtido: ${typeof result}`)
}

function minimumValue(array){
    let menor = array[0]
    for(let i = 0; i < array.length; i ++){
        if(menor > array[i]){
            menor = array[i]
        }
    }
    return menor
}

function testMaximumValue1(){
    let array = [2, 5, 7, 1, 9]
    let result = maximumValue(array);
    let expected = 9
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testMaximumValue2(){
    let result = maximumValue('123');
    let expected = 'number';

    console.assert(typeof result === expected, `esperado: number, obtido: ${typeof result}`)
}

function maximumValue(array){
    let maior = array[0]
    for(let i = 0; i < array.length; i ++){
        if(maior < array[i]){
            maior = array[i]
        }
    }
    return maior
}

function testCalculateRemainder1(){
    let result = calculateRemainder(5, 2);
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testCalculateRemainder2(){
    let result = calculateRemainder('5');
    let expected = 'number';

    console.assert(typeof result === expected, `esperado: number, obtido: ${typeof result}`)
}

function calculateRemainder(num1, num2){
    return num1 % num2
}

function testDistinctValues1(){
    let array = [1, 3, 5, 3, 7, 3, 1, 1, 5]
    let result = distinctValues(array);
    let expected = '1, 3, 5, 7'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testDistinctValues2(){
    let result = distinctValues('5');
    let expected = 'number';

    console.assert(typeof result === expected, `esperado: number, obtido: ${typeof result}`)
}

function distinctValues(array){
    let result = []
    for(let i = 0; i < array.length; i ++){
        if(!result.includes(array[i])){
            result.push(array[i])
        }
    }
    return result.join(', ')
}

function testCountValues1(){
    let array = [1, 3, 5, 3, 7, 3, 1, 1, 5]
    let result = countValues(array);
    let expected = "1(3), 3(3), 5(2), 7(1)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testCountValues2(){
    let result = countValues(5);
    let expected = 'string';

    console.assert(typeof result === expected, `esperado: string, obtido: ${typeof result}`)
}

function countValues(array){
    let result = []
    for(let i = 0; i < array.length; i ++){
        if(!result.includes(array[i])){
            result.push(array[i])
        }
    }
    let cont = 0
    let newArr = []
    for(let i = 0; i < result.length; i ++){
        for(let j = 0; j < array.length; j ++){
            if(result[i] === array[j]){
                cont ++
            }
        }
        newArr.push(result[i] + '('+cont+')')
        cont = 0
    }
    return newArr.join(', ')
}


function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14})
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testEvaluateExpression2(){
    let result = evaluateExpression('5');
    let expected = 'number';

    console.assert(typeof result === expected, `esperado: number, obtido: ${typeof result}`)
}

function evaluateExpression(str, obj){
    return obj.a + obj.b + obj.c - obj.d
}
