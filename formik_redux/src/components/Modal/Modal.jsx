import { useEffect } from 'react'
import classes from "./Modal.module.css";
import { useSelector } from 'react-redux';

const Modal = ({id, setShowModal}) => {

    useEffect(() => {
        
    })

    const data = useSelector((state)=>state.app.users.filter(user => {
        return user.id === id;
    }));
    
    return (
        <div className={classes.modalBackground}>
            <div className={classes.modalContainer}>
                <span>Name: {data[0].name}</span>
                <span>Email: {data[0].email}</span>
                <span>Age: {data[0].age}</span>
                <span>Gender: {data[0].gender}</span>
                <span>Field: {data[0].field}</span>
                <button onClick={()=>setShowModal(false)}> Close </button>
            </div>

        </div>
    )
}

export default Modal;