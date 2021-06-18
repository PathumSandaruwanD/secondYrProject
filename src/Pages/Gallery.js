import React from 'react'; 
import Img1 from '../ExtraComponents/Images/im8.jpg'


function Gallery(){

    return (
        <div className="container-fluid bg-dark">
            <div className="row ">
                <div className="col-13">
                    <img src={Img1} className="img-fluid"></img>
                </div>
            </div>
        </div>
      );

}
export default Gallery;