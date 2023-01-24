import React from "react";
import * as Mui from '@mui/material';
import Multiselect from 'multiselect-react-dropdown';
import student from '../static/student.jpg';
import HomeNavbar from '../Components/Navbar/homeNavbar';

export default function Profile(){

    const randomTags=[ 'psychology', 'history', 'computer science', 'random bullshit', 'adult', 'english', 'politics'];

    return (
        <>
            <HomeNavbar/>
            <div className="container rounded bg-white mt-1 mb-1">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle img-fluid mt-5" height="150" src={student}/>
                            <span className="font-weight-bold">Riya Sen</span>
                            <span className="text-black-50">Super_Model_Me!Riya123</span>
                            <a className="small" href="">Change your username</a>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels mb-0">Name</label>
                                    <input type="text" className="form-control" placeholder="First name" value=""/>
                                </div>
                                <div className="col-md-6">
                                    <label className="labels mb-0">Surname</label>
                                    <input type="text" className="form-control" value="" placeholder="Surname"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels mb-0">Email ID</label>
                                    <input type="text" className="form-control" placeholder="Enter email id" value=""/>
                                </div>
                                <div className="col-md-12 mt-1">
                                    <label className="labels mb-0">Mobile Number</label>
                                    <input type="text" className="form-control" placeholder="Enter phone number" value=""/>
                                </div>
                                <div className="col-md-12 mt-1">
                                    <label className="labels mb-0">Address Line 1</label>
                                    <input type="text" className="form-control" placeholder="Enter address line 1" value=""/>
                                </div>
                                <div className="col-md-12 mt-1">
                                    <label className="labels mb-0">Address Line 2</label>
                                    <input type="text" className="form-control" placeholder="Enter address line 2" value=""/>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label className="labels mb-0">City/District</label>
                                    <input type="text" className="form-control" placeholder="City" value=""/>
                                </div>
                                <div className="col-md-6">
                                    <label className="labels mb-0">State/Region</label>
                                    <input type="text" className="form-control" value="" placeholder="State"/>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-md-6">
                                    <label className="labels mb-0">Country</label>
                                    <input type="text" className="form-control" placeholder="Country" value=""/>
                                </div>
                                <div className="col-md-6">
                                    <label className="labels mb-0">PostCode</label>
                                    <input type="text" className="form-control" value="" placeholder="ZipCode"/>
                                </div>
                            </div>
                            <div className="mt-3 text-center">
                                <button className="btn btn-primary" type="button">Save Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="h4">Preferences</span>
                                <button className="btn btn-primary btn-sm" type="button">Save</button>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels mb-0">
                                        Interested Topics 
                                    </label>
                                    <p className="small text-muted mb-0">Posts & questions on these topics will be shown more on your feed</p>
                                    <Multiselect options={randomTags} isObject={false} placeholder="Topics"/>
                                </div>
                                <div className="col-md-12 mt-3 d-flex justify-content-between">
                                    <h5>Mentorship</h5>
                                    <Mui.Switch size="small" />    
                                </div>
                                <div className="col-md-12 mt-1">
                                    <label className="labels mb-0">
                                        Mentorship Skills
                                    </label>
                                    <p className="small text-muted mb-0">Tell us what you'd like to mentor on</p>
                                    <Multiselect options={randomTags} isObject={false} placeholder="Skills"/>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label className="labels mb-0">
                                        Mentoring Introduction
                                    </label>
                                    <p className="small text-muted mb-0">Tell potential mentees why they should request you as mentor</p>
                                    <textarea className="form-control" rows="3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}