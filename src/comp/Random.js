import {React, useState }from 'react';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const Random = () => {
    return (
        <div className="object-none object-right-bottom p-2 pl-4 sticky">

            <Fab style={{backgroundColor:'#17abd9', color:'#fff'}} onClick={Tap}>


            <Add /> 


            </Fab>





        </div>
    )



}

export default Random



function Tap() {


    const [yeet, setyeet] = useState(false)




}