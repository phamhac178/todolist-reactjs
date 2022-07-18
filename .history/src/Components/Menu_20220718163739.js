import { Link } from "react-router-dom";
function Menu() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="Todolist">About</Link>
            </nav>
        </div>
    );
}
export default Menu;
