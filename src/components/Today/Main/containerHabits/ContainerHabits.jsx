import Habit from "./habit/Habit";
import StyledHabits from "./styledHabits";

export default function ContainerHabits({habits}){
    return (
        <StyledHabits>
            {habits.map(({id, name, done, currentSequence, highestSequence}) => <Habit key={id} qntHabits={habits.length} id={id} name={name} done={done} currentSequence={currentSequence} highestSequence={highestSequence}/>)}
        </StyledHabits>
    )
}