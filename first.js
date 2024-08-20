/*
//Create Array
let topic= "Arrays in Javascript";
console.log(topic);

let Tmarks = [80,85,87,88,90];
console.log(Tmarks);

let heros = ["rushi","ajay","sunil","nagraj"];



//Array indices
/*
//Looping over an aaray
for(let idx=0; idx<heros.length; idx++ ){
    console.log(heros[idx]);
}
    */
/*
//for of
for(let hero of heros){
    console.log(hero);
}

let cities = ["delhi","mumbai","chainai","panjab"];
 for(let city of cities){
    console.log(city);
 }
*/
/*
 let marks= [85,97 ,44,37,76,60];
  let sum = 0;
  for(let value of marks){
     sum += value;
  }
  let avg = sum/marks.length;
  console.log(`${avg}`);
   */
  /*
  function abc(){
    console.log("hii");
  }
  const value = new abc()
  console.log(value);
  */
 /*
 for(var i=1; i<=3; i++){
    setTimeout(() => {
      console.log(i)  
    }, 5000);
 }

 async function foo() {
   return'Hello world' 
 }

 const result= foo()
 console.log(result)
 */
/*
 let marks = [85,97,44,37,76,60];
 let sum = 0;
 for(let vaule of marks){
    sum += vaule;
 }
 let avd = sum/marks.length;
 console.log(`avg marks of the class = ${avd}`);

 let student = [20,22,24];
 let stu = 0;
 for(let Ts of student){
    stu += Ts;
 }
 let avstud = stu/student.length;
 console.log(`avg of student = ${avstud}`);

 let items = [250,645,300,900,50]
 let itemsum = 0;
 for(let values of items){
    offer = values/10%
    rr = values - offer;
 }
 let finalprice = itemsum /10%
 console.log(`final price of items = ${finalprice}`);
 */

 //Array method
 //pop deletct last
 //push add at end
 //unshift add starting
 //toString remove array
 //shift delect from start 
 //Slice returns a piece of the array
 //Splice change original array add,remove,replace
 /*
 let db = [12,13,14,15];
 let db1 = [16,17,18,19,20,21,22,23];
 let db2 = ["nitin","abhir","priya"]
 db.splice(0,1,11);
 console.log(db);
 console.log(db.toString());
 db.push(16,17,18);
 console.log(db);
 db.pop(0);
 db.pop(0);
 console.log(db);
 console.log(db.concat(db1));
 db.unshift(11);
 console.log(db);
 db.shift(1);
 console.log(db);
 db2.slice(0,1);
 console.log(db2.slice(1,2));

 db1.splice(6,3,101,102,103)
 console.log(db1);
*/

let bb2 = ["Bloomberg","Microsift","Uber","Google","IBM","Netflix"];
console.log(bb2);
//bb2.splice(0,1);
//console.log(bb2);
//bb2.splice(2,1,"ola");
//console.log(bb2);
//bb2.splice(6,0,"amazon");
//console.log(bb2);
bb2.shift(1);
console.log(bb2);

 