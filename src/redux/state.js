import { renderEntiredTree } from "../render";
 
export let state = {
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
    sidebar:{},
}

export let addPost = ()=>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntiredTree(state)
}


export let updateNewPostText = (newText)=>{
    state.profilePage.newPostText = newText;
    renderEntiredTree(state)
}
