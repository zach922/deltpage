import React from 'react';
import './stylesheets/ContentBox.css';
const ContentBox = (props) => {
    return (
        <div>
            <div className="ui fade reveal">
                <div className="visible content">
                    <img className="large ui image" src={ props.photo } alt="" />
                </div>
                <div className="hidden content">
                    <img className="large ui image" src="https://vastphotos.com/files/uploads/photos/10342/high-resolution-landscape-photo-l.jpg" alt="" />
                </div>
                <div className="centered">{ props.content }</div>
            </div>
        </div>
    )
}

export default ContentBox;