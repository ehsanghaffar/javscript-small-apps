
// Dynamically Creating a Download Link
const download = (data, filename) => {
  const data = JSON.stringify(data)
  const link = document.createElement('a')

  link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data))
  link.setAttribute('download', filename || 'data.json')
  link.style.display = 'none'

  document.body.appendChild(link)

  link.click()

  document.body.removeChild(link)
}

// Later call it like so:
download({ name: 'John Doe', email: 'john@doe.com', phone: '+1 234 567' })

// Calling with a custom file name
download({ name: 'John Doe' }, 'user.json')



// Creating the download functionality for downloading blobs
const download = async (url, filename) => {
  const data = await fetch(url)
  const blob = await data.blob()
  const objectUrl = URL.createObjectURL(blob)

  const link = document.createElement('a')

  link.setAttribute('href', objectUrl)
  link.setAttribute('download', filename)
  link.style.display = 'none'

  document.body.appendChild(link)

  link.click()

  document.body.removeChild(link)
}

// Later call it with an URL and filename like so:
download('https://unpkg.com/react@18/umd/react.production.min.js', 'react.js')