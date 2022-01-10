import { useContext, useEffect, useState } from "react";
import UserDataContext from "../../../contexts/userDataContext";
import { getHabitsToday } from "../../others/axios/axios";
import ContainerHabits from "./containerHabits/ContainerHabits";
import StyledMain from "./styledMain";
import Title from "./title/Title";
import styled from "styled-components";
import HabitsContext from "../../../contexts/habitsContext";

export default function Main(){
    const [habits, setHabits] = useState([]);

    const {userData} = useContext(UserDataContext);

    useEffect(()=>{
        getHabitsToday(userData.token).then((response)=>{
            setHabits(response.data);
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err.response);
        })
    },[userData.token]);

    return(
        <StyledMain>
            <Title />
            <HabitsContext.Provider value={{habits, setHabits}}>
                {habits.length === 0? <NoHabits>Você não tem nenhum hábito cadastrado para hoje. Vá para "Hábitos" para criar.</NoHabits> : <ContainerHabits habits={habits} />}
            </HabitsContext.Provider>
        </StyledMain>
    )
}

const NoHabits = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`;