import React, { useState } from 'react';

const Signup = () => {

    const [email, setEmail] = useState('');

    const handleEmailField = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordField = (e) => {
    console.log
}

    return (
        <>
            <h3>This Register Form</h3>
            <br />
            <form>
                <input onChange={handleEmailField} type="email" name="email" id="email" placeholder='Provide your email' />
                <br /> <br />
                <input onBlur={handlePasswordField} type="password" name="password" id="password" placeholder='Provide your password' /><br />
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </>
    );
};

export default Signup;