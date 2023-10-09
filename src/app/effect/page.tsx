"use client";

import { useState, useEffect } from "react";
import movies from "@/data/movies.json";
import songs from "@/data/songs.json";

export default function Page() {
    const [data, setData] = useState<{ Name: string; Maker: string }[]>([]);
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");

    const fetchUserData = async (id: string) => {
        try {
            if (id === "") {
                return;
            }
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            const data = await response.json();
            var displayData: { Name: string; Maker: string }[] = [];
            if (Number(id) % 2 === 0) {
                displayData = songs;
            } else {
                displayData = movies;
            }
            setUserName(data.name);
            setData(displayData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserData(userId);
    }, [userId]);

    return (
        <div>
            <label htmlFor="userId">User ID </label>
            <input type="text" id="userId" name="userId" onChange={(e) => setUserId(e.target.value)} />
            <p>Username: {(userName)? userName : "No user"}</p>
            {(userName) &&
                <>
                    <p>Top 3 movies/songs:</p>
                    <ul>
                    {data.map((d, i) => (
                        <li key={i}>{d.Name} by {d.Maker}</li>
                    ))}
                    </ul>
                </>
            }
        </div>
    );
}
