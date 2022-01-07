import StyledInput from "./styledInput";

export default function Input({name, type}){
    return(
        <StyledInput type={type} placeholder={name} />
    );
}