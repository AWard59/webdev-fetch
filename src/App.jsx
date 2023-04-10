import React, { useState } from 'react'

function App() {
  const [url, setUrl] = useState("")
  const [html, setHtml] = useState("")

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const handleSubmit = async () => {
    let response = await fetch('https://wiki.archlinux.org/')
    console.log(response.text)
      // let text = await response.text
      // setHtml(text)
      // console.log('html', html)
  }

  return (
    <div>

      <div>
        <label htmlFor="urlInput">Enter URL: </label>
        <input type="text" id="urlInput" value={url} onChange={handleUrlChange} />
        <button onClick={handleSubmit}>Get HTML</button>
      </div>

      <div>
        <object data="www.google.com" width="400" height="300" />
      </div>

      <div>
        <label htmlFor="htmlOutput">HTML Output: </label>
        <textarea id="htmlOutput" value={html} readOnly />
      </div>

    </div>
  )
}

export default App;