import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { searchText, searchGender, showUsers } from "../../features/userDetailSlice";
import CreateForm from "../CreateForm/CreateForm";
import ShowData from "../ShowData/ShowData";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const NavBar = () => {

    const [selectedItem, setSelectedItem] = useState();
    const [searchTextData, setSearchTextData] = useState("");
    const [searchGenderValue, setSearchGenderValue] = useState("");
    const dispatch = useDispatch();
    const allPosts = useSelector((state)=>state.app.users);

    useEffect(() => {
        dispatch(searchText(searchTextData));
        dispatch(searchGender(searchGenderValue));
    }, [searchTextData, searchGenderValue]);

    useEffect(() => {
        document.getElementById("searchText").disabled = true;
        dispatch(showUsers());
    }, [])


    return (
        <nav className={classes.nav__bar}>
            <div>
                <Link to="/" element={<NavBar />}>Home</Link>
                <div>
                    <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
                        <option>Directory Options</option>
                        <option>
                            <Link to="/add" element={<CreateForm />}> Add new employee </Link>
                        </option>
                        <option>
                            <Link to="/showDirectory" element={<ShowData />}> Show employee directory ({allPosts.length}) </Link>
                        </option>
                    </select>
                    <ArrowDropDownIcon className={classes.dropDown} />
                </div>
                
                <div style={{display: "none"}} className={classes.tags}>
                    <span>Hardware Designing</span>
                    <span>IT</span>
                    <span>Security Analyst</span>
                    <span>Actor</span>
                    {/* <span>Software Architect</span> */}
                </div>
            </div>
            <div>
                <input id="searchText" disabled type="search" placeholder="Search based on name" 
                onChange={(e) => setSearchTextData(e.target.value)}></input>
            </div>
        </nav>
    );
}

export default NavBar;