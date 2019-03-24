import React, {Component} from 'react'
import {Link} from "react-router-dom";

export default class home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/Profile/test">Profile</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
