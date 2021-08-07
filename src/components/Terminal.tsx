import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Terminal as Xterm } from "xterm";
import "xterm/css/xterm.css";

const useStyles = makeStyles((theme) => ({
    diver: {
      position: 'absolute',
      zIndex: 9,
      backgroundColor: '#f1f1f1',
      border: '1px solid #d3d3d3',
      textAlign: 'center',
    },
    mydivheader: {
     padding: '10px',
      cursor: 'move',
      zIndex: 10,
      backgroundColor: '#2196F3',
      color: '#fff',
    }
}));

const Terminal = () => {
   const classes = useStyles();
   const terminal = new Xterm();
  
   useEffect(()=>{
      let container = document.getElementById("terminal-container");
      terminal.onKey(e => {
         console.log(e.key);
         terminal.write(e.key);
         if (e.key == '\r')
         terminal.write('\n');
     })
      if(container!=null){
         terminal.open(container);
         terminal.write("Terminal Connected");
         terminal.write("");
      }
   },[]);

   return (
      <> 
         <div id="mydiv" className={classes.diver}>
            <div id="mydivheader" className={classes.mydivheader}>Click here to move</div>
            <div id="terminal-container"></div>
         </div>
      </>
   )
};

export default Terminal;