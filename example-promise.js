// function getTempPromise(location) {
//    return new Promise( function(resolve, reject) {
//       // simulating the delay of retrieving data from the server.
//       setTimeout(function() {
//          resolve(79);
//          reject('city not found');
//       }, 1000);
//    });
// }
//
// getTempPromise('Rotterdam').then( temp => {
//    console.log('city was found, success', temp);
// }, err => {
//    console.log('The was a error resolving the temp', err);
// })

// challenge:
// create a promise to add two numbers.
// if the input is 2 + 6 then 8 will be the result.
// if you not give a || b  Or a || b is not a number then
// result is these are not numbers


function addPromise(a, b) {
   return new Promise(function(resolve, reject) {
      setTimeout(function(){
         if (typeof a === 'number' && typeof b === 'number')
            resolve(a + b);
         else
            reject('these are not all numbers')
      }, 1000);
   });
}

addPromise(3, 4).then(result => {
   console.log('Answer is: ', result);
}, err => {
   console.log('Error: ', err);
});

addPromise('a', 4).then(result => {
   console.log('Answer is: ', result);
}, err => {
   console.log('Error: ', err);
});

addPromise(3, 'b').then(result => {
   console.log('Answer is: ', result);
}, err => {
   console.log('Error: ', err);
});

addPromise('a', 'b').then(result => {
   console.log('Answer is: ', result);
}, err => {
   console.log('Error: ', err);
});
