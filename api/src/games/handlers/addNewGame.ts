
import { pool } from "../../database"
async function AddGame(teamAName: any, teamBName: any, teamAScore: any, teamBScore: any, gameDate: any) {
    // const { teamAName, teamBName, teamAScore, teamBScore, gameTime } = newGame;

    const query = `INSERT INTO games (teamAId, teamBId, teamAScore, teamBScore, gameTime)
    SELECT teamA.teamId, teamB.teamId, ?, ?, ?
    FROM teams AS teamA, teams AS teamB
    WHERE teamA.teamName = ? AND teamB.teamName = ?`
    const results = await pool.execute(query, [teamAScore, teamBScore, gameDate, teamAName, teamBName]);
    const [data] = results;

    return data;
}
export { AddGame }
