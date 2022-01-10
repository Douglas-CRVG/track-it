import { useContext } from "react";
import CreateHabit from "../../../../../contexts/createHabit";
import StyledButtons from "./styledButtons";

export default function Buttons() {
    const {setCreate} = useContext(CreateHabit);
    return (
        <StyledButtons>
            <button type="button" onClick={() => setCreate(false)}>Cancelar</button>
            <button>Salvar</button>
        </StyledButtons>
    );
}