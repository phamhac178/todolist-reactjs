import { Link } from "react-router-dom";
function Menu() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="Todolist">Todolist</Link>
                <Link to="/">Home</Link> | <Link to="Todolist">Todolist</Link>
            </nav>
        </div>
    );
}
export default Menu;
