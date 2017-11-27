import React from "react";
import {Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import Home from "./Home";
import Other from "./Other";
import Snap from "./Snap";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deckOfCards: [
                { suit: "Clubs", name: "Ace", value: 1 }, { suit: "Clubs", name: "Two", value: 2 }, { suit: "Clubs", name: "Three", value: 3 }, { suit: "Clubs", name: "Four", value: 4 }, { suit: "Clubs", name: "Five", value: 5 }, { suit: "Clubs", name: "Six", value: 6 }, { suit: "Clubs", name: "Seven", value: 7 }, { suit: "Clubs", name: "Eight", value: 8 }, { suit: "Clubs", name: "Nine", value: 9 }, { suit: "Clubs", name: "Ten", value: 10 }, { suit: "Clubs", name: "Jack", value: 11 }, { suit: "Clubs", name: "Queen", value: 12 }, { suit: "Clubs", name: "King", value: 13},
                { suit: "Diamonds", name: "Ace", value: 1}, { suit: "Diamonds", name: "Two", value: 2 }, { suit: "Diamonds", name: "Three", value: 3 }, { suit: "Diamonds", name: "Four", value: 4 }, { suit: "Diamonds", name: "Five", value: 5 }, { suit: "Diamonds", name: "Six", value: 6 }, { suit: "Diamonds", name: "Seven", value: 7 }, { suit: "Diamonds", name: "Eight", value: 8 }, { suit: "Diamonds", name: "Nine", value: 9 }, { suit: "Diamonds", name: "Ten", value: 10 }, { suit: "Diamonds", name: "Jack", value: 11 }, { suit: "Diamonds", name: "Queen", value: 12 }, { suit: "Diamonds", name: "King", value: 13 },
                { suit: "Spades", name: "Ace", value: 1 }, { suit: "Spades", name: "Two", value: 2 }, { suit: "Spades", name: "Three", value: 3 }, { suit: "Spades", name: "Four", value: 4 }, { suit: "Spades", name: "Five", value: 5 }, { suit: "Spades", name: "Six", value: 6 }, { suit: "Spades", name: "Seven", value: 7 }, { suit: "Spades", name: "Eight", value: 8 }, { suit: "Spades", name: "Nine", value: 9 }, { suit: "Spades", name: "Ten", value: 10 }, { suit: "Spades", name: "Jack", value: 11 }, { suit: "Spades", name: "Queen", value: 12 }, { suit: "Spades", name: "King", value: 13 },
                { suit: "Hearts", name: "Ace", value: 1 }, { suit: "Hearts", name: "Two", value: 2 }, { suit: "Hearts", name: "Three", value: 3 }, { suit: "Hearts", name: "Four", value: 4 }, { suit: "Hearts", name: "Five", value: 5 }, { suit: "Hearts", name: "Six", value: 6 }, { suit: "Hearts", name: "Seven", value: 7}, { suit: "Hearts", name: "Eight", value: 8 }, { suit: "Hearts", name: "Nine", value: 9 }, { suit: "Hearts", name: "Ten", value: 10 }, { suit: "Hearts", name: "Jack", value: 11 }, { suit: "Hearts", name: "Queen", value: 12 }, { suit: "Hearts", name: "King", value: 13 }
            ]
        }
    }

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
                        <Route path="/snap" component={Snap} />
                        <Route path="/other" component={Other}/>
                    </div>
                    {/* pass shuffle method and deck of cards down as props */}
                    {/* or does it go above in the Route component? */}
                    {/* <Snap className="Snap" deckOfCards={this.state.deckOfCards} /> */}
                </div>
            </HashRouter>
        )
    }
}

export default Main;