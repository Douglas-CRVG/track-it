import Main from "./styledMain";
import Inputs from "../others/inputs/Inputs";
import Logo from "../others/logo/Logo";

export default function SignIn() {

    return(
        <Main>
            <Logo />
            <Inputs func={()=> alert("oi")} qntInputs={4} button="Cadastrar" link="Já tem uma conta? Faça login!" />
        </Main>
    );
}