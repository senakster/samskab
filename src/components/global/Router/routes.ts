import Home from "components/views/Home/Home.lazy"
import Collaborators from "components/views/Collaborators/Collaborators.lazy"
import Results from "components/views/Results/Results.lazy"
import Timeline from "components/views/Timeline/Timeline.lazy"

export type TRoute = {
    name: string;
    path: string;
    component: React.FC;
    categories?: string[];
    auth?: { app_id: number, permission_level: number }
}

const RouteList: TRoute[] = [
    { name: 'Home', categories: ['about'], path: "/", component: Home },
    { name: 'Timeline', categories: ['about'], path: "/timeline", component: Timeline },
    { name: 'Results', categories: ['ressources'], path: "/results", component: Results },
    { name: 'Collaborators', categories: ['about'], path: "/collaborators", component: Collaborators },
]

export default RouteList