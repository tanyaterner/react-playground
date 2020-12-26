import React, {Component} from 'react';
import MenuItem from "./MenuItem/MenuItem";

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <MenuItem>
                        <a className="link" href="/">
                            {this.props.children}
                        </a>
                    </MenuItem>
                </ul>
            </nav>
        );
    }
}

export default Menu;