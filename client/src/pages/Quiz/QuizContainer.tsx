import { connect } from 'react-redux'
import Quiz from './Quiz'
import { IReduxState } from '../../types'
import { IQuizState } from '../../redux/currentQuiz/reducer'
import { nextQuestion, answerQuestion } from '../../redux/actions'

const mapStateToProps = (state: IReduxState): IQuizState => ({
  ...state.currentQuiz
})

const actions = {
  nextQuestion,
  answerQuestion
}

export default connect(mapStateToProps, actions)(Quiz)
