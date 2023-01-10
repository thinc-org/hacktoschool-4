import React from 'react';

const SignInCard = () => {
    return (
        <>
            <div>
                <form>
                    <label htmlFor="username">username:</label>
                    <input type="text" id="username" name="username"></input>
                    <label htmlFor="password">password:</label>
                    <input type="text" id="password" name="password"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </>
    );
};

export default SignInCard;