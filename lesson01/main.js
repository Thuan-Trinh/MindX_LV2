import { calcPerSquare, calcAreaSquare } from "./utils.js";
import calcCerSquare from "./utils.js";

let edge = 10;
let resultPer = calcPerSquare(edge);
let resultArea = calcAreaSquare(edge);
let resultCer = calcCerSquare(edge);

console.log(resultPer, resultArea, resultCer);


const arrNumber = [1, 2 ,3 ,4 ,5];
const arr = [...arrNumber];
console.log(arr);

const  student = {
    name: 'Thuan',
    eat: 'vegetable'
}

const listStudent = {...student};
console.log(listStudent);