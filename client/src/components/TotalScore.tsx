import React from 'react'
import { Typography, Theme, createStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const style = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    width: '625px'
  }
})

interface ITotalScoreClasses {
  root: string
}

interface ITotalScoreProps {
  classes: ITotalScoreClasses
  score: number
}

const TotalScore = (props: ITotalScoreProps) => {
  const { classes, score } = props
  return (
    <div className={classes.root}>
      <Typography variant='title' align='center'>Your total score is {score}/10</Typography>
    </div>
  )
}

export default withStyles(style)(TotalScore)
