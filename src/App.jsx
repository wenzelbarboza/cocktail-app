import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
    </div>
  )
}

export default App
