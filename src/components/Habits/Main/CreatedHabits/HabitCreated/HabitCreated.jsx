import Button from "./Button/Button";
import StyledHabit from "./styledHabit";
import Week from "./Week/Week";

export default function HabitCreated() {
    return(
        <StyledHabit>
            <h1>Ler 1 capítulo de livro</h1>
            <Week />
            <Button />
        </StyledHabit>
    );
}