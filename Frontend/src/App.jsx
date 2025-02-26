import  React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start.jsx';
import UserLogin from './pages/UserLogin.jsx';
import UserSignUp from './pages/UserSignUp.jsx';
import CaptainLogin from './pages/CaptainLogin.jsx';
import CaptainSignUp from './pages/CaptainSignUp.jsx';
import Home from './pages/Home.jsx';
import { UserDataContext } from './context/UserContext.jsx';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Start />}/>    
                <Route path='/login' element={<UserLogin />}/>
                <Route path='/signup' element={<UserSignUp />}/>
                <Route path='/CaptainLogin' element={<CaptainLogin />}/>
                <Route path='/CaptainSignUp' element={<CaptainSignUp />}/>
                <Route path='/Home' element={<Home />}/>
            </Routes>    
        </div>
    )


}
export default App;
