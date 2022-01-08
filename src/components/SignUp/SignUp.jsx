import Main from "./styledMain";
import Inputs from "../others/inputs/Inputs";
import Logo from "../others/logo/Logo";
import { useContext, useState } from "react";
import { postSignUp } from "../others/axios/axios";
import BlockContext from "../../contexts/blockContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [bodySignUp, setBodySignUp] = useState({
        email: '',
        password: '',
        name: '',
        image: ''
    });

    const {setBlock} = useContext(BlockContext);

    const redirectLogin = useNavigate();

    function handleSignUp(e) {
        e.preventDefault();
        setBlock(true)

        postSignUp(bodySignUp).then((response)=>{
            setBlock(false);
            redirectLogin("/", { replace: true });
        })
        .catch((err)=>{
            setBlock(false);
            alert("Preencha corretamente os dados para cadastro.");
        });
    }

    return(
        <Main>
            <Logo />
            <Inputs func={handleSignUp} qntInputs={4} button="Cadastrar" link="Já tem uma conta? Faça login!" data={bodySignUp} setData={setBodySignUp}/>
        </Main>
    );
}