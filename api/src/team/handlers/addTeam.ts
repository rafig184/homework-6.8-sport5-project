
import { pool } from "../../database"
async function AddTeam(newTeam: any) {
    const { teamName, city, mainColor, secondaryColor, semel } = newTeam
    const query = "INSERT INTO `sport5`.`teams` (`teamName`, `city`, `mainColor`, `secondaryColor`, `semel`) VALUES (?,?,?,?,?)"
    const results = await pool.execute(query, [teamName, city, mainColor, secondaryColor, semel]);
    const [data] = results;
    return data;
}
export { AddTeam }
