import React, {Component} from 'react';
import {ThemeProvider } from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import {blue, indigo} from '@material-ui/core/colors';


const theme = createMuiTheme ({
    palette: {
        primary: {
            main: indigo[700]
        },

        secondary: {
            main: blue[900]
      }
    },
    typography: {
        //changes from default Roboto
        fontFamily: [
            '"Lato"',
            'sans-serif'
          ].join(',')

    }
});
// theme = responsiveFontSizes(theme)??;

class DashBoard extends React.Component {

  
    render () {
        return (
            <ThemeProvider theme={theme}>
                Test Material UI
            </ThemeProvider>
        );
    }
}

export default DashBoard;
