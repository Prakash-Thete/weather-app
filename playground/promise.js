var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof a === 'number' && typeof b === 'number') {
          resolve(a + b);
        } else {
          reject('a and b needs to be numbers');
        }
      }, 1500);
    });
}

asyncAdd(2, '3').then((result) => {
  console.log('result : ', result);
  return asyncAdd(result, 33);
}).then((result) => {
  console.log('result should be 38 : ', result);
}).catch((errorMessage) => {
  console.log('errorMessage : ', errorMessage);
});



// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey, it worked');
//     // reject('Hey, Failed to resolve the Promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('success : ', message);
// }, (errorMessage) => {
//   console.log('Error : ', errorMessage);
// });
