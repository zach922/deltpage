import React from 'react';
import MemberCard from './MemberCard';
import Obj from './data/members.json';
import './stylesheets/Roster.css';



const Roster = () => {
    const Members = Obj.Members;
    return (
        <div className="ui container">
            <div className="ui column grid container"> 
                <div className="two column row">
                    { 
                        Members.map((props) => 
                        <MemberCard 
                            fname={props.fname}
                            lname={props.lname}
                            major={props.major}
                            image={props.image}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Roster;