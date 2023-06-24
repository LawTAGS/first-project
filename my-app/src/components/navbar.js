import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav class="nav-bar">
            <div className="link-wrapper"><Link to="/">Home</Link></div>
            <div className="link-wrapper"><Link to="/login">Login</Link></div>
            <div className="link-wrapper"><Link to="/signup">Sign Up</Link></div>
        </nav>
    );
}