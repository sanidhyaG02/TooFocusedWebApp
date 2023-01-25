import React from "react";
import * as Mui from '@mui/material';
import Chart from './Chart';
import Navbar from '../Components/Navbar/userFormNavbar';
import Orders from "./Orders";
export default function dashboard() {

    return (
        <>
        <Navbar />
        <Chart/>
        <Orders/>
        </>
        
    );
}