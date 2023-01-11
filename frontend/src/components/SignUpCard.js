import React from 'react';

const SignUpCard = () => {
    return (
        <>
            <div>
                <form>
                    <label htmlFor="username">username:</label>
                    <input type="text" id="username" name="username" required></input>
                    <label htmlFor="password">password:</label>
                    <input type="password" id="password" name="password" required></input>

                    <h2>Please select your role:</h2>
                    <input type="radio" id="student" name="role" value="student" required></input>
                    <label for="student">student</label>
                    <input type="radio" id="instructor" name="role" value="instructor"></input>
                    <label for="instructor">instructor</label>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </>
    );
};

export default SignUpCard;