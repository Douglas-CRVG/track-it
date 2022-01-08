import { useContext } from "react";
import BlockContext from "../../../../contexts/blockContext";
import StyledButton from "./styledButton";

export default function Button ({button}){
    const {block} = useContext(BlockContext);
    return(
        <StyledButton block={block} >{block? "...":button}</StyledButton>
    )
}