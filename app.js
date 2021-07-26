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