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
        case ADD_POST: {

            let stateCopy = {...state}
            stateCopy.posts = [...state.posts, {
                id: 5,
                message: state.newPostText,
                likeCounts: 0
            }]
             // когда мы добавляем новый пост, то ссылка на posts остается таже(массив - это тоже объект), и connect библиотека думает что posts остался тем же самым, connect не лезет в содержимоеданного массива. Только проверил ссылку а она осталась та же
            stateCopy.newPostText = "";

            return stateCopy;
        }
        case UP_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default:
            return state;

    }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const UPTEXTActionCreator =(text) => ({type: UP_TEXT, text: text})


export default profileReducer;
