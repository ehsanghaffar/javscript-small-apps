// onmessage = function(event) {
//   if (event.data === 'Start the calculation') {
//     postMessage('Worker started the calculation');
//   }
//   let result = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     result += i;
//   }
//   postMessage('Result: ' + result);
// }

onmessage = function(event) {
  const chunk = event.data;
  const proccesChunk = chunk.map(item => item.toUpperCase());
  postMessage(proccesChunk);
}