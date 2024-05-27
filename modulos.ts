import {Persona} from './persona';

let persona1 = new Persona("Juan");

console.log(persona1.nombre);


// otro tipo de curso de para TypeScript mas actualizado
// https://www.youtube.com/watch?v=e45Yhgh4INc&list=PL_9MDdjVuFjHvzMp_hka8je82Jo8YJ4d_&index=3

// inferencia de tipos

let myVariable;
let myVariable1:string;
let myVariable2: boolean = true;

// composicion de tipos
// unions

let myVariable3: string | number | null ;
// unions types 
myVariable3 = "texto";

let myTypeString: string = 'Hello world';
let myTypeNumber: number = 33;
let myTypeBoolean: boolean = false;

// Array

let arrNumber : number[] = [1,2,3];

// let arrNumber2 : Array<number> = [1,2,3];

let arrStrings : string[] = ["uno","dos", "tres"];

let arrAny : any[]= ['hola', 33, true,'res'];

//Tuple

let tuplePlayers: [string, number, boolean]= ['jaja', 2 , true];

// Tuple Array

let players: [number, string][];

players = [
    [1,'lebron'],
    [2,'dulin'],
    [3,'lebr']
];


// ENUMS