
import React from 'react';
import { Button } from '@material-ui/core';

const Card2 = ({url, title,Desc,link}) => {
    return( 
        <div className="bg-gray-100 flex rounded-md">


        <div className="p-2 ">
        <img  className="h-28 rounded-md w-auto sm:h-auto w-12" src={url} alt={Desc} /> 
        </div>
        <div className=" p-2 rounded-lg text-green-500 font-bold">



            {title}

            <div className="font-light text-xs text-blue-300">

                {Desc}

            </div>

        .<Button href={link} style={{backgroundColor:'#17AB9'}} className="sm:text-sm">
            Learn More
        </Button>

        </div>
        


        </div>
    )
}

function Cc() {
    return(
        <div className='mt-4 text-gray-800 text-3xl font-bold cursor-pointer'> JS



        </div>
    )
}