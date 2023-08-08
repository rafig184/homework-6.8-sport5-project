import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IGames } from '../api';



export default function GamesTable(props: { games: Array<IGames> }) {
    if (!props.games || props.games.length === 0) return null;
    return <div>
        <div>
            <DataTable style={{ backgroundColor: "gray", color: "black" }} value={props.games} tableStyle={{ minWidth: '50rem' }}>
                {Object.keys(props.games[0]).map(key => {
                    return <Column key={Math.random() * 999} style={{ border: "1px solid black" }} field={key} header={key}></Column>
                })
                }
            </DataTable>
        </div>
    </div>
} 