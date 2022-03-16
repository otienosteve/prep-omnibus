// data types
//variables
//control structures
//functions
//opaerators
//object
//the DOM

// null
//undefined
// number
//string
//object
//boolean
c=console.log
// let num1=120
// var fname="Steve"
// let bool=true
// c(!bool);
// c(typeof undefined);
// c(typeof  null);
// // + - / * % > < && ||
// var1=value ==  ==== !== !=
// if ("2"===2){
//     c("equal")
// }else{
//     c("not equal")
// }

//sequential
//decison
//loop
// if(){

// if(){

// }
// }else{

// }
// for(var i=0; i<=10; i++){
//     c(i)
// }

// 2<3?c("great"):c("Not greater")
// conidtion?value if true:value if false
// lo0p variable
// var counter=4 
// while(counter<=10){
//     c(counter);
//     if(counter===7){
//         break;
//     }
//     counter+=1
// }
// do {

//     c(counter)

//     counter++

// }while(counter>10)
// function func(name){
// c(name);
// }
// func("omniBus");
// func("corona is gone");
// let arrow=(val)=>{
// c(val)
// }
// arrow("Okay we are in arrow");
/*
//syntax for defining a function
function <name>(arg1, arg2, arg3,argN){


    return value
}
()=>{}
()=>
    =>
*/
var email= document.getElementById("email").value;
c(email)
var uname=document.getElementById("name").value;
c(uname)
var textA=document.getElementById("txt").value;
c(textA)
nameerr=document.getElementById("nameerr");

document.getElementById("myForm").addEventListener("submit", (evt)=>{
if(uname.length<8){
    evt.preventDefault();
nameerr.textContent="your name should be more than 3 characters"
}
if(/^[0-9]*$/.test(uname)){
    evt.preventDefault();
nameerr.textContent="your name should Not  contain Numbers"
}



})