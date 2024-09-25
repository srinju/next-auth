"use client"
import { signOut } from "next-auth/react"


export const Logout = () => {
    return <div>
        <button onClick={() => {
            signOut(); ////next auth component that clears your cookies
        }}>Logout</button>
    </div>
}