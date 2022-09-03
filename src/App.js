import './App.css';
import AllRoutes from './web/routes';
import { makeStyles } from './common';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor:"#904",
      h1:{
        fontSize:"20px"
      }
    }
  },
}));

function App() {


  const classes = useStyles();
  console.log("classes",classes)
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
