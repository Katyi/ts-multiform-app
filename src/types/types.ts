import { Dispatch, SetStateAction } from "react";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {main: '#00796b'},
    secondary: {main: '#00695c'},
  }
});

export interface PageAtr {
  id: number,
  title: string,
  type: string,
  question: string,
  answers: string[],
}

export interface Answer {
  question: string,
  answer: string[] | string,
}

export type Props = {
  page: PageAtr,
  answers: Answer[],
  setAnswers: Dispatch<SetStateAction<Answer[]>>,
  setProgress: Dispatch<SetStateAction<number>>,
}