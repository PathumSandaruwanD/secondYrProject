import React from 'react';

import Slider1 from '../ExtraComponents/Images/im6.jpg';
import Slider2 from '../ExtraComponents/Images/im5.jpg';
import Slider3 from '../ExtraComponents/Images/im4.jpg';

function Slider(){
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
                
                <div class="carousel-item active">
                    
                    <img src={Slider1} class="d-block max-width: 100% w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Fitness Center</h2>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                </div>
                <div class="carousel-item">
                    <img src={Slider2} class="d-block max-width: 100% w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Fitness Center</h2>
                        <p>Some representative placeholder content for the first slide.</p>
                     </div>
                </div>
                <div class="carousel-item">
                    <img src={Slider3}class="d-block max-width: 100% w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Fitness Center</h2>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                </div>
            </div>
            

        </div>
    );
}
export default Slider;  