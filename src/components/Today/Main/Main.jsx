import ContainerHabits from "./containerHabits/ContainerHabits";
import StyledMain from "./styledMain";
import Title from "./title/Title";

export default function Main(){
    return(
        <StyledMain>
            <Title />
            <ContainerHabits />
        </StyledMain>
    )
}