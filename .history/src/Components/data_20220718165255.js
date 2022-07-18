import React, { useState } from "react";
import "../scss/data.css";

const Data = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const checkList = ["JavaScript", "Java", "Python"];
    const [checked, setChecked] = useState([]);

    const [radio, setRadio] = useState("");

    const [user, setUser] = useState({
        name: "",
        password: "",
        checked: [],
        radio: "",
    });

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangePass = (e) => {
        setPassword(e.target.value);
    };

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        // console.log(updatedList);
    };

    const handleRadio = (event) => {
        setRadio(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            name: name,
            password: password,
            checked: checked,
            radio: radio,
        });
    };

    return (
        <div className="App">
            <a href=""></a>
            <h1>Form Get Info User</h1>
            <form style={{ marginTop: "10px" }} onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            onChange={(e) => handleChangeName(e)}
                        />
                    </label>

                    <label>
                        Password:
                        <input
                            type="password"
                            onChange={(e) => handleChangePass(e)}
                        />
                    </label>
                </div>
                <div>
                    <h3>Your gender</h3>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleRadio}
                    />
                    <label htmlFor="html">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleRadio}
                    />
                    <label htmlFor="css">Female</label>{" "}
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        onChange={handleRadio}
                    />
                    <label htmlFor="javascript">Other</label>
                </div>
                <div>
                    <h3>Languages:</h3>
                    {checkList.map((item, index) => (
                        <span key={index}>
                            <input
                                value={item}
                                type="checkbox"
                                onChange={handleCheck}
                            />
                            <span>{item}</span>
                        </span>
                    ))}
                </div>

                <br></br>
                <br></br>
                <input type="submit" value="Submit" className="submit" />
            </form>
            <hr></hr>

            <h3>
                Name: <span>{user.name}</span>
            </h3>
            <hr></hr>
            <h3>
                Password: <span>{user.password}</span>
            </h3>
            <hr></hr>
            <h3>
                Gender: <span>{user.radio}</span>
            </h3>
            <hr></hr>

            <h3>Languages: </h3>

            {user.checked.map((value, index) => (
                <div key={index}>
                    <p>{value}</p>
                </div>
            ))}
            <hr></hr>
        </div>
    );
};

export default Data;
