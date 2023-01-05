// var prom = new Promise((resovle,reject)=>{
// resovle("Hi how are you man")
// console.log("create a promise")



// })
// console.log(prom)


// function one(){
//     two()
//     console.log(5)
// }
// function two(){
//     three()
//     console.log(4)
// }
// function three(){
//     four()
//     console.log(3)
// }
// function four(){
//     five()
//     console.log(2)
// }
// function five(){
//     console.log(1)
// }
// var setting = setTimeout(() => {
//     return one
// },1000);

//!..........................................................................
// ! Timer Task
// setTimeout(() => {
//     console.log(5)
//     document.body.style.backgroundColor ="red"
//     setTimeout(() => {
//         console.log(4)
//         document.body.style.backgroundColor ="blue"
//         setTimeout(() => {
//             console.log(3)
//             document.body.style.backgroundColor ="green"
//             setTimeout(() => {
//                 console.log(2)
//                 document.body.style.backgroundColor ="yellow"
//                 setTimeout(() => {
//                     console.log(1)
//                     console.log("happy new year")
//                     document.body.style.backgroundColor ="violet"
//                 }, 5000);
                
//             }, 5000);
            
//         }, 5000);
        
        
//     }, 5000);
    
// }, 5000);

//!---------------------------------------------------------------------------------------

//!program for settimeout using variable in a function

// var color = 'green'
// setTimeout(() => {
//    document.body.style.backgroundColor = color 
//    color = 'blue'
//    setTimeout(()=>{
//       document.body.style.backgroundColor = color 
//    },1000)
// }, 1000);

//!---------------------------------------------------------------------------------------
// function colortimedelay (color,delay){
//     return new Promise((resolve,reject) => {
       
//       setTimeout(()=>{
//             resolve('fulfilled condition')
//             document.body.style.backgroundColor = color
//         },delay)

//     })
// }
// console.log(colortimedelay());
//     colortimedelay('blue',1000)
//     .then(() =>colortimedelay('green',1000))
//       .then(() =>colortimedelay('pink',1000))
//         .then(() =>colortimedelay('yellow',1000))
//           .then(() =>colortimedelay('red',1000))
//  console.log(colortimedelay()) 
//       .then((res) => {
//         console.log("the output is successful")
//         console.log(res)
//         return 5
//       })
//       .then((res) => {
//         console.log(res*4)
//         return 5*4
//       })
//       .then((res) => {
//         console.log(res*10)
//       })
//!------------------------------------------------------------------------------

// function appi(url,success,failure){
//   var delay = Math.ceil(Math.random()*3000)
//   console.log(delay)
//   setTimeout(() => {
//       if(delay <= 2000){
//         success("success")
//       }else{
//         failure("failure")
//       }
//   },delay)

// }
// appi("url",
//   function(success){
//     console.log(success)
//     console.log("success 1")
//   },
//   function(failure){
//     console.log(failure)
//     console.log("Faliure 1")
  
//   }
  
//   )
//!------------ FETCH()---------------------------------------

// var url = 'https://catfact.ninja/fact'
// fetch(url)
// .then((res)=>{
//   console.log(res);
//   return res.json();
// })
// .then((res)=>{
//   console.log(res)
// })
//!------------------------ Timmer task --------------------------------


// let timer = 10;
//  let input_timer = document.getElementById('getthevalue') 
//  setTimeout(()=>{
//   input_timer.innerHTML = timer--;
//   input_timer.className = "timercooldown"
//   setTimeout(()=>{
//     input_timer.innerHTML = timer--;
//     setTimeout(()=>{
//       input_timer.innerHTML = timer--;
//       setTimeout(()=>{
//         input_timer.innerHTML = timer--;
//         setTimeout(()=>{
//           input_timer.innerHTML = timer--;
//           setTimeout(()=>{
//             input_timer.innerHTML = timer--;
//             setTimeout(()=>{
//               input_timer.innerHTML = timer--;
//               setTimeout(()=>{
//                 input_timer.innerHTML = timer--;
//                 setTimeout(()=>{
//                   input_timer.innerHTML = timer--;
//                   setTimeout(()=>{
//                     input_timer.innerHTML = timer--;
//                     setTimeout(()=>{
//                       input_timer.innerHTML = timer--;
//                       setTimeout(()=>{
//                         input_timer.style.color = 'red'
//                         input_timer.style.backgroundColor = 'yellow'
//                         input_timer.innerHTML = "HAPPY CHIRSTMAS";
                      
                        
//                        },1000)
                    
//                      },1000)
                  
//                    },1000)
                
//                  },1000)
              
//                },1000)
            
//              },1000)
          
//            },1000)
        
//          },1000)
      
//        },1000)
    
//      },1000)
  
//    },1000)

//  },1000)
//!------------------------------------------------------------------------------

// var url = 'https://restcountries.com/v3.1/all'
// fetch(url)
//  .then((res)=>{
//     console.log(res)
//     console.log('success')
//     return res.json()
// })
//     .then(res=>{
//         console.log(res)
//     })
//     .catch(rej=>{
//         console.log(rej.name)
//     })
//  var datain = document.querySelector('nothing')
//  datain.append(fetch_data)
//!----------------------------------------------------------------------------------
// let url = 'https://restcountries.com/v3.1/all'
// let input_data = document.querySelector('.oneforall')
// let data = fetch(url)
// .then(response=>{
//     var data_fetch = response.json()
//     return data_fetch
//     .then(response=>{
//         console.log(response)
//         var response = data.innertext
//         input_data.append(response)
//     })
// })
//!--------------------------------------------------------------------------------------
// async function create_data(){
//     var name = "santhosh"
//     var z = await name
//     console.log(z)
//    console.log("hi")
//    console.log("how are you")
// }
// create_data()
//!...........................Color Change on body using await...................................
// function colortimedelay (color,delay){
//     return new Promise((res,reject) => {
       
//       setTimeout(()=>{
//             res('fulfilled condition')
//             document.body.style.backgroundColor = color
//         },delay)

//     })
// }
// async function color(){
//     await colortimedelay('green', 1000)
//     await colortimedelay('black', 1000)
//     await colortimedelay('yellow', 1000)
//     await colortimedelay('red', 1000)
//     await colortimedelay('blue', 1000)
// }
// color()
//!--------------------------------Getting data by await in an API ---------------------------------------------------------------
async function cat(){
var url = 'https://catfact.ninja/fact'
try{
var initial_data = await fetch(url)
var final_data = initial_data.json()
final_data
.then(res=>{
    console.log(res)
    console.log(res.fact)
    console.log(res.length)
})
}
catch(e){
    console.log("ERROR = ", e)
}
}
cat()

