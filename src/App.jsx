import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './components/Nav'
import MainScreen from './screens/mainScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <MainScreen />
    </div>
  )
}

export default App
