import Home from "components/views/Home/Home.lazy"
import About from "components/views/About/About.lazy"
import Collaborators from "components/views/Collaborators/Collaborators.lazy"
import Results from "components/views/Results/Results.lazy"
import Timeline from "components/views/Timeline/Timeline.lazy"
import Participants from "components/views/Participants/Participants.lazy"
import Contact from "components/views/Contact/Contact.lazy"

export type TRoute = {
    name: string;
    path: string;
    component: React.FC;
    categories?: string[];
    auth?: { app_id: number, permission_level: number }
}

const RouteList: TRoute[] = [
    { name: 'Home', categories: ['home'], path: "/", component: About },
    { name: 'About', categories: ['about'], path: "/about", component: About },
    { name: 'Timeline', categories: ['about'], path: "/structure", component: Timeline },
    { name: 'Results', categories: ['ressources'], path: "/results", component: Results },
    { name: 'Participants', categories: ['about'], path: "/participants", component: Participants },
    { name: 'Collaborators', categories: ['about'], path: "/collaborators", component: Collaborators },
    { name: 'Contact', categories: ['contact'], path: "/contact", component: Contact },
]

export default RouteList