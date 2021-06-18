import React from 'react'; 
import ContactForm from '../Components/ContactForm';
import Img1 from '../ExtraComponents/Images/im3.jpg';



function ContactUs(){

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 bg-dark">
                    <img src={Img1} className="img-fluid"></img>
                </div>
            </div>

            <div className="row ">
                <div className="col-3"></div>
                <div className="topic">
                    <h2 className="topics" class="display-4">Contact Us</h2>
                    <h5 className="h5">If any question, don't hesitate to contact us.</h5>
                </div>
                <div class="col-3"></div>
            </div>
            <div className="row">
                <div className="col">
                    <ContactForm />
                </div>
                <div className="col-1"></div>
                <div className="col">
                   <div className="contact">
                        <p className="contactId" class="text-uppercsae"><b>Address</b></p>
                            <p className="contactIdchildren">No:100, 3rd Floor, Basill’s Building, Galle Road, Mount Lavinia, 
                            <br/>Sri Lanka.</p>
                        
                        <p className="contactId" class="text-uppercsae"><b>Contacts</b></p>
                            <p className="contactIdchildren">011-1231234</p>
                            <p className="contactIdchildren">011-2342345</p>
                            
                        <p className="contactId" class="text-uppercsae"><b>Email Address</b></p>
                            <p className="contactIdchildren">infoexample@fitnessnation.lk</p>
                            <p className="contactIdchildren">infoexample1@fitnessnation.lk</p>
            
                   </div>
                </div>
            </div>
        </div>
      );

}
export default ContactUs;