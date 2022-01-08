import Main from "../SignUp/styledMain";
import Inputs from "../others/inputs/Inputs";
import Logo from "../others/logo/Logo";

export default function Login() {

    return(
        <Main>
            <Logo />
            <Inputs func={(e)=> {e.preventDefault(); console.log("olá")}} qntInputs={2} button="Entrar" link="Não tem uma conta? Cadastre-se!" />
        </Main>
    );
}