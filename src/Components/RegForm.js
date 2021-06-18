import React from 'react';

function RegForm(){
    return (

        <div className="container">
            <form>
            <div class="row g-3">
                <div className="col md-6">
                    <label for="inputFName" class="form-lable">First Name</label>
                    <input  class="form-control" id="inputFName" required></input>
                </div>
                <div className="col md-6">
                    <label for="inputLName" class="form-lable">Last Name</label>
                    <input type="text" class="form-control" id="inputLName" required></input>
                </div>
            </div>
            <div class="row g-3">    
                <div className="col md-12">
                    <label for="inputAddress1" class="form-lable">Address Line One</label>
                    <input type="text" class="form-control" id="inputAddress1" required/>
                </div>
            </div>
            <div class="row g-3">  
                <div className="col md-12">
                    <label for="inputAddress2" class="form-lable">Address Line Two</label>
                    <input type="text" class="form-control" id="inputAddress2" required/>
                </div>
            </div>
             <div class="row g-3">
                <div className="col md-6">
                    <label for="inputCity" class="form-lable">City</label>
                    <input type="text" class="form-control" id="inputCity" required/>
                </div>
                <div class="col md-4">
                    <label for="inputProvince" class="form-label">Province</label>
                    <select id="inputProvince" class="form-select" required>
                    <option selected>...</option>
                    <option value="Western">Western</option>
                    <option value="Central">Central</option>
                    <option value="Southern">Southern</option>
                    <option value="Nothern">Nothern</option>
                    <option value="North Central">North Central</option>
                    <option value="Estern">Estern</option>
                    <option value="Uva">Uva</option>
                    <option value="Sabaragamuwa">Sabaragamuwa</option>
                    <option value="North Western">North Western</option>
                    </select>
                    
                </div>
                <div class="col md-4"></div>
            </div> 
            <div class="row g-3">
                <div className="col md-6">
                    <label for="mobile" class="form-lable">Mobile</label>
                    <input  class="form-control" id="mobile" required></input>
                </div>
                <div className="col md-6">
                    <label for="email" class="form-lable">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="name@gmail.com" />
                </div>
            </div>
            </form>
            <div class="row g-3">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="genderRadio" id="maleRadiobutton" value="Male"/>
                    <label class="form-check-label" for="maleRadiobutton">Male</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="genderRadio" id="femaleRadiobutton" value="Female"/>
                    <label class="form-check-label" for="femaleRadiobutton">Female</label>
                </div>
            </div>
            <div class="row g-3">
                <div className="col md-6">
                    <label for="height" class="form-lable">Height</label>
                    <input type="text" class="form-control" id="height" placeholder="cm" required />
                </div>
                <div className="col md-6">
                    <label for="weight" class="form-lable">Weight</label>
                    <input type="text" class="form-control" id="weight" placeholder="kg" required />
                </div>
            </div>
            <hr></hr>
            <div class="row g-3">
                <div class="col md-12">
                <p>Please note any medical that could prevent certain acivities or requier adjusment to the traning program
                    (i.e. lifting restriction,mobility limitation, etc.). Such restriction are provided by a physcian.
                </p>
                </div>
            </div>
            <div class="row g-3">
                <input type="text" class="form-control" id="medicalCondition" placeholder="Condition & Restriction" />
                <input type="text" class="form-control" id="medicalCondition" placeholder="Condition & Restriction" />
                <input type="text" class="form-control" id="medicalCondition" placeholder="Condition & Restriction" />
            </div>
            <div>
                <br/>
                <p>Emergency Contacts</p>
            <div class="row g-3">
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactName" placeholder="Name" required/>
                </div>
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactRelation" placeholder="Relationship" required/>
                </div>
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactNumber" placeholder="Contact Number" required />
                </div>
            </div>
            <br/>
            <div class="row g-3">
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactName" placeholder="Name" />
                </div>
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactRelation" placeholder="Relationship" />
                </div>
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactNumber" placeholder="Contact Number" />
                </div>
            </div>
            </div>
            <div class="row g-3">
                <h5>Declaration</h5>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="declaration" id="declarationStatement" value="declarationStatement1" required/>
                    <label class="form-check-label" for="declarationStatement1">
                        <p>I here by declare that I oblige to the rules and regulations of the institute and the information provided above is true and correct according to the best of my knowledge. And I confirm that the above provided information regarding my health condition is true and correct and I'm totally responsible for any health complication that may occur apart from the information provided above</p>
                    </label>
                </div>
                <hr/>
            </div>
            <div class="row g-3">
                <h5>Registation Payment</h5>
    
        <div class="col-lg-7 mx-auto">
            <div class="bg-white rounded-lg  p-5">
                <ul role="tablist" class="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                    <li class="nav-item"><a data-toggle="pill" href="#nav-tab-card" class="nav-link active rounded-pill"><i class="fa fa-credit-card"></i>
                            Credit Card
                        </a></li>
                    <li class="nav-item"><a data-toggle="pill" href="#nav-tab-paypal" class="nav-link rounded-pill"><i class="fa fa-paypal"></i>
                            Paypal
                        </a></li>
                    <li class="nav-item"><a data-toggle="pill" href="#nav-tab-bank" class="nav-link rounded-pill"><i class="fa fa-university"></i>
                            Bank Transfer
                        </a></li>
                </ul>
                <div class="tab-content">
                    <div id="nav-tab-card" class="tab-pane fade show active">
                       
                        <form role="form">
                            <div class="form-group"><label for="username">Full name (on the card)</label><input type="text" name="username" placeholder="Jeff Doe" required class="form-control" /></div>
                            <div class="form-group"><label for="cardNumber">Card number</label>
                                <div class="input-group"><input type="text" name="cardNumber" placeholder="Your card number" class="form-control" required />
                                    <div class="input-group-append"><span class="input-group-text text-muted"><i class="fa fa-cc-visa mx-1"></i><i class="fa fa-cc-amex mx-1"></i><i class="fa fa-cc-mastercard mx-1"></i></span></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-8">
                                    <div class="form-group"><label><span class="hidden-xs">Expiration</span></label>
                                        <div class="input-group"><input type="number" placeholder="MM" name class="form-control" required /><input type="number" placeholder="YY" name class="form-control" required /></div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group mb-4"><label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                                            <i class="fa fa-question-circle"></i></label><input type="text" required class="form-control" /></div>
                                </div>
                            </div><button type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm </button>
                        </form>
                    </div>
                    <div id="nav-tab-paypal" class="tab-pane fade">
                        <p>Paypal is easiest way to pay online</p>
                        <p><button type="button" class="btn btn-primary rounded-pill"><i class="fa fa-paypal mr-2"></i> Log into my Paypal</button></p>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}
export default RegForm;
