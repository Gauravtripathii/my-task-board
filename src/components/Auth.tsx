import React from 'react';
import axios from 'axios';
import userType from '@/types/userType';

const Auth = () => {
    const [userData, setUserData] = React.useState<userType>({
        email: "",
        password: "",
    });

    const handleSignup = async (event: any) => {
        event.preventDefault();
        await axios.post("/api/signup_user", { email: userData.email, password: userData.password })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="">
            <form className="">
                <input type="email" value={userData.email} onChange={event => setUserData({ ...userData, email: event.target.value })} />
                <input type="password" value={userData.password} onChange={event => setUserData({ ...userData, password: event.target.value })} />
                <button>Login</button>
                <button onClick={handleSignup}>Signup</button>
            </form>
        </div>
    )
}

export default Auth;