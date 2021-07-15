const ADD_COMPOSITION = 'ADD-COMPOSITION';

let initialState = {

    music: [
        {}
        ]
}

const musicReducer =(state = initialState, action)=> {

    if (action.type === ADD_COMPOSITION) {
        let nameComposition = {name: action.composition};
        state.music.push(nameComposition);
        alert(action.composition);
    }

    return state;
}
export const ADD_COMPOSITION_ActionCreator = (text) => ({type: 'ADD-COMPOSITION', composition: text})

export default musicReducer;