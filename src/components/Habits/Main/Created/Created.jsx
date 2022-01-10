import { useContext, useState } from "react";
import CreateHabit from "../../../../contexts/createHabit";
import NewHabitContext from "../../../../contexts/newHabitContext";
import SetHabitContext from "../../../../contexts/setHabitContext";
import UserDataContext from "../../../../contexts/userDataContext";
import { getListHabits, postCreateHabit } from "../../../others/axios/axios";
import Buttons from "./Buttons/Buttons";
import StyledCreated from "./styledCreated";
import Week from "./Week/Week";

export default function Created(){
    const [habit, setHabit] = useState({
        name: "",
        days: []
    });
    const [input, setInput] = useState("");
    const [block, setBlock] = useState(false);

    const {userData} = useContext(UserDataContext);
    const {setCreate} = useContext(CreateHabit);
    const {newHabit, setNewHabit} = useContext(NewHabitContext);

    function getInput(e) {
        setInput(e.target.value);
        setHabit({...habit, name: e.target.value});
    }

    function makeHabit(e){
        e.preventDefault();

        setBlock(true);

        if((habit.name !== "") && (habit.days.length > 0)){
            postCreateHabit(habit, userData.token).then((response)=>{
                setBlock(false);
                console.log(response.data);
            }).catch((err)=>{
                setBlock(false);
                console.log(err.response);
            });
            setCreate(false);
            setNewHabit([...newHabit])
        }else{
            setTimeout(()=>{
                setBlock(false);
                alert("Preencha corretamente os campos para cadastrar o hábito.");
            }, 600)
            
        }
    }
    return(
        <SetHabitContext.Provider value={{habit, setHabit}}>
            <StyledCreated onSubmit={makeHabit} block={block}>
                <input type="text" placeholder="nome do hábito" value={input} onChange={(e)=>getInput(e)}/>
                <Week block={block}/>
                <Buttons block={block} />
            </StyledCreated>
        </SetHabitContext.Provider>
    );
}