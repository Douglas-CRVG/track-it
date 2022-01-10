import StyledDay from "./styledDay";

export default function Day({id, day}){
    return (
        <StyledDay bool={id}>
            {day}
        </StyledDay>
    )
}