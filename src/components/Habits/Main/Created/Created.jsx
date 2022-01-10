import Buttons from "./Buttons/Buttons";
import StyledCreated from "./styledCreated";
import Week from "./Week/Week";

export default function Created(){
    return(
        <StyledCreated>
            <input type="text" placeholder="nome do hábito" />
            <Week />
            <Buttons />
        </StyledCreated>
    );
}