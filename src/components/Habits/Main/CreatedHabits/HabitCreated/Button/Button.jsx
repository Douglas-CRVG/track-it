import { TrashOutline } from 'react-ionicons'
import StyledButton from './styledButton'

export default function Button(){
    return(
        <StyledButton onClick={() => alert("tem que excluir")}>
            <TrashOutline
                color={'#00000'}
                height="15px"
                width="15px"
            />
        </StyledButton>
    )
}