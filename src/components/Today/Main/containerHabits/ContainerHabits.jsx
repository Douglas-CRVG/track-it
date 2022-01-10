import Habit from "./habit/Habit";
import StyledHabits from "./styledHabits";

export default function ContainerHabits({habits}){
    return (
        <StyledHabits>
            {habits.map(({id, name, done, currentSequence, highestSequence}) => <Habit key={id} name={name} done={done} currentSequence={currentSequence} highestSequence={highestSequence}/>)}
        </StyledHabits>
    )
}