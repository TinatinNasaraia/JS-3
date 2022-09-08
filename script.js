//1.
//let array = [5, 25, 89, 120, 36];

//array.push("javascript", "python")
//console.log (array);

//array.unshift("html","css")
//console.log(array);

//console.log(array.length);

//array.shift() && array.pop()
//console.log(array);

//array.splice(1,0, "PHP");
//console.log(array);



//2.
let fruits= ["orange", "banana", "pear"];
//console.log(fruits.length);

//fruits.push("apple", "pineapple")
//console.log(fruits);

//fruits.unshift("watermelon")
//console.log(fruits);

//fruits.splice(2,0, "mango");
//console.log(fruits);

//fruits.shift() && fruits.pop();
//console.log(fruits);

//console.log(fruits.length);


//3.
//let array = [12, 25, 3, 6, 8, 14, 7, 23];

//let newarray = array.map( x => x / 3);
//console.log(newarray);


//4.
//let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

//let newarray= array.filter(function (x) {
   // if (typeof x === 'number'){
    //return x;
    //})
//console.log(newarray);



//5.
//let languages = ['html', 'css', 'javascript', 'python, 'php'];

//let result = languages.filter(function (x) {
   //return x.length > 3;
//});

//console.log(result);


//6.
//let item = [12, "google", 32, null, "yahoo", 25];

//let newarray =item.map((element) => {
    //if (typeof element == "number") {
       // return element * element;
    //} else if (typeof element == "string") {
        //return element.toUpperCase();
    //}
    //return element;
//});
//console.log(newarray);


//7.
//let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

//let result = words.filter(item => {
    //if (item.includes("m") || item.includes("M")){
     //   return true;
   // }
    //return false;
//})
//console.log(result);


//8.
//let arr1 = [1, 2];
//let arr2 = [3, 4];
//let arr3 = [5, 6];

//let allarray =arr1.concat(arr2).concat(arr3);
//console.log(allarray);



//9.
//let arr = [1, 2, 3, 4, 5];

//let sum=0;
//arr.forEach(function (item){
    //sum += item;
//});
//console.log(sum);



//10.
//let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];

//let result = numbers.filter((item) => {
    //if (item >0) {
        //return true;
    //}
   // return false;
//});
//console.log(result);



//11.
//let arr = [-1, -2, -3, 4];

//let result = arr.some((item) => {
    //if (item >0) {
        //return true;
    //}
    //return false;
//});
//console.log(result);