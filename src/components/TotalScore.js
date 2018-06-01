import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const style = theme => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    width: '625px'
  }
})

const TotalScore = (props) => {
  const { classes, score } = props
  return (
    <div className={classes.root}>
      <Typography variant='title' align='center'>Your total score is {score}/10</Typography>
    </div>
  )
}

export default withStyles(style)(TotalScore)
