const ADD_POST = 'ADD-POST';
const UP_TEXT = 'UPTEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";

            return state;
        case UP_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const UPTEXTActionCreator =(text) => ({type: UP_TEXT, text: text})


export default profileReducer;