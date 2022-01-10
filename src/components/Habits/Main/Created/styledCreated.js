import styled from "styled-components";

const StyledCreated = styled.form`
    padding: 18px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-bottom: 29px;

    input{
        width: 100%;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 20px;
        padding: 9px 11px 11px;
        ${(props) => props.block && "pointer-events: none; background-color: #f2f2f2;"}
    }

    input::placeholder{
        color: #DBDBDB;
    }
`;

export default StyledCreated;