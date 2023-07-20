import { createContext, useState } from "react";

export const AppContext=createContext();

export default function AppContextProvider({children}){
    const[movies, setMovies]=useState([]);
    const [user , setUser] = useState(null);
    const value={
        movies,
        setMovies,
        user,
        setUser
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
