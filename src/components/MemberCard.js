import React from 'react';

const MemberCard = (props) => {
    return (
        <div className="ui card"> 
            <div className="image">
                <img src={ props.image } alt=" " /> 
            </div>
            <div className="content">
                { props.name }
            </div>
            <div className="extra content">
                <div>
                    { props.extra }
                </div>
            </div>
        </div>
    )
}

export default MemberCard;