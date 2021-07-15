import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) =>      /*в круглых скобках - параметр, аргументом будет store.getState() - смотри ниже*/
{debugger
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
rerenderEntireTree(store.getState());  /*ЭТОТ STORE ТЕПЕРЬ ВЫЗЫВАЕТСЯ ИЗ REDUX */
store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state)
}); /*ЭТОТ STORE ТЕПЕРЬ ВЫЗЫВАЕТСЯ ИЗ REDUX */



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
