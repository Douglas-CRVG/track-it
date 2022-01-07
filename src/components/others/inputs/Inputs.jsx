import Form from "./styledInputs";
import { Link } from "react-router-dom";
import Input from "./input/Input";
import Button from "./button/Button";
import styled from "styled-components";

export default function Inputs ({
    func,
    qntInputs,
    button,
    link
}){

    const inputs = [
        {
            name: "email",
            type: "email"
        },
        {
            name: "senha",
            type: "password"
        },
        {
            name: "nome",
            type: "text"
        },
        {
            name: "foto",
            type: "url"
        }
    ];
    return (
        <Form onSubmit={func}>
            {inputs.filter((input, index) => index < qntInputs).map(({type, name}, index) => <Input key={index} type={type} name={name}/>)}
            <Button button={button}/>
            <StyledLink to="/">{link}</StyledLink>
        </Form>
    );
}

const StyledLink = styled(Link)`
    color: #52b6ff;
    font-size: 14px;
`;