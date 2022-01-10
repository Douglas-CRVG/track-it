import Sequence from "./sequence/Sequence";
import StyledDescription from "./styledDescription";

export default function HabitDescription({name, currentSequence, highestSequence}) {
    return(
        <StyledDescription>
            <h1>{name}</h1>
            <Sequence currentSequence={currentSequence} highestSequence={highestSequence} />
        </StyledDescription>
    )
}