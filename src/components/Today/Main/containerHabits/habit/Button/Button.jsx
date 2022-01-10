import { useContext, useState } from 'react';
import { Checkbox } from 'react-ionicons';
import styled from 'styled-components';
import HabitsContext from '../../../../../../contexts/habitsContext';
import RefreshContext from '../../../../../../contexts/refreshContext';
import UserDataContext from '../../../../../../contexts/userDataContext';
import { postDoneHabit, postNotDoneHabit } from '../../../../../others/axios/axios';

export default function Button({id, done}){
    const [check, setCheck] = useState(done? "#8fc549" : "#ebebeb")

    const {userData} = useContext(UserDataContext);
    const {habits, setHabits} = useContext(HabitsContext);
    const {setRefresh} = useContext(RefreshContext);

    function active (){
        console.log(id);
        console.log(userData.token);
        setCheck("#8fc549");

        postDoneHabit(id, userData.token).then((response)=>{
            console.log(response);
            setHabits([...habits])
            setRefresh(...[])
        }).catch((err)=>{
            console.log(err.response)
        })
        
    }

    function inactive(){
        setCheck("#ebebeb");
        postNotDoneHabit(id, userData.token).then((response)=>{
            console.log(response);
            setHabits([...habits])
        }).catch((err)=>{
            console.log(err.response)
        })
    }

    return(
        <StyledButton onClick={done? inactive : active}>
            <Checkbox
                color={check}
                height="69px"
                width="69px"
            />
        </StyledButton>
    )
}

const StyledButton = styled.button`
    all: unset;
`;