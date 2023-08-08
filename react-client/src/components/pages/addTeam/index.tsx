import axios from "axios";
import { InputText } from "primereact/inputtext";
import { useState, useCallback } from "react";




const AddTeamPage = () => {
    const [teamName, setTeamName] = useState("");
    const [city, setCity] = useState("");
    const [mainColor, setMainColor] = useState("");
    const [secondaryColor, setSecondaryColor] = useState("");
    const [semel, setSemel] = useState("");

    const handlerTeamNameCallback = useCallback((e: any) => {
        setTeamName(e.target.value)
    }, [teamName])

    const handlerCityCallback = useCallback((e: any) => {
        setCity(e.target.value)
    }, [city])

    const handlerMainColorCallback = useCallback((e: any) => {
        setMainColor(e.target.value)
    }, [mainColor])

    const handlerSecondaryColorCallback = useCallback((e: any) => {
        setSecondaryColor(e.target.value)
    }, [secondaryColor])

    const handlerSemelCallback = useCallback((e: any) => {
        setSemel(e.target.value)
    }, [semel])


    async function addTeamService() {
        const teamPayload = {
            teamName,
            city,
            mainColor,
            secondaryColor,
            semel
        }
        console.log(teamPayload);
        try {
            const result = await axios.post("http://localhost:4001/teams/new-team", teamPayload)
            alert(result.data.message);
            setTeamName("")
            setCity("")
            setMainColor("")
            setSecondaryColor("")
            setSemel("")
        } catch (err) {
            alert("Something went wrong!")
            console.log(err);
        }
    }

    return (
        <form >
            <span></span>
            <h2>Add new Team</h2>
            <div>
                <div>
                    <label htmlFor="text">Team Name: </label>
                </div>
                <InputText id="teamName" value={teamName} onChange={handlerTeamNameCallback} required />
            </div>
            <div>
                <div>
                    <label htmlFor="text">City: </label>
                </div>
                <InputText id="city" value={city} onChange={handlerCityCallback} required />
            </div>
            <div>
                <div>
                    <label htmlFor="text">Main Color: </label>
                </div>
                <InputText id="mainColor" value={mainColor} onChange={handlerMainColorCallback} required />
            </div>
            <div>
                <div>
                    <label htmlFor="text">Secondary Color: </label>
                </div>
                <InputText id="secondaryColor" value={secondaryColor} onChange={handlerSecondaryColorCallback} required
                />
            </div>
            <div>
                <div>
                    <label htmlFor="text">Logo URL: </label>
                </div>
                <InputText id="semel" value={semel} onChange={handlerSemelCallback} required />
            </div>
            <button style={{ marginTop: "5%", backgroundColor: "yellow" }} type="button" onClick={addTeamService}>Add Team</button>
        </form>
    )

}


export default AddTeamPage