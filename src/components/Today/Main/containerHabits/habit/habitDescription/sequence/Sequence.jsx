import { StyledSpan } from "../../../../title/styledTitle";
import StyledSequence from "./styledSequence";

export default function Sequence({done, currentSequence, highestSequence}){
    return(
        <StyledSequence>
            <p>Sequência atual: {done? <StyledSpan>{currentSequence} dias</StyledSpan> : <span>{currentSequence} dias</span>}</p>
            <p>Seu recorde: {highestSequence===currentSequence && currentSequence>0? <StyledSpan>{highestSequence} dias</StyledSpan> : <span>{highestSequence} dias</span>}</p>
        </StyledSequence>
    );
}