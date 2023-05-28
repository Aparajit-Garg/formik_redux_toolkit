import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from "axios";

// createAsyncThunk is used to handle async operations with redux
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
});


export const showUsers = createAsyncThunk("showUsers", async (args, {rejectWithValue}) => {
    const response = await fetch("https://64724fdc6a9370d5a41b3fd0.mockapi.io/crud");

    try {
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        rejectWithValue(error);
    }
})


export const deleteUsers = createAsyncThunk("deleteUsers", async (id, {rejectWithValue}) => {
    const response = await fetch(`https://64724fdc6a9370d5a41b3fd0.mockapi.io/crud/${id}`, {
        method: "DELETE"
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        rejectWithValue(error);
    }
});


export const editUser = createAsyncThunk("editUser", async (data, {rejectWithValue}) => {
    const response = await fetch(`https://64724fdc6a9370d5a41b3fd0.mockapi.io/crud/${data.id}`, {
        method: "PUT",
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
        },
        [showUsers.pending]: (state) => {
            state.loading = true;
        },
        [showUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [showUsers.rejected]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [deleteUsers.pending]: (state) => {
            state.loading = true;
        },
        [deleteUsers.fulfilled]: (state, action) => {
            state.loading = false;
            const id = action.payload.id;

            state.users = state.users.filter(user => {
                return user.id !== id;
            })
            
        },
        [deleteUsers.rejected]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [editUser.pending]: (state) => {
            state.loading = true;
        },
        [editUser.fulfilled]: (state, action) => {
            state.loading = false;
            // the action.payload contains only the updated entry as the object, map logic updates the value in the store
            // which then reflects on the showPosts page. Otherwise there will be an error with
            // state.users = action.payload
            state.users = state.users.map((ele) => {
                return ele.id === action.payload.id ? action.payload : ele;
            });
        },
        [editUser.rejected]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        }
    }
});

export default userDetail.reducer;