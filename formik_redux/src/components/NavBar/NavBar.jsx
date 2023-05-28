import CreateForm from "../CreateForm/CreateForm";
import ShowData from "../ShowData/ShowData";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className={classes.nav__bar}>
            <div>
                <Link to="/" element={<NavBar />}>Home</Link>
                <Link to="/create" element={<CreateForm />}> Create Post </Link>
                <Link to="/showPosts" element={<ShowData />}> Show Posts </Link>
            </div>
            <div>
                <input type="search" placeholder="Search"></input>
            </div>
        </nav>
    );
}

export default NavBar;