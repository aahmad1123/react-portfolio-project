import {Link, NavLink} from "react-router-dom"
function Nav(){
    return(
        <div>
          <ul className="nav-list">
            <li><NavLink to="/" activeClassName = "active">About</NavLink></li>
            <li><NavLink to="/Contact" activeClassName = "active">Contact</NavLink></li>
            <li><NavLink to="/Portfolio" activeClassName = "active">Portfolio</NavLink></li>
            <li><NavLink to="/Resume" activeClassName = "active">Resume</NavLink></li>
          </ul>
        </div>
    )
};

export default Nav;