import { useContext, useEffect, useState } from "react";
import UserDataContext from "../../../contexts/userDataContext";
import { getHabitsToday } from "../../others/axios/axios";
import ContainerHabits from "./containerHabits/ContainerHabits";
import StyledMain from "./styledMain";
import Title from "./title/Title";
import styled from "styled-components";

export default function Main(){
    const [habits, setHabits] = useState([]);

    const {userData} = useContext(UserDataContext);

    console.log(userData.token);

    useEffect(()=>{
        getHabitsToday(userData.token).then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err.response);
        })
    },[userData.token]);

    return(
        <StyledMain>
            <Title />
            {habits.length === 0? <NoHabits>Você não tem nenhum hábito criado. Vá para "Hábitos" para criar.</NoHabits> :<ContainerHabits />}
        </StyledMain>
    )
}

const NoHabits = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`;