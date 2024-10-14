// console.log("welcome to JS");
// var a=12;
// console.log(a);
// if(a>10)
// {
//     let b=23; //work in scope
//     a=40
//     console.log("a inside condition:"+a);
// }
// console.log("b outside condition"+b);
// let a=12;
// let b="12";
// console.log(typeof b);
// let today=Date();
// console.log(today);
// if(a==b)    //works on value
// {
//     console.log("Welcome");
// }
// else{
//     console.log("Hello");
// }
// if(a===b)
// {
//     console.log("welcome");
// }
// else{
//     console.log("Hello");
// }
// let myname="Amit";
// let college="ABES";
// let result=`Hi,my name is ${myname} and I m in ${college}`;
// console.log(result);

//objects is JS
// let key="sname";
// const students=[{
//     sname:"Amit",
//     course:"Btech",
//     college:"ABES EC"
// },
// {
//     sname:"Smit",
//     course:"BCA",
//     college:"ABES EC"
// }





// ]
// console.log(students[1].sname+students[1].college);
// console.log(students);
// console.log("Name:"+students.sname+"  course:"+students.course);
// const {sname}=students;
// console.log(sname);
// students[key]="A";
// console.log(students);



//function
// function greeting(msg="Welcome"){
//     console.log("Good morning"+msg);
// }
// greeting("Greetings");

// function sum(a,b,c=23){
//     return a+b+c;
// }
// let data=sum(12,20);
// console.log(data);



// function cCompiler(){
//     return "C";

// }
// function javaCompiler(){
//     return "Java";

// }
// function selectLanguage(language)
// {
//     let data;
//     if(language=="c"){
//     function cCompiler(){
//         return "C Compiler";
    
//     }
//     data=cCompiler();
// }
//     if(language=="java"){
//     function javaCompiler(){
//         return "Java compiler";
    
//     }
//     data=javaCompiler();
// }
// return data;


// }
// let result=selectLanguage("c");
// console.log(result);
console.log("Hello World");
let parent=document.getElementsByClassName("parent");
console.log(parent);
parent[0].innerText="Data has changed"

