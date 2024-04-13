import "./formPage.css";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ReactElement, useEffect } from "react";
import { Props } from "../../types/types";

const FormPage = (props: Props): ReactElement => {
  const {page, answers, setAnswers, setProgress} = props;

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newArr = answers.map((item, i) => (i === page.id-1 && typeof item.answer === 'object' && !item.answer.includes(e.target.name))
      ? { ...item, answer:  [...item.answer, e.target.name]} : i === page.id-1 && typeof item.answer === 'object' && item.answer.includes(e.target.name)
      ? { ...item, answer: item.answer.filter(item => item !== e.target.name)} : item) 
    setAnswers(newArr);
    localStorage.setItem("answers", JSON.stringify(newArr));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newArr = answers.map((item, i) => i !== page.id-1 ? item : { ...item, answer: e.target.value});
    setAnswers(newArr);
    localStorage.setItem("answers", JSON.stringify(newArr));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newArr = answers.map((item, i) => i !== page.id-1 ? item : { ...item, answer: e.target.value});
    setAnswers(newArr);
    localStorage.setItem("answers", JSON.stringify(newArr));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newArr = answers.map((item, i) => i !== page.id-1 ? item : { ...item, answer: e.target.value});
    setAnswers(newArr);
    localStorage.setItem("answers", JSON.stringify(newArr));
  };

  useEffect(() => {
    if (localStorage.getItem("answers")) {
      setAnswers(JSON.parse(localStorage.getItem("answers") || ""))
    }
  },[])

  useEffect(() => {
    setProgress(100/answers.length*page.id)
  },[])

  return (
    <div className='formPage'>
      <h2>{page.title}</h2>
      <h2 className="question">{page.question}</h2>
      
      {page.type === "checkbox" ? 
      <FormGroup className="checkboxPart">
        {page.answers?.map((answer: string, index: number) =>
          <FormControlLabel control={<Checkbox 
            checked={answers[page.id-1]?.answer.includes(answer) ? true : false} 
            onChange={handleCheckboxChange} name={answer}/>} label={answer} key={index}/>
        )}
      </FormGroup>
      : page.type === "radio" ? 
      <RadioGroup
        className="radioPart"
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={handleRadioChange}
        value={answers[page.id-1]?.answer}
      >
        {page.answers?.map((answer: string, index: number) =>
          <FormControlLabel value={answer} control={<Radio />} label={answer} key={index} />
        )}
      </RadioGroup>
      : page.type === "input" ? 
        <input className="formInput"
          value={answers[page.id-1]?.answer || ""} 
          onChange={handleInputChange}/>    
      : <textarea onChange={handleTextAreaChange} value={answers[page.id -1]?.answer || ""} className="formTextArea"/>
      }
    </div>
  )
}

export default FormPage;