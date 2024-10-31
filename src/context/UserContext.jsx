import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const userContext = createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState(false)
    const navigate = useNavigate()

    const signIn = () => {
        setUser(true)
        navigate('/')
    }

    const signOut = () => {
        setUser(false)
        navigate('/login')
    }

    return (
        <userContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => {
    return useContext(userContext)
}

export default UserProvider