import Day from "./Day/Day";
import StyledWeek from "./styledWeek";

export default function Week({block}){
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];
    return(
        <StyledWeek>
            {week.map((day, index) => <Day block={block} key={index} id={index} day={day} />)}
        </StyledWeek>
    )
}