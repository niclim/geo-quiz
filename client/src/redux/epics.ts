// import { Observable } from 'rxjs'
// import { Action } from 'redux'
import { combineEpics } from 'redux-observable'

export const placeholderEpic = (action$: any) => action$.ofType('abc').map((() => ({ type: 'agb' })))

export default combineEpics(
  placeholderEpic
)
