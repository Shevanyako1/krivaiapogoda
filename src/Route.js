import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Auth from './pages/auth';
import Registry from './pages/reg';

import style from './components/choice/index.css'
import Weather from './pages/weather';


class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="nav">
                    <ul className="nav-list">
                        <li className="nav-list-item"><Link to='/announce'>Прогноз погоды</Link></li>
                    </ul>

                    <Route path="/announce" component={Weather}/>

                </div>
            </BrowserRouter>
        )
    }
}

export default Header;
