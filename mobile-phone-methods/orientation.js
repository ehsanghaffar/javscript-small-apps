// get orientation of device

function getOrientationDevice() {
  const isPortrait = screen.orientation.type.startsWith('portrait')
  return isPortrait ? 'portrait' : 'landscape'
}