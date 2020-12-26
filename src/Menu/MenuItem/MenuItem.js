import React, {Component} from 'react';
import './MenuItem.css';

class MenuItem extends Component {
    render() {
        return (
            <li>
              <a href={this.props.route}>

              </a>
                {this.props.children}
            </li>
        );
    }
}

export default MenuItem;