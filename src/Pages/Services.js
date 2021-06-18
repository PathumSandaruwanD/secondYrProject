import React from 'react'; 
import CardSlider from '../Components/CardSlider';
import Img1 from '../ExtraComponents/Images/im7.jpg'

function Services(){

    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-12">
                    <div className="main image">
                        <img src={Img1} className="img-fluid"></img>
                    </div>
                </div>
            </div>
            <div className="row">
               <div className="col-12">
                    <CardSlider />
               </div>
           </div>
        </div>
      );

}
export default Services;