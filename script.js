//  class Person{
//    constructor(name,color){
//      this.name = name;
//      this.color = color;
//     this.salary = salary;
//     this.gender = gender;
//     this.collage = collage

// }
// }
// var myinfo = new Person("santhosh","22","500000","male","IIT Madras",);
// console.log(myinfo.name);
// console.log(myinfo.salary);
// console.log(myinfo.age);
// console.log(myinfo.gender);
// console.log(myinfo.collage);
//---------------------------------------------------------------------------------
// var arr = ["apple","orange","mangoe"]
// var res = arr.map((ele)=>ele+ "s")
// console.log(res);
//..........................................

// var a = new XMLHttpRequest();
// a.open("GET","https://restcountries.com/v3.1/all");
// a.send();
// a.onload = function(){
//     var data = a.response
//     var result = JSON.parse(data);
//}
// var a = [12,13,14,15,16];
// var res = a.reduce((acc,cv)=>acc+cv,100)
// console.log(res);
//............................................................................................
//* 1. Write a constructor for the class Movie, which takes a String representing the title of the movie,
//*    a String representing the studio, and a String representing the rating as its arguments, and sets
//*    the respective class properties to these values.

// class Movie {
//   constructor(title, studio, rating) {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }
// }
// var mymovie = new Movie("Love Today", "AGS Entertainment", "PG-13");
// console.log(mymovie);
//...................................................................................................
//* 2. The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
// class Movie {
//       constructor(title, studio, rating) {
//         this.title = title;
//         this.studio = studio;
//         if(this.rating===undefined){
//             this.rating = "PG";
//         }else{
//             this.rating = rating;
//         }
//       }
//     }
//     var mymovie = new Movie("Love Today", "AGS Entertainment");
//     console.log(mymovie);
//....................................................
//* 3. Write a method getPG, which takes an array of base type Movie as its argument, and
//*    returns a new array of only those movies in the input array with a rating of "PG".
//*    You may assume the input array is full of Movie instances. The returned array need not be full.
// class Movie {
//     constructor(title, studio, rating) {
//         this.title = title;
//         this.studio = studio;
//         if (this.rating === undefined) {
//             this.rating = "PG";
//         } else {
//             this.rating = rating;
//         }
//         getPG(array) {
//             var result = [];

//             for (var i = 0; i < array.length; i++) {
                
//                 if (array[i].rating === "PG")

//                     result.push(array[i]);
//                 }
            
//             }
//         return result;
//     }
// }
        
// var moviel = new Movie("ABC", "MARVEL");

// var movie2 = new Movie("XYZ", "DC", "PG15");

// var movie3 = new Movie("cde", "fv");

// var movie4 = new Movie("gnh", "kk", "pg134"); var arr = [moviel, movie2, movie, movie4];

// console.log(movie3.getPG(arr));





