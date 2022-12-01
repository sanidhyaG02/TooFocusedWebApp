import React from "react";
import Fields from "./Components/Fields";
import Navbar from './Components/Navbar/userFormNavbar';
import { Link } from "react-router-dom";

function ForgetPass(){
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row mt-3 align-items-center">
                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="./images/image-hero-cropped.png" alt="" className="img-fluid h-50 mt-5"/>
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <h1 className="text-center mb-3">Forgot Password?</h1>
                        <h6 className="text-center text-muted mb-3">Enter the email address associated with your account to reset your password</h6>
                        <form>
                            <div className="row mx-5">
                                <Fields iconName="email" type="email" idName="email" placeholder="Email"/>
                            </div>
                            <div className="text-center mt-1">
                                <button type="submit" className="btn btn-primary">Confirm</button>
                                <p className="text-muted">Not a Member yet? <Link to="/register">Register Now!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default ForgetPass;