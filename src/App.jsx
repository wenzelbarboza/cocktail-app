import { useState } from 'react'
import Nav from './components/Nav'
import MainScreen from './screens/mainScreen'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DrinkDetail from './screens/DrinkDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainScreen />
  },
  {
    path: '/detail',
    element: <DrinkDetail />
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <RouterProvider router={router} />
      {/* <MainScreen /> */}
    </div>
  )
}

export default App
