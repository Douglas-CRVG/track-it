import StyledMain from "../../Today/Main/styledMain";
import ContainerCreatedHabits from "./CreatedHabits/ContainerCreatedHabits";
import Created from "./Created/Created";
import Title from "./Title/Title";
import styled from "styled-components";
import { useState } from "react";
import CreateHabit from "../../../contexts/createHabit";

export default function Main() {
    const [create, setCreate] = useState(false);

    return(
        <StyledMain>
            <CreateHabit.Provider value={{create, setCreate}}>
                <Title />
                {create && <Created />}
            </CreateHabit.Provider>
            <ContainerCreatedHabits />
            <NoCreated>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoCreated>
        </StyledMain>
    )
}

const NoCreated = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`;