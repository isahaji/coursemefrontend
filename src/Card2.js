
import React from 'react';
import { Button } from '@material-ui/core';

const Card2 = ({url, title,Desc,link}) => {
    return( 
        <div className="bg-gray-100 flex rounded-md">


        <div className="p-2 ">
        <img  className="h-28 rounded-md w-auto" src={url} alt={Desc} /> 
        </div>
        <div className=" p-2 rounded-lg text-green-500 font-bold">



            {title}

            <div className="font-light text-xs text-blue-300">

                {Desc}

            </div>

        <Button href={link} style={{backgroundColor:'#17AB9'}}>
            Learn More
        </Button>

        </div>
        


        </div>
    )
}

export default Card2