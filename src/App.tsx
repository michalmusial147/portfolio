import React from 'react';
import './App.css';
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  topBar: {
    height: '64px',
    padding: '0% 15% 0% 15%;',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#2C2E43'
  },
  h1: {
    margin: '0',
    marginLeft: '10px',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Gloria'
  },
  divider1: {
    height: '100vh',
    background: '#595260',
  },
  divider2: {
    height: '75vh',
    background: '#FFD523',
  }
}));

const App = ({ }) => {
  const classes = useStyles();
  return (
  <>
    <div className={classes.divider1}> 
    </div>
    <div className={classes.topBar}>
        <h1 className={classes.h1}>Musialowski</h1>
        <Box display='flex'>
          <h2 className={classes.h1}>Navi</h2>
          <h2 className={classes.h1}>Navi</h2>
          <h2 className={classes.h1}>Navi</h2>
        </Box>
    </div>
    <div className={classes.divider2}>

    </div>
  </>
  )
};

export default App;
