import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlockContext from "../contexts/blockContext";
import "../css/reset.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Today from "./Today/Today";
export default function App(){
    const [block, setBlock] = useState(false);

    return(
        <BlockContext.Provider value={{block, setBlock}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/cadastro" element={<SignUp />}/>
                    <Route path="/hoje" element={<Today />}/>
                </Routes>
            </BrowserRouter>
        </BlockContext.Provider>  
    );
}

//font-family: 'Playball', cursive;  fonte do topo