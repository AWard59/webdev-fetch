import Reach, { useState } from 'react'

function App() {
  const [url, setUrl] = useState("")
  const [html, setHtml] = useState("")

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(url)
      const text = await response.text()
      setHtml(text)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          URL: 
          <input 
          type="text"
          value={url}
          onChange={handleUrlChange}
          />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>

      <div>
        {url && (
          <iframe
          src={url}
          style={{ width: '300px', height: '300px', border: '1px solid black' }}
          />
        )}
      </div>

      <div>
        <label>
          HTML: 
          <textarea value={html} readOnly />
        </label>
      </div>
    </div>
  )
}