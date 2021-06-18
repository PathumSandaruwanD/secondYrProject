import React from 'react';
import RegForm from '../Components/RegForm';
import Img1 from '../ExtraComponents/Images/im2.jpg';

function Registation(){
    return(
        <div className="regForm" class="container-fluid">
            <div className="row">
                <div className="col-12 bg-dark">
                    <img src={Img1} className="img-fluid"></img>
                </div>
            </div>
            <div class="col-12">
                <div className="topic">
                    <h1 class="display-4">Registation</h1>
                    <h6>Member Registation 2021/2022</h6>
                </div>
            </div>
            <div class="col-12 card border-warning" className="regFormCard">
                <RegForm />
            </div>
        </div>
    );
}
export default Registation;