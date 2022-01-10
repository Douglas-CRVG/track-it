import StyledSequence from "./styledSequence";

export default function Sequence({currentSequence, highestSequence}){
    return(
        <StyledSequence>
            <p>Sequência atual: <span>{currentSequence} dias</span></p>
            <p>Seu recorde: <span>{highestSequence} dias</span></p>
        </StyledSequence>
    );
}