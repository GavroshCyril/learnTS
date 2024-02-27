const number: number = 123;
const string: string = '123';
const boolean: boolean = true;

const numberArray: number[] = [1, 2, 3];
const genereticArray: Array<number> = [1, 2, 3]; // gereric type
const stringArray: string[] = ['1', '2', '3'];

console.log('genereticArray: ', genereticArray);


// Tuples
const tuple: [string, number] = ['1', 1];
let x: [boolean, string]
x = [true, 'hhhh1']
x[0] = false