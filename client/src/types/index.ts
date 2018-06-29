import { IQuizState } from '../redux/currentQuiz/reducer'

export interface IQuestion {
  image: string
  question: string
  options: string[]
  correctAnswer: number
  number: number
  correct: null | boolean
  answered: boolean
}

export interface IReduxState {
  currentQuiz: IQuizState
}
