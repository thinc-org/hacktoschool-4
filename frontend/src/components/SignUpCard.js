import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUpCard = () => {
    const [data, setData] = useState({
		username: "",
		password: "",
        role: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
        console.log(input.name,input.value)
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users/register";
			const { data: res } = await axios.post(url, data);
			navigate("/sign-in");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">username:</label>
                    <input type="text" id="username" name="username" onChange={handleChange} value={data.username} required></input>
                    <label htmlFor="password">password:</label>
                    <input type="password" id="password" name="password" onChange={handleChange} value={data.password} required></input>

                    <h2>Please select your role:</h2>
                    <div>
                        <input type="radio" id="student" name="role" value="Student" 
                        onChange={handleChange}
                        required></input>
                        <label htmlFor="student">student</label>
                        
                        <input type="radio" id="instructor" name="role" value="Instructor"
                        onChange={handleChange}></input>
                        <label htmlFor="instructor">instructor</label>
                    </div>
                    {error && <div>{error}</div>}
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </>
    );
};

export default SignUpCard;