// Stop screen lock

let wakeLock = null

async function play() {
  // --
  wakeLock = await navigator.wakeLock.request('screen')
}

async function pause() {
  await wakeLock.release()
}