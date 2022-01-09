import Habit from "./habit/Habit";
import StyledHabits from "./styledHabits";

export default function ContainerHabits(){
    return (
        <StyledHabits>
            <Habit />
            <Habit />
            <Habit />
        </StyledHabits>
    )
}