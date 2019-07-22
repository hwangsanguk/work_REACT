import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Home from './Home'; //라우터를 통해 Home.js로
import Stuff from './Stuff';//라우터를 통해 Stuff.js로
import Contact from './Contact';//라우터를 통해 Contact.js로
import Login from './Login';
import './Main.scss'


class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Simple SPA(Single Page Application)</h1>
                <ul className="header">
                    <li><NavLink exact to="/">home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/stuff" component={Stuff} />
                    <Route path="/contact" component={Contact} />
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default Main;