import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createUser = createAsyncThunk("createUser", async (data, {rejectWithValue}) => {
    const response = await fetch("https://64724fdc6a9370d5a41b3fd0.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        rejectWithValue(error);
    }
})

const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    // createAsynThunk returns a promise as it's having a callback function with async, so to handle that extraReducers
    // are used.
    extraReducers: {
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        }
    }
});

export default userDetail.reducer;