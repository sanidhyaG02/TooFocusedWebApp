import React from "react";

function Navbar(){
    return (
        <nav className="navbar navbar-light justify-content-between px-5 mt-1">
            <a className="navbar-brand mx-5" href="#">
                <img src="./images/icons8-working-with-a-laptop-32.png" width="20" height="20" className="d-inline-block align-top mt-1"></img>
                <b>TooFocused</b>
            </a>
            <h5 className="mx-5">Fuel your productivity!</h5>
        </nav>
    );
}

export default Navbar;