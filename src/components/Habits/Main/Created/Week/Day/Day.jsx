import StyledDay from "./styledDay";

export default function Day({id, day}){
    return(
        <StyledDay type="button" id={id}>
            {day}
        </StyledDay>
    )
}