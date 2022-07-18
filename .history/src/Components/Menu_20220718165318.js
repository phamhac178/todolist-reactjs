import { Link } from "react-router-dom";
function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <nav>
                <Link to="Todolist">Todolist</Link>|{" "}
                <Link to="Data">form Data</Link>
            </nav>
        </div>
    );
}
export default Menu;
