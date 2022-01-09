import { useContext } from "react";
import UserDataContext from "../../../contexts/userDataContext";
import StyledHeader from "./styledHeader";

export default function Header(){
    const {userData} = useContext(UserDataContext);

    console.log(userData);

    return(
        <StyledHeader>
            <h1>TrackIt</h1>
            <img src={userData.image} alt={`Imagem do usuário ${userData.name}`} />
        </StyledHeader>
    );
}