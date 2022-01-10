import StyledMain from "../../Today/Main/styledMain";
import styled from "styled-components";

export default function Main(){
    return (
        <StyledMain>
            <Title>Histórico</Title>
            <DescriptionHistoric>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </DescriptionHistoric>
        </StyledMain>
    );
}

const Title = styled.h1`
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    padding: 28px 0;
`;

const DescriptionHistoric = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`;