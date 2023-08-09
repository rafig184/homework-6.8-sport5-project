import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface ITeam {
    teamName: string,
    city: string,
    mainColor: string,
    secondaryColor: string,
    semel: string
}


export default function TeamsTable(props: { teams: Array<ITeam> }) {
    if (!props.teams || props.teams.length === 0) return null;

    const imageSemel = (rowData: ITeam) => {
        return <img width={"40px"} src={rowData.semel} alt={`Semel ${rowData.teamName}`} />;
    };

    return <div>
        <div>
            <DataTable style={{ marginTop: "2%" }} value={props.teams} tableStyle={{ minWidth: '50rem' }}>
                {Object.keys(props.teams[0]).map(key => {
                    return <Column style={{ textAlign: "center" }} key={Math.random() * 999} field={key} header={key} body={key === "semel" ? imageSemel : undefined}></Column>
                })
                }
            </DataTable>
        </div>
    </div>
} 