import { connect } from 'react-redux'
import Home from './Home'
import { IReduxState } from '../../types'

const mapStateToProps = (state: IReduxState) => ({
  ...state
})

export default connect(mapStateToProps)(Home)
