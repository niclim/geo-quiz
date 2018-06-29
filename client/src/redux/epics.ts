import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Action } from 'redux'
import { combineEpics, ActionsObservable } from 'redux-observable'

export const placeholderEpic = (action$: ActionsObservable<Action>): Observable<Action> =>
  action$.ofType('abc')
    .pipe(
      map(x => ({ type: 'abcd' }))
    )

export default combineEpics(
  placeholderEpic
)
