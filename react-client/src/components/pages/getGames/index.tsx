import { useEffect, useState } from "react"
import { IGames, getGamesService } from "./api"
import GamesTable from "./table"



export default function GamesPage() {
    const [games, setGames] = useState<Array<IGames>>([])

    async function getTeamAction() {
        try {
            const result = await getGamesService()
            setGames(result)
        } catch (error) {
            alert("error")
        }
    }

    useEffect(() => {
        getTeamAction()
        return () => {
            console.log("Unmount!")
        }
    }, [])


    return <div >
        <h1>Games</h1>
        <GamesTable key={Math.random() * 999} games={games} />
    </div>
}


