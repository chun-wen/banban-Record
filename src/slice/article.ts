import { Article } from "@/Interfaces/I_article";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const articleSlice = createSlice({
    name: 'article',
    initialState: {
        comment: 0,
        tags: [''],
        pageSize: 10,
        page: 1,
        content: []
    },
    reducers: {
        getArticle: (state) => { state },
        updateArticle: (state, action: PayloadAction<Pick<Article, 'content'>>) => {
            state.content = action.payload.content;
        }
    }
});

// Action creators are generated for each case reducer function
export const { getArticle, updateArticle } = articleSlice.actions;

export default articleSlice.reducer;