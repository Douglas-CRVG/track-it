import Button from "./Button/Button";
import HabitDescription from "./habitDescription/HabitDescription";
import StyledHabit from "./styledHabit";

export default function Habit({id, name, done, currentSequence, highestSequence}){
    return(
        <StyledHabit>
            <HabitDescription done={done} name={name} currentSequence={currentSequence} highestSequence={highestSequence} />
            <Button id={id} done={done}/>
        </StyledHabit>
    )
}