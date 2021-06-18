import React from 'react'; 
import Img1 from '../ExtraComponents/Images/im9.jpg';


function AboutUs(){

    return (
      
            
        <div className="container-fluid  bg-dark">
            <div className="row">
                <div className="col-12">
                    <img src={Img1} className="img-fluid"></img>
                </div>
            </div>
        </div>
    
      );

}
export default AboutUs;