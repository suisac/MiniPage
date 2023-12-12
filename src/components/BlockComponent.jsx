import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBlock } from '../store/BlockSlice';


const BlockComponent=(props)=>{

    const dispatch=useDispatch();
    
    let {element, ind, setCurrIndex, currIndex,setShow}=props;

    let clientX=element[1];
    let clientY=element[2];
    let fontSize=element[3];
    let fontWeight=element[4];
    let divStyle={position:'fixed', left:`${clientX}px`, top:`${clientY}px`, fontSize:`${fontSize}px`, fontWeight:`${fontWeight}`};

    const handleDrag=(e,element)=>{
        e.dataTransfer.setData("status",'existing');
        e.dataTransfer.setData("blockType",element[0]);
        e.dataTransfer.setData("fontSize",element[3]);
        e.dataTransfer.setData("fontWeight",element[4]);
        e.dataTransfer.setData("text",element[5]);
        e.dataTransfer.setData("index",ind);
    }


    
    const handleElement=(type,text)=>{
        if(type=='Input'){
            return(
                <div className='blockInput'>{text || '|'}</div>
            )
        }else if(type=='Button'){
            return(
                <div className='blockButton'>{text || 'Button'}</div>
            )
        }else
            return(
                <div className='blockCSS'>{text || 'This is a label'}</div>
            )
    }

    const handleEnterPress=(e)=>{
        if(e.key=='Enter'){
            setShow(true);
        }

        if(e.key=='Delete'){
            dispatch(removeBlock(currIndex));
        }
            
    }


    return(

        <div 
            className='active grabbable'
            style={divStyle} 
            tabIndex={0}
            onKeyDown={(e)=>handleEnterPress(e)}
            draggable 
            onDragStart={(e)=>{handleDrag(e,element)}}
        >
            
            {handleElement(element[0],element[5])}
            
        </div>
    )
}

export default BlockComponent;