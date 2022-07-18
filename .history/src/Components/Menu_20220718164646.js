import { Link } from "react-router-dom";
function Menu() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="/Todolist">Home</Link> | <Link to="Todolist">Todolist</Link>|{" "}
                <Link to="Data">form Data</Link>
            </nav>
        </div>
    );
}
export default Menu;
