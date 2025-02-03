import React, {useState} from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        })
        setEmail('');
        setPassword('');
    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
        <div>
            <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg"></img>
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
            <p className="text-center">Join our Fleet? <Link to="/CaptainSignup" className="text-blue-600">Register as a Captain </Link></p>
        </div>
        <div>
            <Link to="/login" className="bg-[#d5622d] flex items-center justify-center bg-[#10b461] text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign In As User</Link>
        </div>

    </div>
    )
}

export default CaptainLogin;