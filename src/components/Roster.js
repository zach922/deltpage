import React from 'react';
import MemberCard from './MemberCard';

const Roster = () => {
    return (
        <div className="ui grid container"> 
            <div className="three wide column">
                <MemberCard 
                    image = "https://static.wixstatic.com/media/158a7d_953486801f764006b990d557f7cf5d6e~mv2.jpg/v1/fill/w_119,h_154,al_c,q_80,usm_0.66_1.00_0.01/IMG_2724.webp"
                    name = "Leland Sherl"
                    extra = "MIS & Business Analytics"
                />
            </div>
            <div className="three wide column"><MemberCard /></div>
            <div className="three wide column"><MemberCard /></div>
            <div className="three wide column"><MemberCard /></div>
            <div className="three wide column"><MemberCard /></div>
            <div className="three wide column"><MemberCard /></div>
        </div>
    )
}

export default Roster;