import React from 'react'
import { Typography, Button, Theme, createStyles } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import { IQuestion } from '../types'

const style = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    width: '625px'
  },
  imageContainer: {
    display: 'flex'
  },
  image: {
    maxWidth: '600px',
    maxHeight: '300px',
    margin: 'auto'
  },
  questions: {

  },
  button: {
    margin: theme.spacing.unit,
    width: '45%'
  },
  nextButton: {
    margin: theme.spacing.unit,
    width: `calc(90% + ${theme.spacing.unit * 2}px)`
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
})

interface IQuestionClasses {
  root: string
  imageContainer: string
  image: string
  questions: string
  button: string
  nextButton: string
  rightIcon: string
}

interface IQuestionProps {
  question: IQuestion
  current: number
  answerQuestion: (answer: number, current: number) => void
  next: (current: number) => void
  classes: IQuestionClasses
}

const Question = (props: IQuestionProps) => {
  const { question, current, answerQuestion, next, classes } = props
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img src={question.image} alt='question' className={classes.image} />
      </div>
      <div>
        <Typography variant='title' align='center'>{question.question}</Typography>
      </div>
      <div className={classes.questions}>
        {
          question.options.map((d, i) => (
            <Button
              variant='outlined'
              className={classes.button}
              key={d}
              onClick={() => {
                /* tslint:disable */
                !question.answered && answerQuestion(i, current)
                /* tslint:enable */
              }}
            >{d}</Button>
          ))
        }
      </div>
      <div>
        {
          question.answered && (
            <Button
              className={classes.nextButton}
              variant='outlined'
              color='primary'
              onClick={() => { next(current) }}
            >
              Next <Send className={classes.rightIcon} />
            </Button>
          )
        }
      </div>
    </div>
  )
}

export default withStyles(style)(Question)
