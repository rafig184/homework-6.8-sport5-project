import axios from "axios"

export interface ITeam {
    teamName: string,
    city: string,
    mainColor: string,
    secondaryColor: string,
    semel: string
}


async function getTeamsService(): Promise<Array<ITeam>> {
    const { data, headers } = await axios.get(`http://localhost:4001/teams/`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)
    console.log(data);
    return data;
}


async function searchTeamsService(value: string): Promise<Array<ITeam>> {
    const { data, headers } = await axios.get(`http://localhost:4001/teams/search?q=${value}`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)

    const Team: Array<ITeam> = data.map(c => {

        return {
            teamName: c.teamName,
            city: c.city,
            mainColor: c.mainColor,
            secondaryColor: c.secondaryColor,
            semel: c.semel,
        }
    })
    return Team;
}




export { getTeamsService, searchTeamsService }