import {StyledTitle, StyledSpan} from "./styledTitle";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function Title({habits}) {
    let current = habits.filter(({done}) => done===true).length;
    let total = habits.length;

    return(
        <StyledTitle>
            <h1>{dayjs().locale('pt-br').format('dddd, DD/MM')}</h1>
            {current? <h2><StyledSpan>{(current/total*100).toFixed(0)}% dos hábitos concluídos</StyledSpan></h2> : <h2><span>Nenhum hábito concluído ainda</span></h2>}
        </StyledTitle>
    )
}