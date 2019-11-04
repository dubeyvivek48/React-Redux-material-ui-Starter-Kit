import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import App from './App';
import { Provider } from 'react-redux';
import RootReducer from './redux/reducers/root.reducer';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider , createMuiTheme} from '@material-ui/core/styles';
import { red} from "@material-ui/core/colors";

const store = createStore(RootReducer);
const theme = createMuiTheme({
    status: {
        danger: red[500],
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App  />
        </Provider>
    </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
