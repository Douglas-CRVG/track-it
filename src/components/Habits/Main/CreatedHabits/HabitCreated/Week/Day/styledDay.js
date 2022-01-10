import styled from "styled-components";

const StyledDay = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.bool? `
    border: 1px solid #CFCFCF;
    background-color: #CFCFCF;
    color: #ffffff;
    ` : `
    border: 1px solid #D4D4D4;
    background-color: #ffffff;
    color: #dbdbdb;
    ` }
`;

export default StyledDay;