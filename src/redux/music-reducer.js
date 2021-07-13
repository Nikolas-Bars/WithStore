const ADD_COMPOSITION = 'ADD-COMPOSITION';

const musicReducer =(state, action)=> {

    if (action.type === ADD_COMPOSITION) {
        let nameComposition = {name: action.composition};
        state.push(nameComposition);
        alert(action.composition);
    }

    return state;
}
export const ADD_COMPOSITION_ActionCreator = (text) => ({type: 'ADD-COMPOSITION', composition: text})

export default musicReducer;