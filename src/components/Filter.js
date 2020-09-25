import React from 'react';

const Filter = (props) => {

    return (
        <div className="ui grid form">
            <div className="four wide field">
                <div className="ui category search">
                    <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search members..." />
                    <i className="search icon"></i>
                    </div>
                </div>
                <div className="results"></div>
            </div>
            <div className="four wide field">
                <select>
                    { 
                        props.sortables.map((props) =>
                            <option value={ props.key }>
                                { props.title }
                            </option>
                        )
                    }
                </select>
            </div>
        </div>
    )
}

export default Filter;