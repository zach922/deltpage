import React from 'react';
import MemberCard from './MemberCard';

const Roster = () => {
    return (
        <div className="ui grid container"> 
            <div className="four wide column">
                <MemberCard 
                    image = "#"
                    name = "Zach"
                    extra = "Computer Engineer"
                />
            </div>
            <div className="four wide column"><MemberCard /></div>
            <div className="four wide column"><MemberCard /></div>
            <div className="four wide column"><MemberCard /></div>
        </div>
    )
}

export default Roster;