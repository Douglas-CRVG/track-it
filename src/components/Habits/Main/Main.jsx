import StyledMain from "../../Today/Main/styledMain";
import ContainerCreatedHabits from "./CreatedHabits/ContainerCreatedHabits";
import Created from "./Created/Created";
import Title from "./Title/Title";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import CreateHabit from "../../../contexts/createHabit";
import { getListHabits } from "../../others/axios/axios";
import UserDataContext from "../../../contexts/userDataContext";
import NewHabitContext from "../../../contexts/newHabitContext";

export default function Main() {
    const [create, setCreate] = useState(false);
    const [newHabit, setNewHabit] = useState([]);

    const {userData} = useContext(UserDataContext);

    useEffect(()=>{
        getListHabits(userData.token).then((response)=>{
            setNewHabit(response.data);
        }).catch((err)=>{
            console.log(err.response);
        });
    },[userData.token, create])

    return(
        <NewHabitContext.Provider value={{newHabit, setNewHabit}}>
            <StyledMain>
                <CreateHabit.Provider value={{create, setCreate}}>
                    <Title />
                    {create && <Created />}
                </CreateHabit.Provider>
                {newHabit.length>0?<ContainerCreatedHabits newHabit={newHabit} />:
                <NoCreated>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoCreated>}
            </StyledMain>
        </NewHabitContext.Provider>
    )
}

const NoCreated = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`;