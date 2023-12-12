import React from 'react';
import { useDispatch} from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addBlock, updateBlock } from '../store/BlockSlice';

const ItemForm=(props)=>{

    const dispatch = useDispatch();

    const {show, setShow, currBlock, currIndex}=props;

    const handleSubmit=(e)=>{
        e.preventDefault();
        let formText=e.target[0].value;
        let formX=e.target[1].value;
        let formY=e.target[2].value;
        let fontSize=e.target[3].value;
        let fontWeight=e.target[4].value;
        if(currIndex!==-1) 
            dispatch(updateBlock({'id':currIndex, 'arr':[currBlock[0],formX,formY,fontSize,fontWeight,formText]}));
        else
            dispatch(addBlock([currBlock[0],formX,formY,fontSize,fontWeight,formText])) 
    }

    return (
        <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="Modal"
                backdrop='static'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="Modal Form">
                        Edit {currBlock[0]}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4" controlId="FormHeader">
                        <Form.Label>Text</Form.Label>
                        <Form.Control type="text" placeholder={'This is a '+ currBlock[0]?.toLowerCase()} defaultValue={currBlock[5]}/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="FormX">
                        <Form.Label>X</Form.Label>
                        <Form.Control type="number" min="0" defaultValue={currBlock[1]}/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="FormY">
                        <Form.Label>Y</Form.Label>
                        <Form.Control type="number" min="0" defaultValue={currBlock[2]}/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="FormSize">
                        <Form.Label>Font Size</Form.Label>
                        <Form.Control type="number" min="10" max="50" defaultValue={currBlock[3] || 16}/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="FormWeight">
                        <Form.Label>Font Weight</Form.Label>
                        <Form.Control type="number" min="400" defaultValue={currBlock[4] || 400}/>
                    </Form.Group>
                    <Button className="my-4" type="submit" onClick={()=>setShow(false)}>Save Changes</Button>
                </Form>
                </Modal.Body>
             </Modal>
    )
}

export default ItemForm;