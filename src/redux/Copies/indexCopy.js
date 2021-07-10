import React from 'react';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";




import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";
import {addComposition} from "./redux/state";
import {upText} from "./redux/state";
import {upNewMessageInTextArea} from "./redux/state";
import {upMessageForDialogPage} from "./redux/state";
import {subscribe} from "./redux/state"

let rerenderEntireTree = (state) =>
{

    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 addComposition={addComposition}
                 upText={upText}
                 newMessageInTextArea={state.dialogsPage.newMessageInTextArea}
                 upNewMessageInTextArea={upNewMessageInTextArea}
                 upMessageForDialogPage={upMessageForDialogPage}
            /> {/*передаем APP массив с данными state*/}

        </React.StrictMode>,
        document.getElementById('root')
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
rerenderEntireTree(state);
subscribe(rerenderEntireTree);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
