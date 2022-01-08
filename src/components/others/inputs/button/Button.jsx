import { useContext } from "react";
import BlockContext from "../../../../contexts/blockContext";
import StyledButton from "./styledButton";
import { ThreeDots } from "react-loader-spinner";

export default function Button ({button}){
    const {block} = useContext(BlockContext);
    return(
        <StyledButton block={block}>
            {block? <ThreeDots type="ThreeDots" color="#FFFFFF" height={13} width={51} />:button}
        </StyledButton>
    )
}