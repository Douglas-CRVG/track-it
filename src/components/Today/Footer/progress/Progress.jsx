import StyledProgress from "./styledProgress";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Progress({value}){
    value=35;
    return(
        <StyledProgress>
            <CircularProgressbar
            value={value}
            text="Hoje"
            backgroundPadding={6}
            background
            styles={buildStyles({
                backgroundColor: "#52b6ff",
                textColor: "#ffffff",
                pathColor: "#ffffff",
                trailColor: "transparent"
            })}
            />
        </StyledProgress>
    );
}