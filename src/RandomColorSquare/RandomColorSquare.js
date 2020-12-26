import React, {Component} from 'react';
import './RandomColorSquare.css'


class RandomColorSquare extends Component {

    constructor(props) {
        super(props);
        this.state={
         color: 'red'
        };

    }

    onChange = ()=> {
        const colors = ['pink', 'red', 'blue', 'yellow','green','black','orange','white','grey'];
        let randColor = colors[Math.floor(Math.random() * colors.length)];
        this.setState({ color:randColor});
    }

    render() {
        return (
            <div className="Square"  onClick={this.onChange} style={{backgroundColor: this.state.color}} >

            </div>
        );
    }
}

export default RandomColorSquare;