import styled from "styled-components";

const StyledButtons = styled.div`
    display: flex;
    justify-content: flex-end;

    button{
        all: unset;
        padding: 7px 17px;
        border-radius: 5px;
        ${(props) => props.block? "pointer-events: none; opacity: 0.7;":""}
    }

    button:nth-child(1){
        background-color: #ffffff;
        color: #52B6FF;
    }

    button:nth-child(2){
        background-color: #52B6FF;
        color: #ffffff;
    }
`;

export default StyledButtons;