import { useContext } from "react";
import CreateHabit from "../../../../../contexts/createHabit";
import StyledButtons from "./styledButtons";
import { ThreeDots } from "react-loader-spinner";


export default function Buttons({block}) {
    const {setCreate} = useContext(CreateHabit);
    return (
        <StyledButtons block={block}>
            <button type="button" onClick={() => setCreate(false)}>Cancelar</button>
            <button>{block? <ThreeDots type="ThreeDots" color="#FFFFFF" height={11} width={43} />:"Salvar"}</button>
        </StyledButtons>
    );
}