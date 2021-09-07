import React from 'react'
import BookIcon from '@material-ui/icons/Book';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';






const Footer = () => {
return (
    <footer>
    <div className="bg-green-500">
    <div className="flex justify-between p-6 pt-9 ">
        <Logo />    
        <Name />
        <Social />

        
    </div>

    </div>
    </footer>
    )
}


function Logo() {
    return(
        <div className="pr-2 text-white">
           <span > <BookIcon style={{color: 'white' }}/> CourseMe </span>
        </div>
       
    );
}

function Social() {
    return(
        <div>
            <Button href="https://github.com/isahaji" > <GitHubIcon style={{color: 'white' }} /> </Button>
            <Button href="https://twitter.com/iisahaji"  > <TwitterIcon style={{color: 'white' }} /> </Button>
        </div>
    );
}

function Name() {
    return(
        <div className="">
        <p className="text-center text-white" > Made by Isa {new Date().getFullYear()} </p>
        </div>
    );
}

export default Footer
