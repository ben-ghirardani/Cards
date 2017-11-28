import React from 'react';

class Snap extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            deckOfCards: ["test"]
        }
    }

    // add a component did load method to pull deckOfCards from props, insert it into state here and shuffle it

    render() {
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