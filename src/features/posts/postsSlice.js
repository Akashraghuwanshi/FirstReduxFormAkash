
import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = [
    /* {
        id:'1',
        title:'',
        content:'Write your title in Post Title and Write your content in Post Content'
    },
    {
        id:'2',
        title:'movies',
        content:'I love to watch patriotic movies'
    } */
]

const postsSlice =createSlice({
    name:'posts',
    initialState,
    /* reducers:{
        postAdded:(state,action)=>{
            state.push(action.payload);
        }

    } */
    reducers:{
        postAdded:{
            reducer(state,action){
              state.push(action.payload);
            },
            prepare(title,content){
                return {
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }

                }

            }
        }
    }
}) 


export const selectAllPosts = (state)=>state.posts
// we are doing this here becoz if the shape of state ever changes essentially we will just need to change it in the slice and not in every component. 

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer;
