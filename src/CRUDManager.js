import React, { Component } from 'react';
import { allpays, data } from './data'
import './Crud.css';

class Selopt extends Component {
render() {
    return(

        <div id="allist">
            <div id="list_sel">
                <ul id="list">{data.map(function(item, i){
                    return <li value={i}>{ item }</li>
                })}</ul>
            </div>
            <div>
        <select>{allpays.map(function(item, i){
            return <option value={i}>{ item }</option>
        })}</select>
            </div>
        </div>
    )
}
}
export default Selopt;