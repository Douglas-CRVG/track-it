import Button from "./Button/Button";
import HabitDescription from "./habitDescription/HabitDescription";
import StyledHabit from "./styledHabit";

export default function Habit(){
    return(
        <StyledHabit>
            <HabitDescription />
            <Button />
        </StyledHabit>
    )
}