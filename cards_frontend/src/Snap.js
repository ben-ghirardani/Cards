import React from 'react';

class Snap extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            playerDeck: [],
            opponentDeck: [] 
        };
    }

    // componentDidMount() {
    //     console.log("should be deck from props: ", this.props.deckOfCards);
    // }

    render() {     
        console.log(this.props.deckOfCards);     
        return(
            <div>
                This is Snap
                <button className="button">
                    Button text
                </button>
            </div>
        );
    }
}

export default Snap;