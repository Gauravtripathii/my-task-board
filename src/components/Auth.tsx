import React from 'react';
import axios from 'axios';
import userType from '@/types/userType';

const Auth = ({ authActive, toggleAuthActive }: any) => {
    const [userData, setUserData] = React.useState<userType>({
        email: "",
        password: "",
    });

    const handleSignup = async (event: any) => {
        event.preventDefault();
        await axios.post("/api/signup_user", { email: userData.email, password: userData.password })
            .then(response => {
                if (response.status === 200) {
                    toggleAuthActive();
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleLogin = async (event: any) => {
        event.preventDefault();
        await axios.post("/api/login_user", { email: userData.email, password: userData.password })
            .then(response => {
                if (response.status === 200) {
                    toggleAuthActive();
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className={!authActive ? "hidden" : "bg-white w-full h-screen flex items-center justify-center absolute top-0 left-0"}>
            <form className="flex flex-col gap-3 border gray-1-border rounded-xl p-5">
                <input
                    type="email"
                    placeholder='Email'
                    className="border gray-2-border px-3 py-2 rounded-lg text-[20px] outline-blue-700"
                    value={userData.email} onChange={event => setUserData({ ...userData, email: event.target.value })}
                />
                <input
                    type="password"
                    value={userData.password}
                    placeholder='Passowrd'
                    className="border gray-2-border px-3 py-2 rounded-lg text-[20px] outline-blue-700"
                    onChange={event => setUserData({ ...userData, password: event.target.value })}
                />
                <button onClick={handleLogin} className="bg-blue-700 text-white font-medium flex items-center justify-center border rounded-full border-blue-700 px-5 py-3">Login</button>
                <button onClick={handleSignup} className="bg-blue-700 text-white font-medium flex items-center justify-center border rounded-full border-blue-700 px-5 py-3">Signup</button>
            </form>
        </div>
    )
}

export default Auth;