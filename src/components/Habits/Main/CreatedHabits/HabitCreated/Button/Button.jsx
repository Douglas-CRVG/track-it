import { useContext } from 'react'
import { TrashOutline } from 'react-ionicons'
import RefreshContext from '../../../../../../contexts/refreshContext';
import UserDataContext from '../../../../../../contexts/userDataContext';
import StyledButton from './styledButton'

export default function Button({id}){
    const {userData} = useContext(UserDataContext);
    const {setRefresh, refresh} = useContext(RefreshContext);

    function deleteHabit(){
        const del = window.confirm("Certeza de que deseja excluir este hábito?");
        if(del){
            deleteHabit(id, userData.token).then((response) => {
                console.log(response);
                setRefresh(!refresh);
            }).catch((err) => {
                console.log(err.response);
            })
        }
        }
    return(
        <StyledButton onClick={()=> deleteHabit()}>
            <TrashOutline
                color={'#00000'}
                height="15px"
                width="15px"
            />
        </StyledButton>
    )
}