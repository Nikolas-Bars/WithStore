import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import musicReducer from "./music-reducer";
import sideBarReducer from "./sideBar-reducer";




let store = {
   /* _state: {
        musicComposition: [
            {}
        ],
        profilePage: {
            newPostText: 'it-kamasutra',
            posts: [
                {id: '1', message: 'Hi! How are you?', likeCounts: ' likes: 25'},
                {id: '1', message: 'It`s my first post.', likeCounts: ' likes: 12'},
                {id: '1', message: 'Loh!', likeCounts: ' likes: 38'},
                {id: '1', message: 'Pidr!', likeCounts: ' likes: 11'},
                {id: '1', message: 'Idi nah!', likeCounts: ' likes: 7'}
            ],

        },
        sideBar: {},
        dialogsPage: {
            newMessageBody: 'fuck!',
            dialogs: [
                {
                    id: '1',
                    name: 'Dimych',
                    img: <img
                        src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg"
                        width='30'/>
                },
                {
                    id: '2',
                    name: 'Andrey',
                    img: <img src="https://i.pinimg.com/originals/52/ea/be/52eabecf424b217807d0e557b9a0c38e.jpg"
                              width='30'/>
                },
                {
                    id: '3',
                    name: 'Sveta',
                    img: <img
                        src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg"
                        width='30'/>
                },
                {
                    id: '4',
                    name: 'Sasha',
                    img: <img
                        src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg"
                        width='30'/>
                },
                {
                    id: '5',
                    name: 'Victor',
                    img: <img
                        src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg"
                        width='30'/>
                },
                {
                    id: '6',
                    name: 'Valera',
                    img: <img src="https://icon-library.com/images/icon-programmer/icon-programmer-10.jpg" width='30'/>
                }
            ],
            messages: [
                {id: '1', message: 'Hi',},
                {id: '2', message: 'How is your it kamasutra?'},
                {id: '3', message: 'Yo'},
                {id: '4', message: 'Yo'},
                {id: '5', message: 'Yo'},
                {id: '6', message: 'Yo'}
            ]
        }
    },
    _callSubscriber() {
        console.log("state changed")
    }, /*бывшая функция rerenderEntireTree перерисовывает документ*/

    /*getState() {
        return this._state;
    },
    /*subscribe(observer) { /*observer(это паттерн) - это будет функция rerenderEntireTree из index.js*/
     /*   this._callSubscriber = observer;
        /*мы превращаем функцию rerenderEntireTree(пустая функция объявленная в начале этого файла )
        в функцию rerenderEntireTree из index.js которую мы передали как аргумент для subscribe},*/

    /*dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.musicComposition = musicReducer(this._state.musicComposition, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state)
        } */
}







export default store;
window.store = store;