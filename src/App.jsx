import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {


  return (
    <>
      {/* Collegamenti alle Route */}
      <BrowserRouter>
        {/* Componente Route che porta alle rotte */}
        <Routes>
          {/* Definizione delle singole rotte */}
          <Route Component={DefaultLayout}>

            <Route path="/" Component={HomePage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
