import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mainPage.css";
import { Steps, useSteps } from "react-step-builder";
import {formPages} from "../../data/db.json";
import FormPage from "../../pages/formPage/FormPage";
import Button from '@mui/material/Button';
import { Answer, PageAtr } from "../../types/types";
import { Box } from "@mui/material";
import LinearProgressWithLabel from "../../components/progressBar/ProgressBar";
import Timer from "../../components/timer/Timer";

function MainPage() {
  const navigate = useNavigate();
  const { next, prev, jump } = useSteps();
  const [pages, setPages] = useState<PageAtr[]>(formPages);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [counter, setCounter] = useState<number>(300);
  
  const handleClear = () => {
    localStorage.clear();
    const newArr:Answer[] = []
    for (let i = 0; i < pages.length; i++) {
      newArr.push({question: pages[i].question, answer: pages[i].type === "checkbox" ? [] : "" })
    }
    setAnswers(newArr);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleClear();
    console.log(answers);
    navigate('/success');
  };

  useEffect(() => {
    setPages(formPages);
    const newArr:Answer[] = []
    for (let i = 0; i < pages.length; i++) {
      newArr.push({question: pages[i].question, answer: pages[i].type === "checkbox" ? [] : "" })
    }
    setAnswers(newArr);
    if (!localStorage.getItem("answers")) {
      localStorage.setItem("answers", JSON.stringify(newArr))
    } 
    else {
      setAnswers(JSON.parse(localStorage.getItem("answers") || ""))
    }
  },[pages])

  useEffect(() => {
    setProgress(100/formPages.length);
  },[])

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      handleClear();
      navigate('/failure');
    }
  }, [counter]);

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="form">
        <div className="titleAndTimer">
          <h2>Тестирование</h2>
          <Timer counter={counter}/>
        </div>
        <Box sx={{ width: '50%', marginBottom: '10px'}}><LinearProgressWithLabel value={progress} color="secondary" /></Box>
        <Steps>
          {pages.map(page => (
            <FormPage page={page} answers={answers} setAnswers={setAnswers} setProgress={setProgress} key={page.id}/>
          ))}
        </Steps>
        <div className="buttonsPart">
          <Button style={{minWidth: "100px", background: 'primary light'}} variant="contained" type="button" data-testid="jump" onClick={() => jump(1)}>В начало</Button>
          <Button style={{minWidth: "100px"}} variant="contained" type="button" onClick={prev}>Пред</Button>
          <Button style={{minWidth: "100px"}} variant="contained" type="button" onClick={next}>След</Button>
          <Button style={{minWidth: "135px"}} variant="contained" type="submit">Отправить</Button>
          <Button style={{minWidth: "100px"}} variant="contained" type="button" onClick={handleClear}>Очистить форму</Button>
        </div>
      </form>
    </div>
  );
}

export default MainPage;