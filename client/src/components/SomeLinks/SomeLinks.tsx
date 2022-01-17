import React from 'react'
import "./somelinks.scss"
import Instagram from "../../images/SoMe Icons/Instagram2.png"
import Linkedin from "../../images/SoMe Icons/Linkedin2.png"
import Twitter from "../../images/SoMe Icons/Twitter1.png"
import Facebook from "../../images/SoMe Icons/facebook.png"


function SomeLinks() {
    return (
        <div className='somelinks'>
           <ul>
            <a href="https://www.instagram.com/biathlon24com/"><img src={Instagram} alt="" /></a> 
            <a href=""><img src={Linkedin} alt="" /></a>  
            <a href=""><img src={Twitter} alt="" /></a> 
            <a href=""><img src={Facebook} alt="" /></a>  
            </ul>
        </div>
    )
}

export default SomeLinks
