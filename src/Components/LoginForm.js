import React from 'react';
import {Link} from 'react-router-dom';

function LoginForm(){
    return(
        <div className="row ">
            <div className="col-8">
                <form> 
                    <div class="form-group">
                        <label for="emailInput">Email address</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="passwordInput">Password</label>
                        <input type="password" class="form-control" id="passwordInput" placeholder="Password"></input>
                    </div>
                    <button type="submit" class="btn btn-warning btn-rounded text-center">Submit</button>
                </form>
            </div>
        </div>
        
    );
}
export default LoginForm;