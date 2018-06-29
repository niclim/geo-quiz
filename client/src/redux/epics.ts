import { combineEpics } from 'redux-observable'
import { currentQuizEpic } from './currentQuiz/epics'

export default combineEpics(
  currentQuizEpic
)
