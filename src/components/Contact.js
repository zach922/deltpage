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
                        <div classNames="required field">
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
                            <p>If you would like to support our organization and help us continue our mission; making men of excellence, please consider donating. We accept money donations through our chapter's Venmo and CashApp, which are listed below! Donations of any size and type are greatly appreciated. Thank you.</p>
                        </div>
                        <div>
                            <a href="https://"><span className="myicon icon-venmo"></span></a> 
                            @oudelts
                        </div>
                        <div>
                            <a href="https://"><span className="myicon icon-cashapp"></span></a> 
                            $oudelts
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;