import React from "react";

const MenuItems=()=>{
    const items=['Label','Input','Button'];

    const handleDrag=(e, blockType)=>{

        let offSetLeft=e.nativeEvent.srcElement.offsetLeft;
        let offSetTop=e.nativeEvent.srcElement.offsetTop;
        let xPos=e.clientX-offSetLeft;
        let yPos=e.clientY-offSetTop;
        e.dataTransfer.setData("status",'new');
        e.dataTransfer.setData("blockType",blockType);
        e.dataTransfer.setData("xPos",xPos);
        e.dataTransfer.setData("yPos",yPos);
    }

    const listIcon=()=>{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
        )
    }



    return(
        <div>
            {items?.map((item)=>
                <div 
                className='menuItem grabbable'
                key={item}
                draggable
                onDragStart={(e)=>{handleDrag(e,item)}}
                >
                 {listIcon()}  {item}
            </div>
            )}
        </div>
    )
}

export default MenuItems;
