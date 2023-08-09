
import express, { NextFunction, Request, Response } from "express"
import { getAllGames } from "./handlers/getGames"
import zod from "zod"
import { AddGame } from "./handlers/addNewGame"
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'
import { format, getTime } from "date-fns"


const gamesRouter = express.Router()

export const newGameSchema = zod.object({
    teamAName: zod.string(),
    teamBName: zod.string(),
    teamAScore: zod.number(),
    teamBScore: zod.number(),
    gameTime: zod.string()
})

function middlewareNewGame(req: Request, res: Response, next: NextFunction) {
    try {
        newGameSchema.parse(req.body)
        console.log(req.body);
        return next()
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

gamesRouter.post("/new-game", middlewareNewGame, async function (req, res, next) {
    try {
        const { teamAName, teamBName, teamAScore, teamBScore, gameTime } = req.body
        // const utcDate = utcToZonedTime(new Date(gameTime), 'UTC');
        const gameDate = format(new Date(gameTime), 'yyyy-MM-dd HH:mm')
        const result = await AddGame(teamAName, teamBName, teamAScore, teamBScore, gameDate)
        console.log(result)
        return res.json({ message: "Game successfully added!" })
    } catch (error) {
        console.log(error)
        return next(error)
    }
})




gamesRouter.get("/", async function (req, res, next) {
    try {
        const result = await getAllGames()
        return res.json(result)
    } catch (error) {
        console.log(error);
        return next(error)
    }
})


export { gamesRouter }