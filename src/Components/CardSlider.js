import React from 'react';
import Img1 from '../ExtraComponents/Images/img15.png';
import Img2 from '../ExtraComponents/Images/img16.png';
import Img3 from '../ExtraComponents/Images/img17.png';
import Img4 from '../ExtraComponents/Images/img18.png';


function CardSlider(){
    return(
        <div class="container text-center" className="homeCard">
        <div class="row text-center">
            
            <div className="col-md-3 ">
                <div className="card shadow ">
                   <img src={Img1} className="img-fluid border-bottom" />
                    <div class="body" className="cardBody">
                    <h5 class="card-title">Hard Abbs</h5>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin. </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card shadow">
                     <img src={Img2} className="img-fluid border-bottom" />

                    <div class="body" className="cardBody">
                    <h5 class="card-title">Personal Traning</h5>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card shadow">
                    <img src={Img3} className="img-fluid border-bottom" />

                    <div class="body" className="cardBody">
                    <h5 class="card-title">Cardio Traning</h5>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card shadow">
                    <img src={Img4} className="img-fluid border-bottom" />

                    <div class="body" className="cardBody">
                    <h5 class="card-title">Cardio Traning</h5>
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.</p>
                    </div>
                </div>
            </div>
            
    
            
        </div>
    </div>

   
    );
}
export default CardSlider;