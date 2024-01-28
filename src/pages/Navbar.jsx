import { NavLink } from "react-router-dom";

export default function Navbar() {
    return(
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}