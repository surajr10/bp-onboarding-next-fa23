"use client";

import { useState } from "react";
import Welcome from "@/components/Welcome/Welcome";
import SignIn from "@/components/SignIn/SignIn";
import Link from "next/link";

export default function Page() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
    <div>
        <Link href="/effect" >Go to effect page</Link>
        <br />
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{(isLoggedIn)? "Log out" : "Log in"}</button>
        {(isLoggedIn)? <Welcome /> : <SignIn />}
    </div>
    );
}
