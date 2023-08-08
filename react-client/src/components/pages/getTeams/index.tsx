import { useEffect, useState } from "react"
import { ITeam, getTeamsService, searchTeamsService } from "./api";
import SearchTeams from "./search";
import TeamsTable from "./table";


export default function TeamsPage() {
    const [teams, setTeams] = useState<Array<ITeam>>([])


    async function getTeamAction() {
        try {
            const result = await getTeamsService()
            setTeams(result)
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

    async function handleSearchApi(searchText: string) {
        try {
            const result = await searchTeamsService(searchText)
            setTeams(result)
        } catch (error) {
            alert("error")
        }
    }

    return <div >
        <h1>Teams</h1>
        <SearchTeams searchAction={handleSearchApi} allAction={getTeamAction} />
        <TeamsTable key={Math.random() * 999} teams={teams} />
    </div>
}


