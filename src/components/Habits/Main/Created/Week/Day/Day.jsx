import { useContext, useState } from "react";
import SetHabitContext from "../../../../../../contexts/setHabitContext";
import StyledDay from "./styledDay";

export default function Day({id, day, block}){
    const {habit, setHabit} = useContext(SetHabitContext);
    const [select, setSelect] = useState(false);

    function selectDay(){
        if(habit.days.includes(id)){
            setHabit({...habit, days: [...habit.days].filter(day => day !== id)});
        } else {
            setHabit({...habit, days: [...habit.days, id]})
        }
        setSelect(!(habit.days.includes(id)))
    }

    return(
        <StyledDay block={block} select={select} type="button" id={id} onClick={() => selectDay()} >
            {day}
        </StyledDay>
    )
}