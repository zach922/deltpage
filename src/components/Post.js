import React from 'react';
import image from './photos/pic1.jpg';

const Post = (props) => {
    return (
        <div className="ui container">
            <h1>{ props.title }</h1>
            <div className="ui grid">
                <div className="eight wide column">
                    <h3>{ props.content }</h3>
                </div>
                <div className="eight wide column">
                    <img className="ui large rounded image" src={image} alt="#"/>
                </div>
            </div>
        </div>
    )
}

export default Post;