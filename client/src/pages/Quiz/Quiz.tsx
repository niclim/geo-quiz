import React, { Component } from 'react'
import { FluxStandardAction } from 'flux-standard-action'
import { AppBar, Toolbar, Typography, Theme, createStyles } from '@material-ui/core'
import Drawer from '../../components/Drawer'
import Question from '../../components/Question'
import TotalScore from '../../components/TotalScore'
import { withStyles } from '@material-ui/core/styles'
import { IQuestion } from '../../types'
import { IAnswerQuestion } from '../../redux/currentQuiz/actions'

const style = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - 240px)`,
    marginLeft: '240px'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1
  },
  questions: {
    height: 'calc(100% - 64px)',
    display: 'flex'
  }
})

interface IQuizClasses {
  root: string
  appBar: string
  toolbar: string
  content: string
  questions: string
}

interface IQuizProps {
  classes: IQuizClasses
  questions: IQuestion[]
  current: number
  done: boolean
  answerQuestion: (answer: number, current: number) => FluxStandardAction<IAnswerQuestion>
  nextQuestion: (current: number) => FluxStandardAction<number>
}

class Quiz extends Component<IQuizProps> {
  public render() {
    const { classes, questions, current, done, answerQuestion, nextQuestion } = this.props
    const totalScore = questions.reduce((acc, q) => acc + (q.correct ? 1 : 0), 0)
    return (
      <div className={classes.root}>
        <Drawer
          questions={questions}
          score={totalScore}
        />
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant='title' color='inherit' noWrap>Geography Quiz</Typography>
          </Toolbar>
        </AppBar>
        <section className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.questions}>
            {
              done
                ? (
                  <TotalScore
                    score={totalScore}
                  />
                ) : (
                  <Question
                    question={questions[current]}
                    current={current}
                    answerQuestion={answerQuestion}
                    next={nextQuestion}
                  />
                )
            }
          </div>
        </section>
      </div>
    )
  }
}

export default withStyles(style)(Quiz)
