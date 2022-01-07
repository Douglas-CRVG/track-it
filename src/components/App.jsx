import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../css/reset.css";
import SignIn from "./SignIn/Signin";
export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />}/>
            </Routes>
        </BrowserRouter>
        
    );
}

//font-family: 'Playball', cursive;  fonte do topo