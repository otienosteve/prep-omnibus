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


// nameerr=document.getElementById("leneerr");
// emailerr=document.getElementById('emailerr');
// txterr=document.getElementById('txterr');
// numerr=document.getElementById('numerr');

// document.getElementById("myForm").addEventListener("submit", (evt)=>{
//     var email= document.getElementById("email").value;

//     var uname=document.getElementById("name").value;

//     var textA=document.getElementById("txt").value;
//     if(uname.length<4){
//     c(uname.length)
//     evt.preventDefault();
//     nameerr.textContent="your name should be at least 4 characters"
//     }
//     if(uname.match(/[0-9]/g)!==null){
//     evt.preventDefault();
//     numerr.textContent="your name should Not  contain Numbers"
//     }
//     if(!email.includes('@')){
//         evt.preventDefault();
//         emailerr.textContent="Enter A valid email"
//     }
//     if(textA.split(' ').length<=10){
//         evt.preventDefault()
        
//         txterr.textContent="You should include more than 10 words in your comment";
//     }



// })
// document.getElementById("toggle").addEventListener("click",()=>{
//     if(document.getElementById("back").style.backgroundColor==="black"){
//         document.getElementById("back").style.backgroundColor="white"
//     }else{
//         document.getElementById("back").style.backgroundColor="black"
//     }
// })


//literal notation
//function constructor
//class 

// let obj1={ name:"omniBus",
//  purpose:function(){
//     c(this.name+" we are catching up"); 
// },
// time:"was 2 hours",
// number:65
// }
// c(obj1.purpose());


// function obj(name, age, designation){
//     this.name=name;
//     this.age=age;
//     this.designation=designation;
// }

// let person= new obj("steve", "seventy-Five",{des1:"Technical Mentor", des2:"A dad"});
// c(person.age);
// obj.prototype.describe= function(){
//     c(this.age+ " "+this.name+" "+this.designation.des2)
// }
// c(person.describe())

class obj{

    constructor(name, age, description){
        this.age=age;
        this.name=name;
        this.description=description;
    }
   description(){
        c(this.age+ " "+this.name+" "+this.description) 
    }
}

let person= new obj("Beatrice",60,"Student");
c(person.description)


