import React from 'react';
import { Fab, Button } from '@material-ui/core';

import axios from "axios";

function instance() {
    const instanceBacked = axios.create({
        baseURL: 'http://coursemebackend.azurewebsites.net',
    })
}

export default instance 


function Tapper() {
    return(

        <div>
        <button className="pd-2 bg-red-700 placeholder-green-200 ">


        <Fab>

            ClickHere

        </Fab>



        </button>
        </div>
    )
}