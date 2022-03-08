import React from 'react'
import { useEffect, useState } from "react"

const userLocal = localStorage.getItem("user") 

const defaultUser = userLocal ? JSON.parse(userLocal) : null

export default function UserContextProvider(props) {
    
    const [user, setUser] = useState(defaultUser)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    const value = [user, setUser]

    return (
        <userContext.Provider value={value}>
            {props.children}
        </userContext.Provider>
    )
}