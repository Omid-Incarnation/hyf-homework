import React, {Component} from 'react'
import {Link} from "react-router-dom";

const profileName = "Omid"
const url = `/profile/${profileName}` 

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
                        <Link to={url}>Profile</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
