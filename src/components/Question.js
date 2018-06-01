import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

const style = theme => ({
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

const Question = props => {
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
                !question.answered && answerQuestion(i, current)
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
