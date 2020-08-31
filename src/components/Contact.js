import React from 'react';

const Contact = () => {
    return (
        <div className="ui form container">
            <div class="required field">
                <label>E-mail</label>
                <input type="email" placeholder="joe@schmoe.com" />
            </div>
            <div class="required field">
                <label>Subject</label>
                <input type="text" placeholder="" />
            </div>
            <div className="required field">
                <label>Text</label>
                <textarea></textarea>
            </div>
            <div class="ui submit button">Submit</div>
        </div>
    )
}

export default Contact;