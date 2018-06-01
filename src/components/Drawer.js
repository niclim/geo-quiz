import React from 'react'
import { Drawer as MuiDrawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import gMaps from '../assets/googlemaps.png'

const styles = theme => ({
  drawer: {
    position: 'relative',
    width: 180
  },
  drawerHeader: {
    height: '64px',
    display: 'flex'
  },
  gmaps: {
    width: '50px',
    height: '50px',
    margin: 'auto'
  }
})

const Drawer = props => {
  const { classes } = props
  return (
    <MuiDrawer variant='permanent' anchor='left' classes={{
      paper: classes.drawer
    }}>
      <div className={classes.drawerHeader}>
        <img
          src={gMaps}
          alt='google maps'
          className={classes.gmaps}
        />
      </div>
      <Divider />
      <ListItem>
        <ListItemText>Questions</ListItemText>
      </ListItem>
      {
        props.questions && (
          <List>
            {
              props.questions.map(q => (
                <ListItem key={q.number}>
                  <ListItemText>Question {q.number}</ListItemText>
                  <ListItemIcon primary='Inbox' />
                </ListItem>
              ))
            }
          </List>
        )
      }
    </MuiDrawer>
  )
}

export default withStyles(styles)(Drawer)
