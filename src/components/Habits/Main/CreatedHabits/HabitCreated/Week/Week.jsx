import Day from "./Day/Day";
import StyledWeek from "./styledWeek";

export default function Week(){
    const week = [
        {
            id: 1,
            day: "D"
        },
        {
            id: 2,
            day: "S"
        },
        {
            id: 3,
            day: "T"
        },
        {
            id: 4,
            day: "Q"
        },
        {
            id: 5,
            day: "Q"
        },
        {
            id: 6,
            day: "S"
        },
        {
            id: 7,
            day: "S"
        }
    ];
    return(
        <StyledWeek>
            {week.map(({id, day}, index) => <Day key={index} id={id} day={day} />)}
        </StyledWeek>
    )
}