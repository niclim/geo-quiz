import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { FluxStandardAction } from 'flux-standard-action'
import { ActionsObservable } from 'redux-observable'

export const currentQuizEpic = (action$: ActionsObservable<FluxStandardAction<any>>): Observable<FluxStandardAction<any>> =>
  action$.ofType('abc')
    .pipe(
      map(x => ({ type: 'abcd' }))
    )
