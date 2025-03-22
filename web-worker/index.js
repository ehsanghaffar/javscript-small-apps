// create a web worker
// function startWorker() {
//   const worker = new Worker('worker.js');
//   worker.postMessage('Hello World');
//   worker.onmessage = function(event) {
//     console.log('Worker said: ' + event.data);
//   };

//   worker.postMessage("Start the calculation");
// }

// startWorker();


// create process large dataser
function processLargeDataset(dataset) {
  const numberOfWorkers = 4;
  const chunkSize = Math.ceil(dataset.length / numberOfWorkers);
  const workers = [];
  let processedData = [];

  for (let i = 0; i < numberOfWorkers; i++) {
    const worker = new Worker('worker.js');
    worker.onmessage = function(event) {
      processedData.push(...event.data);
      if (processedData.length === dataset.length) {
        console.log('Processed data: ', processedData);
      }
    }

    const start = i * chunkSize;
    const end = start + chunkSize;
    worker.postMessage(dataset.slice(start, end));
    workers.push(worker);
  }

}

const largeDataset = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
processLargeDataset(largeDataset);
