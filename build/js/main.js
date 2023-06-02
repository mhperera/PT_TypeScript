"use strict";
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// COMMANDS
// npm install typescript -g // INSTALL TS GLOBALLY
// tsc main.ts main.js -w // EXECUTE TS
// tsc src/main.ts build/js/main.js -w // EXECUTE TS
// tsc --init // SETUP CONFIG FILE , SET ROOTDIR AND OUTDIR
// tsc -w // IF THE CONFIG FILE IS SET UP
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// let a = 10
// let b = '25'
// let c = true
// console.log(a/b) // ERROR
// console.log(a/c) // ERROR
// console.log(a+b); //  1025
// console.log(a+c); // ERROR
// ********************************************************************************
// let a:  number = 10;
// let b:  string = '25'
// let c:  boolean = true
// console.log(a+b); // 1025
// console.log(a+c); // ERROR
// console.log(b+c); // 25true
// console.log(a/b); // ERROR
// console.log(b/c); // ERROR
// console.log(a/c); // ERROR
// ********************************************************************************
// let a = "manasha"
// a=42 // ERROR
// let a:string = "manasha"
// a=42 // ERROR
// ********************************************************************************
// let myName: string;
// let age: number;
// let isLoading: boolean;
// let album: any;
// myName = 'Manasha'; // OK
// myName = 50         // ERROR
// age = 40;           // OK
// age = '40'          // ERROR
// isLoading = true    // OK
// isLoading = 1       // ERROR
// isLoading = 0       // ERROR
// album = 50          // OK
// album = 'Tom Cat'   // OK
// album = false       // OK
// ********************************************************************************
// let isLoading: number | boolean
// isLoading = true
// isLoading = false
// isLoading = 1
// isLoading = 0
// ********************************************************************************
// a dnd b are any typed
// const sum  = (a, b) => {
//     return a + b;
// }
// returns number for sure
// const sum  = (a:number, b:number) => {
//     return a + b;
// }
// returns string for sure
// const sum  = (a:string, b:number) => {
//     return a + b;
// }
// a dnd b are any typed , return number
// const multiply  = (a, b) => {
//     return a * b;
// }
// ********************************************************************************
// let reg1 = /\w+\g
// let reg2:RegExp = /\w+\g
// ********************************************************************************
