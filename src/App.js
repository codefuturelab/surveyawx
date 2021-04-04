import React from 'react';
import Surveycomponent from './components/Components'
import Example from './components/Menu'
import './styles/app.css'
import { makeStyles } from '@material-ui/core/styles';




import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));



function App() {
  const [dense, setDense] = React.useState(false);
  const classes = useStyles();
  
  return (
    
     <>
    <Example/>
    <div class="b">
    <h1>Components</h1>
    </div>

    <div class="div_r">
    <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<AddIcon />}
        disabled={dense}
        onClick={() => {
             console.log( 'onClicked');
             if(dense){
                console.log('dense truedir false yapiyoz : ' + dense);
                setDense(false)
             }
             else{
                console.log('dense falsedir true yapiyoz: ' + dense);
                setDense(true);
             }
           
         
            }}
      >
        New Component
      </Button>

      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        disabled={!dense}
        onClick={() => {
            console.log( 'onClicked');
            if(dense){
               console.log('dense truedir false yapiyoz : ' + dense);
               setDense(false)
            }
            else{
               console.log('dense falsedir true yapiyoz: ' + dense);
               setDense(true);
            }
          
        
           }}
      >
        Cancel
      </Button>
      


      </div>
  

{ dense && <div class="c"><Surveycomponent/> </div>} 
  

    </>
  );
}

export default App;
