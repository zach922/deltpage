import React from 'react';
import './stylesheets/MemberCard.css';
import photo from './photos/pic1.jpg';

const MemberCard = (props) => {
    return (
        <div className="ui card"> 
            <div className="image">
                <img src={ photo } alt=" " /> 
            </div>
            <div className="content">
                <div className="header">
                    { props.fname } { props.lname }
                </div>
                <span className="description">
                 { props.position }
                </span>&nbsp;&nbsp;&nbsp;
                <span className="meta">
                { props.gradDate }
                </span>
            </div>
            <div className="extra content">
                <div>
                    { props.major }
                </div>
            </div>
        </div>
    )
}

export default MemberCard;