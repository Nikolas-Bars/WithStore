import React from 'react'
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

it('post should be added', ()=> {
    let action = addPostActionCreator('it-incubator')
    let state = {
        profile: null,
        posts: [
            {id: '1', message: 'Hi! How are you?', likeCounts: ' likes: 25'},
            {id: '1', message: 'It`s my first post.', likeCounts: ' likes: 12'},
            {id: '1', message: 'Wow!', likeCounts: ' likes: 38'},
            {id: '1', message: 'Looser!', likeCounts: ' likes: 11'},
            {id: '1', message: 'Robot!', likeCounts: ' likes: 7'}
        ]}
        let newState = profileReducer(state, action)
        //в результате теста должно стать 6 постов
        expect(newState.posts.length).toBe(6);
        expect(newState.posts[5].message).toBe('it-incubator')
})

it('post should be delited', ()=> {
    let action = deletePost(1)
    let state = {
        profile: null,
        posts: [
            {id: '1', message: 'Hi! How are you?', likeCounts: ' likes: 25'},
            {id: '1', message: 'It`s my first post.', likeCounts: ' likes: 12'},
            {id: '1', message: 'Wow!', likeCounts: ' likes: 38'},
            {id: '1', message: 'Looser!', likeCounts: ' likes: 11'},
            {id: '1', message: 'Robot!', likeCounts: ' likes: 7'}
        ]}
    let newState = profileReducer(state, action)
    //в результате теста должно стать 4 поста
    expect(newState.posts.length).toBe(4);

})