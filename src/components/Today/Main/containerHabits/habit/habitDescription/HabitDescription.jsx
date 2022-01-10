import Sequence from "./sequence/Sequence";
import StyledDescription from "./styledDescription";

export default function HabitDescription({done, name, currentSequence, highestSequence}) {
    return(
        <StyledDescription>
            <h1>{name}</h1>
            <Sequence done={done} currentSequence={currentSequence} highestSequence={highestSequence} />
        </StyledDescription>
    )
}