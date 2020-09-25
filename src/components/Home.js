import React from 'react';
import JumboTron from './JumboTron';
import ContentBox from './ContentBox';
import './stylesheets/Home.css';
import Pic from './photos/pic1.jpg'

const Home = () => {
    return (
        <div>
            <div className="ui image">
                <JumboTron />
            </div>
            <div className="ui grid">
                <ContentBox className="four wide column"
                    photo={ Pic }
                    content = "Why Delt?"
                />
                <ContentBox className="four wide column"
                    photo={ Pic }
                    content = "Our Values"
                />
                <ContentBox className="four wide column"
                    photo={ Pic }
                    content = "The Creed"

                />
                <ContentBox className="four wide column"
                    photo={ Pic }
                    content = "Why Delt?"

                />
            </div>
        </div>
    )
}

export default Home;