import React from 'react';
import MemberCard from './MemberCard';
import Obj from './data/members.json';
import './stylesheets/Roster.css';

const Roster = () => {
    return (
        <div className="ui column grid container"> 
            <div className="two column row">
                { 
                    Obj.Members.map((props) => 
                    <MemberCard 
                        fname={props.fname}
                        lname={props.lname}
                        major={props.major}
                        image={props.image}
                    />)
                }
            </div>
        </div>
    )
}

export default Roster;