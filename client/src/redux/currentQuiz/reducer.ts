import { FluxStandardAction } from 'flux-standard-action'
import { NEXT_QUESTION, ANSWER_QUESTION } from './actions'
import { IQuestion } from '../../types'
import questions from '../../questions'

export interface IQuizState {
  questions: IQuestion[]
  current: number
  done: boolean
}

const defaultState: IQuizState = {
  questions: questions.map((q, i) => ({
    ...q,
    number: i + 1,
    correct: null,
    answered: false
  })),
  current: 0,
  done: false
}

const currentQuizReducer = (state: IQuizState = defaultState, action: FluxStandardAction<any>): IQuizState => {
  switch (action.type) {
    case NEXT_QUESTION:
      return action.payload.current === state.questions.length - 1 ? {
        ...state,
        done: true
      } : {
          ...state,
          current: action.payload + 1
        }
    case ANSWER_QUESTION:
      return {
        ...state,
        questions: state.questions.map((q, i) => i !== action.payload.current
          ? { ...q }
          : {
            ...q,
            answered: true,
            correct: q.correctAnswer === action.payload.answer
          }
        )
      }
    default:
      return state
  }
}

export default currentQuizReducer
