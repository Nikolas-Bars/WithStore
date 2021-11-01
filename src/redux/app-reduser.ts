import {getAuthUserData} from "./auth-reduser";

const INITIALIZATED_SUCSESS = 'INITIALIZATED_SUCSESS'

export type initialStateType = {
    initialize: boolean
}

let initialState: initialStateType = {
    initialize: false
}

const appReducer =(state = initialState, action: any):initialStateType => {
        switch (action.type) {
            case INITIALIZATED_SUCSESS: {
              return {
                  ...state,
                  initialize: true
              }
            }default: return state
        }
}

type initializedSuccessActionType = {
    type: typeof INITIALIZATED_SUCSESS
}

export const initializedSuccess = ():initializedSuccessActionType => ({type: INITIALIZATED_SUCSESS});
export const initializeApp = () => (dispatch: any) =>{

    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(()=> {
        dispatch(initializedSuccess())
    });
}

export default appReducer