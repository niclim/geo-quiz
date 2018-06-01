import React from 'react'
import { Drawer as MuiDrawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Done, Close } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import gMaps from '../assets/googlemaps.png'

const styles = theme => ({
  drawer: {
    position: 'relative',
    width: 240
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
              props.questions.map((q, i) => (
                <ListItem key={q.number} button>
                  <ListItemText>Question {q.number}</ListItemText>
                  {
                    q.answered && (
                      <ListItemIcon>
                        {
                          q.correct ? <Done /> : <Close />
                        }
                      </ListItemIcon>
                    )
                  }
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
