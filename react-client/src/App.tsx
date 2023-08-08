import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import TeamsPage from "./components/pages/getTeams"
import AddTeamPage from "./components/pages/addTeam"
import GamesPage from "./components/pages/getGames"
import AddGamePage from "./components/pages/addGame"


interface IRoute {
  path: string,
  key: string,
  component: any,
  label?: string
}

const routes: Array<IRoute> = [
  {
    path: "/add-team",
    component: <AddTeamPage />,
    key: "add-team",
    label: "Add Team |"
  },
  {
    path: "/teams",
    component: <TeamsPage />,
    key: "teams",
    label: "All Teams |"
  },
  {
    path: "/games",
    component: <GamesPage />,
    key: "games",
    label: "All Games |"
  },
  {
    path: "/add-game",
    component: <AddGamePage />,
    key: "add-game",
    label: "Add Game "
  },
]


function App() {


  return (
    <div>

      <div style={{ marginTop: "50px" }}>
        {routes.filter(r => r.label).map((route: IRoute) => {
          return <Link key={route.label} to={route.path} > {route.label} </Link>
        })}
        <Routes>
          {routes.map((route: IRoute) => {
            return <Route path={route.path} key={route.key} element={route.component} />
          })}
        </Routes>
      </div>
    </div>

  )
}

export default App
