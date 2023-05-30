import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CreateForm from "../CreateForm/CreateForm";
import ShowData from "../ShowData/ShowData";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { searchText } from "../../features/userDetailSlice";

const NavBar = () => {

    const [searchTextData, setSearchTextData] = useState("");
    const dispatch = useDispatch();
    const allPosts = useSelector((state)=>state.app.users);

    useEffect(() => {
        console.log(searchTextData);
        dispatch(searchText(searchTextData));
    }, [searchTextData]);

    return (
        <nav className={classes.nav__bar}>
            <div>
                <Link to="/" element={<NavBar />}>Home</Link>
                <Link to="/create" element={<CreateForm />}> Create Post </Link>
                <Link to="/showPosts" element={<ShowData />}> Show Posts ({allPosts.length}) </Link>
                <div>
                    <input type="radio" name="gender" value="All" defaultChecked />
                    <label> All </label>
                    <input type="radio" name="gender" value="Male" />
                    <label> Male </label>
                    <input type="radio" name="gender" value="Female" />
                    <label> Female </label>
                </div>
            </div>
            <div>
                <input type="search" placeholder="Search" 
                onChange={(e) => setSearchTextData(e.target.value)}></input>
            </div>
        </nav>
    );
}

export default NavBar;