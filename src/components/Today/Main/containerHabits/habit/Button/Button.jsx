import { useState } from 'react';
import { Checkbox } from 'react-ionicons';
import styled from 'styled-components';

export default function Button(){
    const [check, setCheck] = useState("#ebebeb");

    function active (){
        if (check === "#ebebeb"){
            setCheck("#8fc549");
        } else {
            setCheck("#ebebeb");

        }
    }

    return(
        <StyledButton onClick={active}>
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