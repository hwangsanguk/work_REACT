import React, { Component } from 'react';
import './Stuff.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarList from './CarList'

class Stuff extends Component {

    render() {
        return(
            <div>
                <CarList />
            </div>
        );
    }
}

export default Stuff;