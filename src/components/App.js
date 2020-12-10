import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

import DetailedForm from './DetailedForm';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
});

const useStyles = makeStyles({
  appMain: {
    width: '100%'
  }
});

function App() {
  const classes = useStyles();

  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/" exact>
    //       <Home />
    //     </Route>
    //     <Route path="/editor" exact>
    //       <Editor />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <DetailedForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
