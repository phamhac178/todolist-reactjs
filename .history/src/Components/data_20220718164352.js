import React, { useState } from "react";

const data = () => {
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

export default data;
