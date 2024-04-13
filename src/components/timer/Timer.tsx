import "./timer.css";
import {ReactElement, useEffect, useState} from 'react';
import { Dispatch, SetStateAction } from "react";


type Props = {
  counter: number,
  setCounter: Dispatch<SetStateAction<number>>
}

const Timer = (): ReactElement => {
  const [counter, setCounter] = useState<number>(3600);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  
  return (
    <div className="timerWrapper">
      {counter>0 ? <div className="timer">{"Осталось: "}{Math.floor((counter/60)%60)} {":"} {Math.floor((counter)%60)}</div>
        : <div className="timeOver">Время вышло</div>}
    </div>
  )
}

export default Timer;