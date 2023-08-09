import axios from "axios"

export interface IGames {
    gameId: number,
    teamAName: string,
    teamBName: string,
    teamAColor: string,
    teamBColor: string,
    TeamAScore: number,
    teamBScore: number,
    gameTime: string
}



async function getGamesService(): Promise<Array<IGames>> {
    const { data, headers } = await axios.get(`http://localhost:4001/games/`)
    if (!Array.isArray(data)) throw new Error(`Error Please contact support ${headers["x-request-id"]}`)
    console.log(data);
    return data;
}



export { getGamesService }