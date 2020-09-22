import React from 'react';
import './stylesheets/Contact.css';

const Contact = () => {

    const onSubmit = () => {
        console.log("submit");
    };

    return (
        <div className="contact">
            <div className="ui form container">
                    <div className="ui two column very relaxed grid ">
                        <div className="ui vertical divider">
                            and/or
                        </div>
                        <form action="" className="column">
                            <h2>Contact Us</h2>
                            <div class="required field">
                                <label>E-mail</label>
                                <input type="email" placeholder="test@example.com" />
                            </div>
                            <div class="required field">
                                <label>Subject</label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="required field">
                                <label>Text</label>
                                <textarea></textarea>
                            </div>
                            <div onClick={ onSubmit } type="submit" className="ui submit button">Submit</div>
                        </form>
                        <div className="column">
                            <h2>Support Us</h2>
                            <div>
                                <p>If you would like to support our organization to continue in giving back to our community and making men that live lives of excellence our fraternity's Venmo and cashapp accounts are listed here! Any amount donated or any form of support given is always greatly appreciated.</p>
                            </div>
                            <div>
                                <a href="https://"><i id="socials" className="vimeo icon"/></a> 
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;