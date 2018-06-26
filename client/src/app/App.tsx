import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, Theme, createStyles } from '@material-ui/core'
import Drawer from '../components/Drawer'
import Question from '../components/Question'
import TotalScore from '../components/TotalScore'
import { withStyles } from '@material-ui/core/styles'
import questions from '../questions'
import { IQuestion } from '../types'

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

interface IAppClasses {
  root: string
  appBar: string
  toolbar: string
  content: string
  questions: string
}

interface IAppProps {
  classes: IAppClasses
}

interface IAppState {
  questions: IQuestion[]
  current: number
  done: boolean
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      questions: questions.map((q, i) => ({
        ...q,
        number: i + 1,
        correct: null,
        answered: false
      })),
      current: 0,
      done: false
    }
  }

  private next = (current: number) => {
    if (current === questions.length - 1) {
      this.setState({
        done: true
      })
    } else {
      this.setState({
        current: current + 1
      })
    }
  }

  private answerQuestion = (answer: number, current: number) => {
    this.setState((prevState) => ({
      questions: prevState.questions.map((q, i) => i !== current
        ? { ...q }
        : {
          ...q,
          answered: true,
          correct: q.correctAnswer === answer
        }
      )
    }))
  }

  public render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Drawer
          questions={this.state.questions}
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
              this.state.done
                ? (
                  <TotalScore
                    score={this.state.questions.reduce((acc, q) => acc + (q.correct ? 1 : 0), 0)}
                  />
                ) : (
                  <Question
                    question={this.state.questions[this.state.current]}
                    current={this.state.current}
                    answerQuestion={this.answerQuestion}
                    next={this.next}
                  />
                )
            }
          </div>
        </section>
      </div>
    )
  }
}

export default withStyles(style)(App)
