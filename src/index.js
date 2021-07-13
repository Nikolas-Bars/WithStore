import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) =>      /*в круглых скобках - параметр, аргументом будет store.getState() - смотри ниже*/
{
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
                state={state}
                 dispatch={store.dispatch.bind(store)}
                 newMessageInTextArea={state.dialogsPage.newMessageInTextArea}
                /> {/*передаем APP массив с данными state*/}

        </React.StrictMode>,
        document.getElementById('root')
    );
}


reportWebVitals();
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
