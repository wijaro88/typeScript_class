"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
let persona1 = new persona_1.Persona("Juan");
console.log(persona1.nombre);
// otro tipo de curso de para TypeScript mas actualizado
// https://www.youtube.com/watch?v=e45Yhgh4INc&list=PL_9MDdjVuFjHvzMp_hka8je82Jo8YJ4d_&index=3
// inferencia de tipos
let myVariable;
let myVariable1;
let myVariable2 = true;
// composicion de tipos
// unions
let myVariable3;
// unions types 
myVariable3 = "texto";
let myTypeString = 'Hello world';
let myTypeNumber = 33;
let myTypeBoolean = false;
// Array
let arrNumber = [1, 2, 3];
// let arrNumber2 : Array<number> = [1,2,3];
let arrStrings = ["uno", "dos", "tres"];
let arrAny = ['hola', 33, true, 'res'];
//Tuple
let tuplePlayers = ['jaja', 2, true];
// Tuple Array
let players;
players = [
    [1, 'lebron'],
    [2, 'dulin'],
    [3, 'lebr']
];
// ENUMS
