import axios from "axios";
import { Dropdown } from 'primereact/dropdown';
import { useState, useCallback, useEffect } from "react";
import { getTeamsService } from "../getTeams/api";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from 'primereact/calendar';




export interface IGame {
    teamAName: string,
    teamBName: string,
    teamAScore: number,
    teamBScore: number,
    gameTime: string
}


const AddGamePage = () => {
    const [teamAName, setTeamAName] = useState("");
    const [teamBName, setTeamBName] = useState("");
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);
    const [gameTime, setDate] = useState("");
    const [teamNames, setTeamNames] = useState([]);

    const handlerTeamANameCallback = useCallback((e: any) => {
        setTeamAName(e.target.value)
    }, [teamAName])

    const handlerTeamBNameCallback = useCallback((e: any) => {
        setTeamBName(e.target.value)
    }, [teamBName])

    const handlerTeamAScoreCallback = useCallback((e: any) => {
        setTeamAScore(parseInt(e.target.value))
    }, [teamAScore])

    const handlerTeamBScoreCallback = useCallback((e: any) => {
        setTeamBScore(parseInt(e.target.value))
    }, [teamBScore])

    const handlerDateCallback = useCallback((e: any) => {
        setDate(e.target.value)
    }, [gameTime])


    async function addGameService() {
        const gamePayload: IGame = {
            teamAName,
            teamBName,
            teamAScore,
            teamBScore,
            gameTime
        }
        console.log(gamePayload);
        try {
            const result = await axios.post("http://localhost:4001/games/new-game", gamePayload)
            alert(result.data.message);
            setTeamAName("")
            setTeamBName("")
            setTeamAScore(0)
            setTeamBScore(0)
            setDate("")
        } catch (err) {
            alert("Something went wrong!")
            console.log(err);
        }
    }

    async function getTeamName() {
        const result = await getTeamsService()
        console.log(result);
        return result.map((e) => e.teamName);
    }
    useEffect(() => {
        async function fetchTeamNames() {
            const names: any = await getTeamName();
            console.log(names);
            setTeamNames(names);
        }
        fetchTeamNames();
    }, []);


    return (
        <form >
            <span></span>
            <h2>Add new Game</h2>
            <div>
                <div>
                    <label htmlFor="text">Team A : </label>
                </div>
                <div>
                    <Dropdown
                        value={teamAName}
                        onChange={handlerTeamANameCallback}
                        options={teamNames.map((e) => ({ label: e, value: e }))}
                        optionLabel="label"
                        editable
                        placeholder="Select Team A"
                        className="w-full md:w-14rem"
                    />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="text">Team B: </label>
                </div>
                <div>
                    <Dropdown
                        value={teamBName}
                        onChange={handlerTeamBNameCallback}
                        options={teamNames.map((e) => ({ label: e, value: e }))}
                        optionLabel="label"
                        editable
                        placeholder="Select Team B"
                        className="w-full md:w-14rem"
                    />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="text">Team A Score: </label>
                </div>
                <InputNumber value={teamAScore} onValueChange={handlerTeamAScoreCallback} required />
            </div>
            <div>
                <div>
                    <label htmlFor="text">Team B Score: </label>
                </div>
                <InputNumber value={teamBScore} onValueChange={handlerTeamBScoreCallback} required />
            </div>
            <div>
                <div>
                    <label htmlFor="text">Date: </label>
                </div>
                <Calendar id="gameTime" value={gameTime} onChange={handlerDateCallback} showTime hourFormat="24" required />
            </div>
            <button style={{ marginTop: "5%", backgroundColor: "yellow" }} type="button" onClick={addGameService}>Add Game</button>
        </form>
    )

}


export default AddGamePage


// import { object, string, TypeOf } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, FormProvider } from "react-hook-form";
// import axios from "axios"


// const gameSchema = object({
//     teamAName: string(),
//     teamBName: string(),
//     teamAScore: string(),
//     teamBScore: string(),
//     gameTime: string()
// });




// type AddGameInput = TypeOf<typeof gameSchema>;

// const AddGamePage = () => {
//     const methods = useForm<AddGameInput>({
//         resolver: zodResolver(gameSchema),
//     });


//     async function addGameService() {
//         const gamePayload = {
//             teamA: methods.getValues("teamAName"),
//             teamB: methods.getValues("teamBName"),
//             teamAScore: methods.getValues("teamAScore"),
//             teamBScore: methods.getValues("teamBScore"),
//             gameTime: methods.getValues("gameTime"),
//         }
//         console.log(gamePayload);

//         try {
//             const result = await axios.post("http://localhost:4001/games/new-game", gamePayload)
//             alert(result.data.message)


//         } catch (ex) {
//             alert("Something went wrong!")
//             console.log(ex);
//         }

//     }

//     return (
//         <FormProvider {...methods}>
//             <h1 style={{ color: "white" }}>Add New Team</h1>
//             <form>
//                 <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
//                     Team A Name
//                     <input type="text" {...methods.register("teamAName")} />
//                     {methods.formState.errors.teamAName && <span>{methods.formState.errors.teamAName.message}</span>}
//                     team B Name
//                     <input type="text" {...methods.register("teamBName")} />
//                     {methods.formState.errors.teamBName && <span>{methods.formState.errors.teamBName.message}</span>}
//                     Team A Score
//                     <input type="text" {...methods.register("teamAScore")} />
//                     {methods.formState.errors.teamAScore && <span>{methods.formState.errors.teamAScore.message}</span>}
//                     Team B Score
//                     <input type="text" {...methods.register("teamBScore")} />
//                     {methods.formState.errors.teamBScore && <span>{methods.formState.errors.teamBScore.message}</span>}
//                     Game Time
//                     <input type="text" {...methods.register("gameTime")} />
//                     {methods.formState.errors.gameTime && <span>{methods.formState.errors.gameTime.message}</span>}
//                 </div>
//                 <button type="button" onClick={addGameService}>Add Game</button>
//             </form>
//         </FormProvider>
//     );
// };

// export default AddGamePage;


