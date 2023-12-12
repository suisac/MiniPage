import React,{useState} from "react";
import MenuItems from "./MenuItems";
import Button  from "react-bootstrap/Button";

const SideBar=()=>{

    return(
        <div className='sideBar'>
            <div className='heading'>
                BLOCKS
            </div>
            <div>
                <MenuItems/>
            </div>
        </div>
    )
}

export default SideBar;