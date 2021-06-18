import React from 'react';

function ContactForm(){
    return(
        <form className="formWeb">
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Name"/>
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Email"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Contact"/>
            </div>
            <div class="mb-3">
                <textarea className="messageBox" class="formControl sppb-form-control" id="exampleInput" rows="6" cols="50" ></textarea>
            </div>
            <div class="auto">
                <button type="submit" class="btn btn-warning btn-lg">Contact</button>
            </div>
        </form>
    );
}
export default ContactForm;