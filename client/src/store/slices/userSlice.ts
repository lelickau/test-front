import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "types/IUser"

interface UserInitialState {
    users: IUser[];
    status: string;
    error: string | undefined;
}

const initialState: UserInitialState = {
    users: [],
    status: '',
    error: '',
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

    },
    extraReducers: () => {

    }
})

export const {} = userSlice.actions
export default userSlice.reducer