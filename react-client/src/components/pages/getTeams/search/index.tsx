import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useRef } from 'react';

export default function SearchTeams(props: { searchAction: Function, allAction: Function }) {
    const searchInput = useRef<HTMLInputElement>(null)

    const handleSearch = () => {
        if (!searchInput.current?.value) return;
        props.searchAction(searchInput.current?.value)
    }

    const handleAll = () => {
        props.allAction()
    }

    return <div style={{ width: "50%", margin: "auto" }}>
        <div className="p-inputgroup">
            <InputText className="p-inputtext" placeholder="Search.." ref={searchInput} />
            <Button style={{ backgroundColor: "yellow", color: "black" }} label='Search' className="p-button-warning" onClick={handleSearch} />
            <Button style={{ backgroundColor: "lightblue", color: "black" }} label={"All"} icon="pi pi-search" className="p-button-primary" onClick={handleAll} />
        </div>
    </div>
}