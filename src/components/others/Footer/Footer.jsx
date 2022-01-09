import { Link } from "react-router-dom";
import Progress from "./progress/Progress";
import StyledFooter from "./styledFooter";
import styled from "styled-components";

export default function Footer(){
    return(
        <StyledFooter>
            <StyledLink to="/">Habitos</StyledLink>
            <Link to="/hoje"><Progress /></Link>
            <StyledLink to="/historico">Historico</StyledLink>
        </StyledFooter>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    color: #52B6FF;
`