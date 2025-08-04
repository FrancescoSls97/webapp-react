import HomePage from "./pages/HomePage"
import SingleMoviePage from "./pages/SingleMoviePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import { GlobalProvider } from "./contexts/GlobalContext"

function App() {


  return (
    <>
      {/* Utilizzo Global Context */}
      <GlobalProvider>

        {/* Collegamenti alle Route */}
        <BrowserRouter>
          {/* Componente Route che porta alle rotte */}
          <Routes>
            {/* Definizione delle singole rotte */}
            <Route Component={DefaultLayout}>

              <Route path="/" Component={HomePage}></Route>
              <Route path="/movies/:id" Component={SingleMoviePage}></Route>
            </Route>
          </Routes>
        </BrowserRouter>

      </GlobalProvider>
    </>
  )
}

export default App
