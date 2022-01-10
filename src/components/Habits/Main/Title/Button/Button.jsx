import { useContext } from 'react';
import { Add } from 'react-ionicons';
import CreateHabit from '../../../../../contexts/createHabit';
import StyledButton from './styledButton';

export default function Button(){
    const {setCreate} = useContext(CreateHabit);
    return(
        <StyledButton onClick={() => setCreate(true)}>
            <Add
                color={'#ffffff'} 
                height="18px"
                width="18px"
            />
        </StyledButton>
    );
}