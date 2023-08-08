
import express, { NextFunction, Request, Response } from "express"
import zod from "zod"
import { getTeamSearch } from "./handlers/searchTeam"
import { AddTeam } from "./handlers/addTeam"
import { getAllTeams } from "./handlers/getAllTeams"

const teamRouter = express.Router()


export const newTeamSchema = zod.object({
    teamName: zod.string(),
    city: zod.string(),
    mainColor: zod.string(),
    secondaryColor: zod.string(),
    semel: zod.string()
})

function middlewareNewTeam(req: Request, res: Response, next: NextFunction) {
    try {
        newTeamSchema.parse(req.body)
        console.log(req.body);
        return next()
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

teamRouter.post("/new-team", middlewareNewTeam, async function (req, res, next) {
    try {
        const result = await AddTeam(req.body)
        console.log(result)
        return res.json({ message: "Team successfully added!" })
    } catch (error) {
        console.log(error)
        return next(error)
    }
})



teamRouter.get("/search", async function (req: Request, res: Response, next: NextFunction) {
    try {
        const team = req.query.q
        const result = await getTeamSearch(team)
        return res.json(result)
    } catch (error) {
        console.log(error);
        return next(error)
    }
})

teamRouter.get("/", async function (req, res, next) {
    try {
        const result = await getAllTeams()
        return res.json(result)
    } catch (error) {
        console.log(error);

        return next(error)
    }
})



export { teamRouter }