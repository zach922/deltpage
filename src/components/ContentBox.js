import React from 'react';
import './stylesheets/ContentBox.css';
const ContentBox = (props) => {
    return (
        <div className="container">
            <img className="medium ui image" src={ props.photo } alt="" >

            </img>
            <div className="centered">{ props.content }</div>
        </div>
    )
}

export default ContentBox;