import React, {Component} from 'react';

class SpecialButton extends Component {

    handleClick(){

    }

    render() {
        return (
            <div>
               <button onClick={()=> console.log('clicked')}>Click me</button>
                {/*<button onClick={this.handleClick}>click me</button>*/}
            </div>
        );
    }
}

export default SpecialButton;