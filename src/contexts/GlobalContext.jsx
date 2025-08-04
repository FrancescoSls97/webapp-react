import { createContext, useState, useEffect, useContext } from "react"

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const api_server_url = import.meta.env.VITE_BACKEND_API_SERVER
    const [movies, setMovies] = useState([])
    console.log(api_server_url);

    useEffect(() => {
        fetch(api_server_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data)

            })
    }, [])

    return (
        <GlobalContext.Provider value={{
            movies,
            setMovies
        }}> {children} </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    const context = useContext(GlobalContext)

    if (!context) {
        throw new Exception('Usa il GlobalContext nel punto giusto')
    }

    return context
}

export { GlobalProvider, useGlobalContext }