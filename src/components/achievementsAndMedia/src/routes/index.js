import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopBar from '../components/topBar'
import Achievements from '../components/achievements'
import Media from '../components/media'

export default function AppRoutes() {
    return (
        <Router>
                <Route path="/" component={TopBar}/>
                <Route exact path="/achievements" component={Achievements} />
                <Route exact path="/media" component={Media} />
        </Router>
    )
}
