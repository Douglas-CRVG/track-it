import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlockContext from "../contexts/blockContext";
import UserDataContext from "../contexts/userDataContext";
import "../css/reset.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Today from "./Today/Today";
export default function App(){
    const [block, setBlock] = useState(false);
    const [userData, setUserData] = useState();
    console.log(userData);

    return(
        <BlockContext.Provider value={{block, setBlock}}>
            <UserDataContext.Provider value={{userData, setUserData}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />}/>
                        <Route path="/cadastro" element={<SignUp />}/>
                        <Route path="/hoje" element={<Today />}/>
                    </Routes>
                </BrowserRouter>
            </UserDataContext.Provider>
        </BlockContext.Provider>  
    );
}

//font-family: 'Playball', cursive;  fonte do topo