import { TimerProps } from "../../types/types";
import "./timer.css";
import {ReactElement} from 'react';

const Timer = (props: TimerProps): ReactElement => {
  const {counter} = props;

  return (
    <div className="timerWrapper">
      <div className="timer">{"Осталось: "}{Math.floor((counter/60)%60)} {":"} {Math.floor((counter)%60)}</div>  
    </div>
  )
}

export default Timer;