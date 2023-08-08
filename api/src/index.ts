import express, { Request, Response, NextFunction } from "express"
import cors from "cors"

import { teamRouter } from "./team/routes";
import { gamesRouter } from "./games/routes";


const port = 4001


const app = express();
app.use(cors())
app.use(express.json());

app.get("/health-check", function (req, res, next) {
    res.send(`API IS OK ${new Date().toISOString()}`)
})



app.use("/teams", teamRouter)
app.use("/games", gamesRouter)






app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log({ message: err.message })
    res.status(500).send({ message: err.message })
})


app.listen(port, () => {
    console.log({ message: `Api is running on Port ${port}` })
})