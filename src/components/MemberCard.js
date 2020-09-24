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
                { props.fname } { props.lname }
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