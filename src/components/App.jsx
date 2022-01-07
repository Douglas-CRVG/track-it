import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../css/reset.css";
import Login from "./Login/Login";
import SignIn from "./SignIn/Signin";
export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/cadastro" element={<SignIn />}/>
            </Routes>
        </BrowserRouter>
        
    );
}

//font-family: 'Playball', cursive;  fonte do topo