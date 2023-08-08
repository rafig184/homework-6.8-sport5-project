
import { pool } from "../../database"
async function getTeamSearch(team: any) {
    if (!team) throw new Error("Mising search input")
    const query = "SELECT * FROM sport5.teams WHERE teamName like ?"
    const results = await pool.execute(query, [`%${team}%`]);
    const [data] = results;
    return data;
}
export { getTeamSearch }
