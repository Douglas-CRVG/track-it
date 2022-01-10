import StyledDay from "./styledDay";

export default function Day({id, day}){
    return (
        <StyledDay id={id}>
            {day}
        </StyledDay>
    )
}