import React from 'react';

class Snap extends React.Component {
    
    constructor(props) {
        super(props);
    }

    // use props here in a variable? 

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