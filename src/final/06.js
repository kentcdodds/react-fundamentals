// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const usernameInputRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    const value = usernameInputRef.current.value
    onSubmitUsername(value)
  }

function handleChange(event) {
  const {value} = event.target
  event.target.value = value.toLowerCase()
}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input ref={usernameInputRef} type="text" onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
