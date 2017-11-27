import React from "react";
import {Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import Home from "./Home";
import Other from "./Other";
import Snap from "./Snap";

class Main extends React.Component {
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>Menu</h1>
                    <ul className="menu">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/snap">Snap</NavLink></li>
                        <li><NavLink to="other">Other</NavLink></li>                
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/snap" component={Snap}/>
                        <Route path="/other" component={Other}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main;