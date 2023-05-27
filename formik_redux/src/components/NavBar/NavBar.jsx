import classes from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    
    const navigate = useNavigate();

    return (
        <nav className={classes.nav__bar}>
            <div>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/create")}>Create Post</button>
                <button>All Posts</button>
            </div>
            <div>
                <input type="search" placeholder="Search"></input>
            </div>
        </nav>
    );
}

export default NavBar;