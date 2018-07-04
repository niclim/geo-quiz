import { combineReducers } from 'redux'
import currentQuizReducer from './currentQuiz/reducer'

const rootReducer = combineReducers({
  currentQuiz: currentQuizReducer
})

export default rootReducer
