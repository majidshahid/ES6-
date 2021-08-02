// 1 let cannot be Redeclared. let must be Declared before use. let have Block Scope.

// let one = "majid ";
// console.log(one) 


// 2 const cannot be Redeclared. const cannot be Reassigned. with const have Block Scope.

// const con = "majid";
// console.log(con)

// 3// template srting 


// var a = prompt("enter your name ");
// var templateString = `youe name is ${a}`;
// console.log(templateString)
//  var ul = document.getElementById("ul");
//  var a = `<li>my name is majid shahid</li>`;
//  var b = document.createTextNode(a);
//  ul.appendChild(b);

// 4 destructuring 
//     //    destructuring fo object
// var one = {
//     name :"majid",
//     email:"majidshahid474@gmail.com",

// }
// let {name,email}=one;
// console.log(name,email)
//     //    destructuring fo array

//     var arr= ["majid","umar","bilal"];
//     let [a,b,c]=arr;
//     console.log(a,b,c)


//  5 default rest spread

//    default 

//     function foo(a,b=1){
// return a*b
//     }
//     console.log(foo(2,4))
//    result is 8

// function foo(a,b=1){
// return a*b
//     }
//     console.log(foo(7));
//     //  result is 7

//    rest

//  ?????

// spread

//  var a ={
//      name:"majid",
//      roll:"12345",

//  }
//  var b = {
//      ...a,
//      id:"md1",
//      password:"123"
//  }
// //  var c = {...a,...b};
//  console.log(b)


// 6 arrow function   

// let foo =(a,b)=>{
//     return a*b
// }
// console.log(foo(4,3))



// let foo=()=>{
//     return()=>{
//         var a = "majid shahid";
//         return a 
//     }
// }
// console.log(foo()())

// let foo=(one)=>{
//     return(two)=>{
//         return one*two 
//     }
// }
// console.log(foo(3)(5))

//    7 promise

// var a = new Promise(function(resolve,reject){
//     var a = "available";
//     if (a==="available"){
//         resolve("ok")
//     }else{
//         reject("not")
//     }
// })
// a.then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })

// var a = new Promise((resolve,reject)=>{
// var name = "majid";
// if(name == "majid"){
//     resolve('ok')
// }else{
//     reject("not ok")
// }
// })
// a.then ((resolve)=>{
//     console.log(resolve)
// })
// a.catch((reject)=>{
//     console.log(reject)
// })

//  let promise = new promise((resolve,reject){


//  })
// var a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         var name = "maid";
//         if (name == "majid") {
//             resolve("ok majid is found ")
//         } else {
//             reject("error aa raha hai bhai")
//         }
//     },2000)
// })
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((reject)=>{
//     console.log(reject)
// })



//  8 Map

// const number = [2,3,4,5,6];
// console.log(number.map(Math.round))






// const number = [2,3,4,5,6];

// console.log(number.map(foo))
//  function foo(num){
//      return num*2
//  }


// var mamber = [
//     {
//        fname :"majid",
//        lname :"shahid",

// },
// {
//     fname:"umar",
//     lname :"zahid",
// },
// {
//     fname :"bilal",
//     lname :"zahid",

// }
// ]

// console.log(mamber.map(foo));
// function foo(item ){
//     return [item.fname,item.lname].join("")
// }


// 9 class


// class car {
//     constructor(name,modle,price){
//         this.name = name;
//         this.modle = modle;
//         this.price = price ;
//     }
// }
// console.log(new car ("honda city",2009,1200000));
// console.log(new car  ("honda civic",2016,20000000));



// extend class


//     class car {
//             constructor(name,modle,price){
//                 this.name = name;
//                 this.modle = modle;
//                 this.price = price ;
//             }
//         }

//         class detail extends car{
//             constructor(name,modle,price,logo){
//                 super(name,modle,price,logo)
//                 this.logo=logo
//             }
//         }

//    console.log(new detail("honda",200,20000000,"H"))     


        
                // 10 for in loop 
                    // IN

// var a = [1,2,3,4,5];
// for(let x in a ){
//     console.log(x)
// }

    // OF

// let z = [10,11,12];
// for(let elem of z ){
//     console.log(elem)
// }



// 11 call back function 

// function foo (a){
//   setTimeout(()=>{
// var name = "umar zahid "
// a(name)
//   },2000)  
// }
// foo(function (nam){
// console.log(nam)
// })




// var  foo=(one)=>{
//     setTimeout(()=>{
// var a = "majid shahid";
// one(a)

//     },2000)
// }


// foo((b)=>{
// console.log(b)
// })



        //  curying   

// function foo(a){
//     return function foo1(b){
// return function foo2(c){
//     return(a+b+c)
// }
//     }
// }


// console.log(foo(1)(2)(3))


// let a =(a)=>{
//     return (b)=>{
//         return(c)=>{
//             return(a+b+c)
//         }
//     }
// }
// console.log(a(2)(4)(8))


