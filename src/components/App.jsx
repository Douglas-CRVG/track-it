import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlockContext from "../contexts/blockContext";
import RefreshContext from "../contexts/refreshContext";
import UserDataContext from "../contexts/userDataContext";
import "../css/reset.css";
import Habits from "./Habits/Habits";
import Historic from "./Historic/Historic";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Today from "./Today/Today";

export default function App(){
    const [block, setBlock] = useState(false);
    const [userData, setUserData] = useState();
    const [refresh, setRefresh] = useState(true)

    return(
        <RefreshContext.Provider value={{refresh, setRefresh}}>
            <BlockContext.Provider value={{block, setBlock}}>
                <UserDataContext.Provider value={{userData, setUserData}}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login />}/>
                            <Route path="/cadastro" element={<SignUp />}/>
                            <Route path="/hoje" element={<Today />}/>
                            <Route path="/historico" element={<Historic />} />
                            <Route path="/habitos" element={<Habits />} />
                        </Routes>
                    </BrowserRouter>
                </UserDataContext.Provider>
            </BlockContext.Provider>
        </RefreshContext.Provider>
    );
}