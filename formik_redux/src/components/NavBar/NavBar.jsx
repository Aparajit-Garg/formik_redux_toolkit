import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CreateForm from "../CreateForm/CreateForm";
import ShowData from "../ShowData/ShowData";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { searchText, searchGender, showUsers } from "../../features/userDetailSlice";

const NavBar = () => {

    const [searchTextData, setSearchTextData] = useState("");
    const [searchGenderValue, setSearchGenderValue] = useState("");
    const dispatch = useDispatch();
    const allPosts = useSelector((state)=>state.app.users);

    useEffect(() => {
    dispatch(searchText(searchTextData));
    dispatch(searchGender(searchGenderValue));
    }, [searchTextData, searchGenderValue]);

    useEffect(() => {
        dispatch(showUsers());
    }, [])

    return (
        <nav className={classes.nav__bar}>
            <div>
                <Link to="/" element={<NavBar />}>Home</Link>
                <Link to="/create" element={<CreateForm />}> Add new employee </Link>
                <Link to="/showPosts" element={<ShowData />}> Show employee directory ({allPosts.length}) </Link>
                <div>
                    <span>
                        <input type="radio" name="gender" value="All" defaultChecked onClick={(e)=> setSearchGenderValue(e.target.value)}/>
                        <label> All </label>
                    </span>
                    <span>
                        <input type="radio" name="gender" value="Male" onClick={(e)=> setSearchGenderValue(e.target.value)} />
                        <label> Male </label>
                    </span>
                    <span>
                        <input type="radio" name="gender" value="Female" onClick={(e)=> setSearchGenderValue(e.target.value)}/>
                        <label> Female </label>
                    </span>
                </div>
            </div>
            <div>
                <input type="search" placeholder="Search based on name" 
                onChange={(e) => setSearchTextData(e.target.value)}></input>
            </div>
        </nav>
    );
}

export default NavBar;