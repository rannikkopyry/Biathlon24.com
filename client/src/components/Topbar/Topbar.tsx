import React from "react"
import "./topbar.scss"
import Logo from "../../images/logo.png"

export default function Topbar(){
    return (
        <div className="topbar">
            <div className="wrapper">
            <img src={Logo} alt="" />
            </div>
            </div>  
    )
}