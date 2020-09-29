import React from 'react';
import { Select } from 'semantic-ui-react';
import './stylesheets/Filter.css';


const Filter = (props) => {

    const handleChange = (event) => {
        props.doSort(event.target.textContent);
    }
    
    return (
        <div>
            <Select 
                onChange={ handleChange } 
                placeholder="Sort by..." 
                options={ props.sortables }
            />
        </div>
    )
}

export default Filter;