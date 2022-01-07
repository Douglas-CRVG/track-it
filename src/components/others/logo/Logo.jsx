import styled from "styled-components";
import logo from "../../../assets/logo.png"

export default function Logo(){
    return(
        <Img src={logo} alt="Logo TrackIt" />
    );
}

const Img = styled.img`
    width: 180px;
    height: 180px;
`;