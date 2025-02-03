import React, {useState} from "react";
import { Link } from "react-router-dom";
//perform two way binding

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData]  = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        })
        setEmail('');
        setPassword('');
    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"></img>
                <form onSubmit={(e) =>{
                    submitHandler(e);
                }}>
                    <h3 className="text-lg font-medium mb-2">What's your email?</h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                        value={email}
                        onChange={(e) =>{
                            setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="email@example.com"
                        required />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                        type="password"
                        placeholder="password"
                        required
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }} />
                    <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                        Login</button>
                </form>
                <p className="text-center">New Here? <Link to="/signup" className="text-blue-600">Create An Account </Link></p>
            </div>
            <div>
                <Link to="/CaptainLogin" className="flex items-center justify-center bg-[#10b461] text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign In As Captain</Link>
            </div>

        </div>
    )
}

export default UserLogin;