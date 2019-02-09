import React, { Component } from 'react';
//import { allpays, data } from './data'
//import './Crud.css';
import { countries} from "./data";

class Selopt extends Component {
    render() {
        return(

            <div id="liste">
                <div>
                    <select>{countries.map(function(item, pays){
                        return <option value={pays}>{ item }</option>
                    })}</select>
                </div>
            </div>
        )
    }
}
export default Selopt;