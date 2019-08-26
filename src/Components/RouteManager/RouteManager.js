import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import Projects from '../Projects/Projects'

class RouteManager extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} /> */}
                <Route
                    path='/projects'
                    component={Projects}
                />
            </Switch>
        )
    }
}

export default RouteManager;
