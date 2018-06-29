import { FluxStandardAction } from 'flux-standard-action'

export const NEXT_QUESTION = 'NEXT_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

interface IAnswerQuestion {
  answer: number
  current: number
}

export const nextQuestion = (current: number): FluxStandardAction<number> => {
  return {
    type: NEXT_QUESTION,
    payload: current
  }
}

export const answerQuestion = (answer: number, current: number): FluxStandardAction<IAnswerQuestion> => {
  return {
    type: ANSWER_QUESTION,
    payload: {
      answer,
      current
    }
  }
}