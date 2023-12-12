import React,{useState,useEffect} from 'react';
import ItemForm from './ItemForm';
import BlockComponent from './BlockComponent';
import { useSelector } from "react-redux";

const Home=()=>{
    const [show,setShow]=useState(false);
    const [currBlockInfo, setCurrBlockInfo] =useState([]);
    const [currIndex, setCurrIndex]=useState(-1);

    const blockItems = useSelector((store) => store.block.blockArray);

        
    useEffect(()=>{
        localStorage.setItem('MyWidgetArray', JSON.stringify(blockItems));
    },[blockItems])


    const handleDrop=(e)=>{
        setCurrIndex(-1);
        const status=e.dataTransfer.getData("status");
        const blockType=e.dataTransfer.getData("blockType");

        if(status==='new'){
            const xPos=e.dataTransfer.getData("xPos");
            const yPos=e.dataTransfer.getData("yPos");
            const clientX=e.clientX-xPos;
            const clientY=e.clientY-yPos;
            setCurrBlockInfo([blockType, clientX,clientY]);
        }else{
            const clientX=e.clientX;
            const clientY=e.clientY;
            const fontSize=e.dataTransfer.getData("fontSize");
            const fontWeight=e.dataTransfer.getData("fontWeight");
            const text=e.dataTransfer.getData("text");
            const ind=e.dataTransfer.getData("index");            
            setCurrIndex(ind);
            setCurrBlockInfo([blockType, clientX,clientY,fontSize,fontWeight,text]);

        }
        
        setShow(true);
    }

    const handleDragOver=(e)=>{
        e.preventDefault()
    }

    const handleClick=(element,index)=>{
        setCurrBlockInfo(element);
        setCurrIndex(index);
    }


    return(
        <div className='home' onDrop={handleDrop} onDragOver={handleDragOver}>
                {blockItems?.map((element, index)=>{
                    return (<div id={index} key={index} onClick={()=>{handleClick(element,index)}} className='blockOnClick'>
                        <BlockComponent 
                            key={index} 
                            element={element} 
                            ind={index} 
                            setCurrIndex={setCurrIndex} 
                            currIndex={currIndex} 
                            setShow={setShow}
                            />
                    </div>)
                })}
            <ItemForm 
                show={show} 
                setShow={setShow} 
                currBlock={currBlockInfo} 
                currIndex={currIndex}/>
        </div>
    )
}

export default Home;