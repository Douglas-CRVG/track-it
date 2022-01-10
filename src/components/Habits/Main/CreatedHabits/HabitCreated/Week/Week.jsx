import Day from "./Day/Day";
import StyledWeek from "./styledWeek";

export default function Week({days}){
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];
    return(
        <StyledWeek>
            {week.map((day, index) => <Day key={index} id={days?.includes(index)} day={day} />)}
        </StyledWeek>
    )
}