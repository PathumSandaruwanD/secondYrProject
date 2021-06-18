import React from 'react'; 
import Slider from '../Components/Slider';
import Img1 from '../ExtraComponents/Images/img12.png';
import Img2 from '../ExtraComponents/Images/img14.png';
import CardHome from '../Components/CardHome';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";



function Home(){
    return (
        
        <div class="container-fluid bg-dark" >
            <Slider  />
            <div class="row text-center my-5">
                <div class="col-md-6">
                    <p class="h3 text-warning px-5">From the moment you walk through the door you know Gymbase is a unique place</p>
                    <p class="text-warning px-4">When we created Gym Base, we knew we wanted to be more than just a simple gym. Having worked in traditional gyms in the past, we knew we needed to create a concept that would provide our members with the most effective tools for success. This meant we needed to offer a wide range of classes both for children and adults.</p>
                    <p class="text-warning px-4">This also meant we needed to provide a learning environment run by experienced and successful coaches. However, our most important goal was to create a welcoming atmosphere and community in which everyone feels a sense of belonging.</p>
                    
                </div>
                <div class="col-md-6">
                <img src={Img1} class="img-fluid float-start"></img>
                </div>
                
            </div>

                
            <div class="bg-warning">
                <p class="text-dark h2 text-center my-5"><u>Traning Programs</u></p>
                <CardHome />
            </div>
            <div class="row">
               <img src={Img2} class="img-fluid mx-auto "></img>
            </div>
    
        </div>
      );
}
export default Home; 