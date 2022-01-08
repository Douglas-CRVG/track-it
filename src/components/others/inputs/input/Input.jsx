import { useContext, useState } from "react";
import BlockContext from "../../../../contexts/blockContext";
import StyledInput from "./styledInput";

export default function Input({
    placeholder,
    type,
    name,
    data,
    setData
}){
    const [input, setInput] = useState("");
    const {block} = useContext(BlockContext);

    function getInput(target){
        setInput(target.value);
        setData({...data, [target.name]: target.value});
    }

    return(
        <StyledInput block={block} type={type} placeholder={placeholder} onChange={(e) => getInput(e.target)} value={input} name={name} />
    );
}