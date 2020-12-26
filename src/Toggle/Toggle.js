import React, {Component} from 'react';

class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state ={
            isShow :false
        };
    }

    toggle(){
        this.setState({
         isShow: !this.state.isShow
        });
    }



    render() {
        return (
            <div>
                <button onClick={this.toggle.bind(this)}>Toggle</button>
                {this.state.isShow && <div>text text text text</div>}
            </div>
        );
    }
}

export default Toggle;