"use client"

import { signIn, useSession } from "next-auth/react";





export const AppBar = () => {
    const session = useSession(); //shows the user details who is signed in note : it works on client components
    return <div>
        <button onClick={() => {
            signIn(); //next auth component that directly takes you to the sigin in page
        }}>signin</button>
        {JSON.stringify(session)}
    </div>
}