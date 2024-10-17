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
// console.log("Hello World");
// // let parent=document.getElementsByClassName("parent");
// // console.log(parent);
// // parent[0].innerText="Data has changed"
// const div=document.getElementsByClassName("parent");
// console.log(div);
// // div[0].innerHTML="<h2 style=color:red>Hello Js</h2>";
// const h1=document.createElement("h1");
// console.log(h1);
// h1.innerText="ABES";
// console.log(h1);
// h1.style.backgroundColor="cyan";

// h1.style.padding="20px";
// h1.style.marginLeft="300px";
// // to add element with dom tree
// div[0].appendChild(h1);
// const img=document.createElement("img");
// img.src="./img4.jpg";
// console.log(img);
// img.setAttribute("height","250px");
// img.setAttribute("width","300px");
// div[0].appendChild(img);
// div[0].removeChild(img);


// function getData(){
//     console.log("Hi,inside getData function");
//     div[0].innerHTML="<h2  style=color:red>Hi,Event Handled</h2>";
// }
// const button=document.getElementsByClassName("btn");
// console.log(button);
// button[0].addEventListener("click",getData);


// const promise=new Promise((resolve,reject)=>{
//     let a=12;
//     if(a>10){
//         resolve("Accepted");
//     }
//     else{
//         reject("Not Accepted");
//     }
// })

// promise.then((msg)=>{console.log(msg)})
// .catch((error)=>{console.log(error)})
// .finally(()=>console.log("All resourses have closed"));


// const promise2=new Promise((resolve,reject)=>{
//     resolve({name:"Prince",Stack:"MERN Stack"});

// });
// promise2.then((data)=>{console.log("Hi"+data.name)})
// .catch(x=>{console.log(x)})




const response=fetch("https://dummyjson.com/products");
response.then((data)=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(res);
    })
})





