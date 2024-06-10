import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from "../Home/Menu-home"

function New() {

    return (
        <div>
            <Menu/>
            <div className="welcome">

                <ToastContainer/>
                <div className="content-welcome d-flex-desktop">


                </div>
            </div>
        </div>

    );
}

export default New;
