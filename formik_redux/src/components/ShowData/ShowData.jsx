import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, showUsers } from "../../features/userDetailSlice";
import classes from "./ShowData.module.css";
import Modal from "../Modal/Modal";
import EditUser from "../EditUser/EditUser";
import { Link } from "react-router-dom";

const ShowData = () => {

    const [id, setId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const {users, loading} = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(showUsers());
    }, []);

    if (loading)
        return <h1>Loading...</h1>
    
    return (
      <React.Fragment>
        {showModal && <Modal id={id} setShowModal={setShowModal}/>}
        <div className={classes.header}>
            {users && users.map((user) => {
                return (
                    <div className={classes.card} key={user.id}>
                        <span>
                            <span>Name: </span>
                            <span> {user.name} </span>
                        </span>
                        <span>
                            <span> Gender: </span>
                            <span> {user.gender}</span>
                        </span>
                        <span>
                            <span>Email: </span>
                            <span> {user.email}</span>
                        </span>
                        <span>
                            <button onClick={() => [setId(user.id), setShowModal(true)]}> View </button>
                            <Link to={`/edit/${user.id}`} element={<EditUser />}> Edit </Link>
                            <button onClick={() => dispatch(deleteUsers(user.id))}> Delete </button>
                        </span>
                    </div>
                )
                
            })}
        </div>
      </React.Fragment>  
    );
}

export default ShowData;