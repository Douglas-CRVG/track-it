import Main from "../SignUp/styledMain";
import Inputs from "../others/inputs/Inputs";
import Logo from "../others/logo/Logo";
import { useContext, useState } from "react";
import BlockContext from "../../contexts/blockContext";
import { postLogin } from "../others/axios/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [bodyLogin, setBodyLogin] = useState({
        email: '',
        password: '',
    });

    const {setBlock} = useContext(BlockContext);
    const redirectRoute = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        setBlock(true)

        postLogin(bodyLogin).then((response)=>{
            console.log(response);
            setBlock(false);
            redirectRoute("/hoje", { replace: true })
        })
        .catch((err)=>{
            console.log(err.response);
            setBlock(false);
            alert("Preencha corretamente os dados para entrar.");
        });
    }

    return(
        <Main>
            <Logo />
            <Inputs func={handleLogin} qntInputs={2} button="Entrar" link="Não tem uma conta? Cadastre-se!" data={bodyLogin} setData={setBodyLogin}/>
        </Main>
    );
}