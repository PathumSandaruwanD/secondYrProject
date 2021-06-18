import React from 'react';
import Icon1 from '../ExtraComponents/Images/icon4.png';
import { Link } from 'react-router-dom';

function Footer(){

    return(
        
        <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-3 item social text-center"><img class="img-fluid footer-logo" src={Icon1} />
                        <p class="text-center footer-logo-text ">The longest running gym in Colombo. Owned and operated by a personal trainer with over 10 years experience.</p>
                    </div>
                    <div class="col-sm-4 col-md-3 item-srv">
                        <p className="h4">Social Media</p>
                        <div><Link to="/Home" class="nav-link active">Home</Link></div>
                        
                    </div>
                    <div class="col-sm-4 col-md-3 item-srv">
                        <p className="h4">Quick Links</p>
                        <div><Link to="/Home" class="nav-link active">Home</Link></div>
                        <div><Link to="/AboutUs" class="nav-link active">About Us</Link></div>
                        <div><Link to="/Services" class="nav-link active">Services</Link></div>
                        <div><Link to="/Gallery" class="nav-link active">Gallery</Link></div>
                        <div><Link to="/Membership" class="nav-link active">Membership</Link></div>
                        <div><Link to="/Registation" class="nav-link active">Registation</Link></div>
                        <div><Link to="/Login" class="nav-link active">Login</Link></div>
                        <div><Link to="/Contact" class="nav-link active">Contact Us</Link></div>
                        
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Contact Information</h3>
                        <ul>
                            <li class="contactInfo"><i class="fa fa-home contactInfo"></i> No:100, 3rd Floor, Basill’s Building, Galle Road, Mount Lavinia,Sri Lanka.</li>
                            <br/>
                            <li class="contactInfo"><i class="fa fa-envelope contactInfo"></i> Email: infoexample@fitnessnation.lk</li>
                            <br/>
                            <li class="contactInfo"><i class="fa fa-phone contactInfo"></i> Contact:011-2342345</li>
                        </ul>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
}
export default Footer;