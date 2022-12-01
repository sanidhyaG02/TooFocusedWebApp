import React from "react";
import Fields from "./Components/Fields";
import Navbar from './Components/Navbar/userFormNavbar';
import { Link } from "react-router-dom";

function Register(){
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row mt-3 align-items-center">
                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="./images/image-hero-cropped.png" alt="" className="img-fluid h-50 mt-5"/>
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <h1 className="text-center mb-3">Register Here!</h1>
                        <form>
                            <div className="row mx-5">
                                
                                <Fields iconName="person" type="text" idName="name" placeholder="Name"/>
                                <Fields iconName="person" type="text" idName="userName" placeholder="User Name"/>
                                <Fields iconName="email" type="email" idName="email" placeholder="Email"/>
                                <Fields iconName="lock" type="password" idName="password" placeholder="Password"/>
                                <Fields iconName="lock" type="password" idName="confirmPassword" placeholder="Confirm Password"/>
                            </div>
                            <div className="text-center mt-1">
                                <button type="submit" className="btn btn-primary">Register Now</button>
                                <p className="text-muted">Already a user? <Link to="/login">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Register;