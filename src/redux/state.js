let store = {
    _state : {
        profilePage: {
            posts: [
                { id: 1, message: "by", likesCount: 12 },
                { id: 2, message: "lol", likesCount: 12 },
                { id: 3, message: "heh", likesCount: 12 },
                { id: 4, message: "ah", likesCount: 12 },
                { id: 5, message: "erger", likesCount: 12 },
            ],
            newPostText:'it-cam'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Alex" },
                { id: 2, name: "Zhenya" },
                { id: 3, name: "Vadim" },
                { id: 4, name: "Fedor" },
                { id: 5, name: "Vania" },
            ],
            messages:[
                { id: 1, message: "hi" },
                { id: 2, message: "Wtf" },
                { id: 3, message: "ye" },
                { id: 4, message: "i love" },
                { id: 5, message: "killer" },
            ]
        },
        sidebar: {},
        
        
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    
    },
    addPost (){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber = observer;
   }
}

export default store;
window.state = store;