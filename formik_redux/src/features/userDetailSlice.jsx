import { createSlice } from '@reduxjs/toolkit';

const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
});

export default userDetail.reducer;