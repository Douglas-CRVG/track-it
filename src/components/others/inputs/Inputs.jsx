import Form from "./styledInputs";
import { Link } from "react-router-dom";
import Input from "./input/Input";
import Button from "./button/Button";
import styled from "styled-components";

export default function Inputs ({
    func,
    qntInputs,
    button,
    link,
    data,
    setData
}){
    const inputs = [
        {
            placeholder: "email",
            type: "email",
            name: "email"
        },
        {
            placeholder: "senha",
            type: "password",
            name: "password"
        },
        {
            placeholder: "nome",
            type: "text",
            name: "name"
        },
        {
            placeholder: "foto",
            type: "url",
            name: "image"
        }
    ];
    return (
        <Form onSubmit={func}>
            {inputs.filter((input, index) => index < qntInputs).map(({placeholder, type, name}, index) => <Input key={index} placeholder={placeholder} type={type} name={name} data={data} setData={setData} />)}
            <Button button={button}/>
            <StyledLink to={button === "Entrar"? "/cadastro" : "/"}>{link}</StyledLink>
        </Form>
    );
}

const StyledLink = styled(Link)`
    color: #52b6ff;
    font-size: 14px;
`;