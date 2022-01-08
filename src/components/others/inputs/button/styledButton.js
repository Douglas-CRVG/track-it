import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #52b6ff;
    font-size: 20px;
    color: #FFFFFF;
    ${(props) => props.block? "pointer-events: none; opacity: 0.7;":""}
`;

export default StyledButton;