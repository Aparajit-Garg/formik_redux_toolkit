import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUsers } from "../../features/userDetailSlice";
import classes from "./ShowData.module.css";


const ShowData = () => {

    const dispatch = useDispatch();
    const {users, loading} = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(showUsers());
    }, []);

    if (loading)
        return <h1>Loading...</h1>
    
    return (
      <React.Fragment>
        <div className={classes.header}>
            {users && users.map((user) => {
                return (
                    <div className={classes.card} key={user.id}>
                        <span>
                            <span>Name: </span>
                            <span> {user.name} </span>
                        </span>
                        <span>
                            <span>Age: </span> 
                            <span> {user.age}</span>
                        </span>
                        <span>
                            <span> Gender: </span>
                            <span> {user.gender}</span>
                        </span>
                        <span>
                            <span>Email: </span>
                            <span> {user.email}</span>
                        </span>
                    </div>
                )
                
            })}
        </div>
      </React.Fragment>  
    );
}

export default ShowData;