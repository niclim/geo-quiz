import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Quiz from './Quiz'
import { IReduxState, IQuestion } from '../../types'
import { IQuizState } from '../../redux/currentQuiz/reducer'
import { nextQuestion, answerQuestion } from '../../redux/actions'

const questionSelector = (state: IReduxState): IQuestion[] => state.currentQuiz.questions
const totalSelector = createSelector(
  questionSelector,
  questions => questions.reduce((acc, q) => acc + (q.correct ? 1 : 0), 0)
)

export interface IQuizProps extends IQuizState {
  totalScore: number
}

const mapStateToProps = (state: IReduxState): IQuizProps => ({
  ...state.currentQuiz,
  totalScore: totalSelector(state)
})

const actions = {
  nextQuestion,
  answerQuestion
}

export default connect(mapStateToProps, actions)(Quiz)
