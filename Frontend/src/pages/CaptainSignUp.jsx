import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password,
            fullName:{
                firstName: firstName,
                lastName: lastName
            }
        })
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }
    return (
        <div>
            <div className="p-7 h-screen flex flex-col justify-between">
                <div>

                    <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg"></img>
                    <form onSubmit={(e) => {
                        submitHandler(e);
                    }}>
                        <h3 className="text-lg font-medium mb-2">What's our Captain's name?</h3>
                        <div className="flex gap-4 mb-5">
                            <input
                                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                                type="text"
                                placeholder="First Name"
                                required />
                            <input
                                className="bg-[#eeeeee] w-1/2   rounded px-4 py-2 w-full text-lg placeholder:text-base"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                type="text"
                                placeholder="Last Name"
                                required />
                        </div>
                        <h3 className="text-lg font-medium mb-2">What's our Captain's email?</h3>
                        <input
                            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="email"
                            placeholder="email@example.com"
                            required />
                        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                        <input
                            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                            type="password"
                            placeholder="password"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                            Register</button>
                    </form>
                    <p className="text-center">Already Have a Account? <Link to="/CaptainLogin" className="text-blue-600">Login Here</Link></p>
                </div>
                <div>
                    <p className="text-[10px] leading-tight"> This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span>.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default CaptainSignUp;