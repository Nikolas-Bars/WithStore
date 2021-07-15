const ADD_POST = 'ADD-POST';
const UP_TEXT = 'UPTEXT';

let initialState = {
        newPostText: 'it-kamasutra',
        posts: [
        {id: '1', message: 'Hi! How are you?', likeCounts: ' likes: 25'},
        {id: '1', message: 'It`s my first post.', likeCounts: ' likes: 12'},
        {id: '1', message: 'Loh!', likeCounts: ' likes: 38'},
        {id: '1', message: 'Pidr!', likeCounts: ' likes: 11'},
        {id: '1', message: 'Idi nah!', likeCounts: ' likes: 7'}
    ],

}

const profileReducer = (state = initialState, action) => { // присвоили state значение по умолчанию

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