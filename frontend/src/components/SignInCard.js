import React from 'react';

const SignInCard = () => {
    return (
        <>
            <div>
                <form>
                    <label htmlFor="username">username:</label>
                    <input type="text" id="username" name="username" required></input>
                    <label htmlFor="password">password:</label>
                    <input type="password" id="password" name="password" required></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </>
    );
};

export default SignInCard;