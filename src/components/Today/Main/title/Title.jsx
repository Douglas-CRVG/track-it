import StyledTitle from "./styledTitle";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function Title() {
    return(
        <StyledTitle>
            <h1>{dayjs().locale('pt-br').format('dddd, DD/MM')}</h1>
            <h2>Nenhum hábito concluído ainda</h2>
        </StyledTitle>
    )
}