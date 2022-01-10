import styled from "styled-components";

const StyledDay = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    ${props => props.select? `
    border: 1px solid #CFCFCF;
    background-color: #CFCFCF;
    color: #ffffff;
    ` : `
    border: 1px solid #D4D4D4;
    background-color: #ffffff;
    color: #dbdbdb;
    ` }
    ${(props) => props.block && "pointer-events: none;"}
`;

export default StyledDay;