import { useContext } from 'react'
import { TrashOutline } from 'react-ionicons'
import UserDataContext from '../../../../../../contexts/userDataContext';
import StyledButton from './styledButton'

export default function Button({id}){
    const {userData} = useContext(UserDataContext);

    function deleteHabit(){
        const del = window.confirm("Certeza de que deseja excluir este hábito?");
        if(del){
            console.log(id);
            console.log(userData.token);
            deleteHabit(id, userData.token).then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err.response);
            })
        }
        
    }
    return(
        <StyledButton onClick={(deleteHabit)}>
            <TrashOutline
                color={'#00000'}
                height="15px"
                width="15px"
            />
        </StyledButton>
    )
}