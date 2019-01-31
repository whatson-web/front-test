import React, { Component } from 'react';
import { allpays, data } from './data'

class Selopt extends Component {
render() {
    return(

        <div>
        <ul>{data.map(function(item, i){
            return <li value={i}>{ item }</li>
        })}</ul>


        <select>{allpays.map(function(item, i){
            return <option value={i}>{ item }</option>
        })}</select>
        </div>
    )
}
}
export default Selopt;