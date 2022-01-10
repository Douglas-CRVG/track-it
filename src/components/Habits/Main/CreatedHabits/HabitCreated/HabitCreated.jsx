import Button from "./Button/Button";
import StyledHabit from "./styledHabit";
import Week from "./Week/Week";

export default function HabitCreated({name, days}) {
    return(
        <StyledHabit>
            <h1>{name}</h1>
            <Week days={days}/>
            <Button />
        </StyledHabit>
    );
}