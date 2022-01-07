import Main from "../SignIn/styledMain";
import Inputs from "../others/inputs/Inputs";
import Logo from "../others/logo/Logo";

export default function Login() {

    return(
        <Main>
            <Logo />
            <Inputs func={()=> alert("oi")} qntInputs={2} button="Entrar" link="Não tem uma conta? Cadastre-se!" />
        </Main>
    );
}