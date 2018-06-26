import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Drawer from '../components/Drawer'
import Question from '../components/Question'
import TotalScore from '../components/TotalScore'
import { withStyles } from '@material-ui/core/styles'
import questions from '../questions'

const style = theme => ({
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

class App extends Component {
  constructor (props) {
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
    this.answerQuestion = this.answerQuestion.bind(this)
    this.next = this.next.bind(this)
  }

  next (current) {
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

  answerQuestion (answer, current) {
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

  render () {
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
