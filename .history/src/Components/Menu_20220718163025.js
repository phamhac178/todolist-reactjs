import { Link } from "react-router-dom";

function ME() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="about">About</Link>
            </nav>
        </div>
    );
}
