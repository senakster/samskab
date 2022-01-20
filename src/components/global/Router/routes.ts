import Home from "components/views/Home/Home.lazy"
import Participants from "components/views/Participants/Participants"
import Results from "components/views/Results/Results.lazy"

export type TRoute = {
    name: string;
    path: string;
    component: React.FC;
    auth?: { app_id: number, permission_level: number }
}

const RouteList: TRoute[] = [
    { name: 'Home', path: "/", component: Home },
    { name: 'Results', path: "/results", component: Results },
    { name: 'Participants', path: "/participants", component: Participants },
]

export default RouteList