import HabitCreated from "./HabitCreated/HabitCreated";
import StyledContainer from "./styledContainer";

export default function ContainerCreatedHabits({newHabit}){
    return(
        <StyledContainer>
            {newHabit.map(({id, name, days}) =><HabitCreated key={id} name={name} days={days}/>)}
        </StyledContainer>
    )
}