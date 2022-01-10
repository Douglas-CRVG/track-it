import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 10px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    h1{
        font-family: 'Playball', cursive;
        font-size:39px;
        color: #ffffff;
    }

    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;

export default StyledHeader;