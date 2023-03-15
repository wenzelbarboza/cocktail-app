import { Children, useState } from 'react'
import Nav from './components/Nav'
import MainScreen from './screens/mainScreen'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import DrinkDetail from './screens/DrinkDetail';
import Root from './Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainScreen />} />
      <Route path="/detail" element={<DrinkDetail />} />
    </Route>
  )
);


function App() {

  console.log('root')

  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <MainScreen /> */}
    </div>
  )
}

export default App
