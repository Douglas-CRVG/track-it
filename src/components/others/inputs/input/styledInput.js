import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    outline: none;
    padding: 11px;
    color: #afafaf;
    ${(props) => props.block? "pointer-events: none; background-color: #f2f2f2;":""}

    ::placeholder{
        color: #dbdbdb;
    }
`;

export default StyledInput;