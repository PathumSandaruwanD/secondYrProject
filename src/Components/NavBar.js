import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark  bg-dark shadow d-flex">
        <div class="container-fluid">
        <Link to="/Home" class="navbar-brand nav-link active" >Fitness Center</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
          <li class="nav-item">
                <Link to="/Home" class="nav-link active" >Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/AboutUS" class="nav-link active" >About Us</Link>
            </li>
            <li class="nav-item">
                <Link to="/Services" class="nav-link active" >Services</Link>
            </li>
            <li class="nav-item">
                <Link to="/Gallery" class="nav-link active" >Gallery</Link>
            </li>
            <li class="nav-item">
                <Link to="/Membership" class="nav-link active" >Membership</Link>
            </li>
            <li class="nav-item">
                <Link to="/Registation" class="nav-link active" >Registation</Link>
            </li>
            <li class="nav-item">
                <Link to="/Login" class="nav-link active" >Login</Link>
            </li>
            <li class="nav-item">
                <Link to="/Contact" class="nav-link active" >Contact Us</Link>
            </li>
            
          </ul>
          
        </div>
        </div>
    </nav>
    );
}
export default NavBar;