import React from "react";
import Fields from "../Components/Fields";
import Navbar from '../Components/Navbar/userFormNavbar';
import { Link, useNavigate  } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row mt-3 align-items-center">
                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="./images/image-hero-cropped.png" alt="" className="img-fluid h-50 mt-5"/>
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <h1 className="text-center mb-3">Sign In!</h1>
                        <form>
                            <div className="row mx-5">
                                <Fields iconName="person" type="text" idName="userName" placeholder="User Name"/>
                                <Fields iconName="lock" type="password" idName="password" placeholder="Password"/>
                            </div>
                            <div className="text-center mt-1">
                                <button type="submit" className="btn btn-primary" onClick={()=>{
                                    navigate('/home');
                                }}>LogIn</button>
                                <p className="text-muted mb-1 mt-3">Not a Member yet? <Link to="/register">Register Now!</Link></p>
                                <Link className="my-auto" to="/forget-password">Forgotten Password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Login;