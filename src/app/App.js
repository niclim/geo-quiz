import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Drawer from '../components/Drawer'
import { withStyles } from '@material-ui/core/styles'

const style = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - 180px)`,
    marginLeft: '180px'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1
  }
})

class App extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Drawer
        />
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant='title' color='inherit' noWrap>Geography Quiz</Typography>
          </Toolbar>
        </AppBar>
        <section className={classes.content}>
          <div className={classes.toolbar} />
          <div>
            hi
          </div>
        </section>
      </div>
    )
  }
}

export default withStyles(style)(App)
