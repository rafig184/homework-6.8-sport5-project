
import { pool } from "../../database/"
async function getAllGames() {
    const query = `SELECT
    games.id AS "Game Id",
    teamA.teamName AS "Team A",
    teamB.teamName AS "Team B",
    teamA.mainColor AS "Team A Color",
    teamB.mainColor AS "Team B Color",
    teamAScore AS "Team A Score",
    teamBScore AS "Team B Score",
    gameTime AS "Date"
FROM
	games
JOIN
    teams teamA ON games.teamAId = teamA.teamId
JOIN
    teams teamB ON games.teamBid = teamB.teamId
ORDER BY games.id ASC`
    const results = await pool.execute(query);
    const [data] = results;
    return data;
}
export { getAllGames }
