import Button from "./Button/Button";
import HabitDescription from "./habitDescription/HabitDescription";
import StyledHabit from "./styledHabit";

export default function Habit({id, name, done, currentSequence, highestSequence}){
    return(
        <StyledHabit>
            <HabitDescription name={name} currentSequence={currentSequence} highestSequence={highestSequence} />
            <Button />
        </StyledHabit>
    )
}