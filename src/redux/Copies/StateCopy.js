

let rerenderEntireTree =()=>{
    console.log("state changed")
}

let state = {
    musicComposition:[
        {}
    ],
    profilePage: {
        newPostText: 'it-kamasutra',
        posts: [
            {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 25'},
            {id: '1', message: 'It`s my first post.', likeCounts:' likes: 12'},
            {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 38'},
            {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 11'},
            {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 7'}
        ],

    },
    dialogsPage:{
        newMessageInTextArea: 'fuck!',
        dialogs: [
            {id: '1', name: 'Dimych', img: <img src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg" width='30'/>},
            {id: '2', name: 'Andrey', img: <img src="https://i.pinimg.com/originals/52/ea/be/52eabecf424b217807d0e557b9a0c38e.jpg" width='30'/>},
            {id: '3', name: 'Sveta', img: <img src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg" width='30'/>},
            {id: '4', name: 'Sasha', img: <img src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg" width='30'/>},
            {id: '5', name: 'Victor', img: <img src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg" width='30'/>},
            {id: '6', name: 'Valera', img: <img src="https://icon-library.com/images/icon-programmer/icon-programmer-10.jpg" width='30'/>}
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
}



export let addComposition = (composition) =>{

    let nameComposition = {name: composition};
    state.musicComposition.push(nameComposition);
    alert(composition);
}


export default state