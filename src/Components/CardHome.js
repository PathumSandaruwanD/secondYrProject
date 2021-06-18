import React from 'react';
import Img1 from '../ExtraComponents/Images/img2.jpg';
import Img2 from '../ExtraComponents/Images/img2.jpg';
import Img3 from '../ExtraComponents/Images/img3.jpg';

import {Link} from 'react-router-dom';


function CardHome(){

    return (
            <div class="Container text-center " className="homeCard">
                <div class="row text-center">
                    
                    <div className="col-md-4 ">
                        <div className="card shadow ">
                           <img src={Img1} className="border-bottom img-fluid" />
                            <div class="body">
                            <h5 class="card-title">Hard Abbs</h5>
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                             <img src={Img2} className="border-bottom img-fluid" />

                            <div class="body">
                            <h5 class="card-title txt-warning">Personal Traning</h5>
                            <p class="txt-warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={Img3} className="border-bottom img-fluid" />

                            <div class="body">
                            <h5 class="card-title">Cardio Traning</h5>
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.</p>
                            </div>
                        </div>
                    </div>
                    
            
                    
                </div>
            </div>
    );
}
export default CardHome;