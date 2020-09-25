import React from 'react';
import Post from './Post';

const Philanthropy = () => {
    return (
        
        <div className="ui container">
            <div className="ui inverted divider"></div>
            <Post 
                title = "Our Philanthropic Partner: JDRF"
                content = "Delta Tau Delta's philanthropic partners is the Junior Diabetes Research Foundation. It is every chapter's duty to raise money for this issue in the hopes of one day curing type one diabetes. Every year Beta Chapter raises these funds by participating in the JDRF walk help at Columbus, Ohio. If you would like to help with JDRF, support us with raising funds and follow our social media accounts."
            />
            <div className="ui inverted divider"></div>
            <Post 
                title = "Pelt-A-Delt"
                content = "Pelt A Delt takes place in the spring of each year where people can pay to throw eggs at all of the active members. All the proceeds will be donated to the Junior Diabetes Research Foundation. Are first Pelt A Delt event occurred in the spring of 2019 and was a great success. Shout out to our philanthropy chair at the time, Jacob Krupp, for putting together a great event."
            />
            <div className="ui inverted divider"></div>
            <Post 
                title = "Brave the Shave"
                content = "Our First Brave The Shave Occured during the spring semester of 2020. Thanks to the brave brothers who offered up their luscious locks for charity, we were able to raise $2,244.16 for JDRF! Special thanks to philanthropy chair Andy Paskert for pioneering a fun and event."
            />
            <div className="ui inverted divider"></div>
        </div>
    )
}

export default Philanthropy;