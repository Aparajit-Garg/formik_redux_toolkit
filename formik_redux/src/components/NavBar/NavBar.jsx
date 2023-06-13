import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import classes from "./NavBar.css";
import { Link } from "react-router-dom";
import { searchText, searchGender, showUsers } from "../../features/userDetailSlice";
import CreateForm from "../CreateForm/CreateForm";
import ShowData from "../ShowData/ShowData";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const NavBar = () => {

    const [selectedItem, setSelectedItem] = useState([]);
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
        document.getElementById("tagOptions").style.display = 'none';
        dispatch(showUsers());
    }, [])

    const toggleClass = (e) => {
        if (e.target.classList.contains("itemSelected")) {
            e.target.classList.remove("itemSelected")
            setSelectedItem(prev => {
                let index = prev.indexOf(e.target.outerText)
                if (index !== -1)
                    prev.splice(index, 1)
                return [...prev]
            })
        }
        else {
            e.target.classList.add("itemSelected")
            setSelectedItem(prev => [...prev, e.target.outerText])
        }
    }


    return (
        <nav className="nav__bar">
            <div>
                <Link to="/" element={<NavBar />}>Home</Link>
                <Link to="/add" element={<CreateForm />}> Add new employee </Link>
                <Link to="/showDirectory" element={<ShowData />}> Show employee directory ({allPosts.length}) </Link>

                <div style={{display: "none"}} id='tagOptions' className="tags">
                    <span id="hardware" onClick={toggleClass}>Hardware Designing</span>
                    <span id="it" onClick={toggleClass}>IT</span>
                    <span id="security" onClick={toggleClass}>Security Analyst</span>
                    <span id="actor" onClick={toggleClass}>Actor</span>
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