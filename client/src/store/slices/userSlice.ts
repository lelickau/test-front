import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { sortData } from "helpers/sortData"
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

export const getUsersData = createAsyncThunk<any, void,{rejectValue: string}>(
    'user/getUsersData',
    async (_, {rejectWithValue}) => {
        try {
            const fetchUsers = await fetch(`${process.env.REACT_APP_SERVER_URL}`)
                .then(res => {
                    if (res.status !== 200) throw new Error('Error getting users')
                    return res.json()
                })

            return fetchUsers

        } catch (e) {
            console.log("Error getting users: ", e)
            return rejectWithValue('Error getting users')
        }
    }
)

const setLoading = (state: UserInitialState) => {
    state.status = 'loading'
    state.error = ''
}

const setRejected = (state: UserInitialState, action: PayloadAction<string | undefined>) => {
    state.status = 'rejected'
    state.error = action.payload
}

const updateData = (state: UserInitialState, action: PayloadAction<IUser[]>) => {
    state.status = 'fulfilled'
    state.users = action.payload
    state.error = ''
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        sortUsers: (state, action) => {
            switch (action.payload) {
                case 'byName':
                    sortData(state.users, 'name')
                    break;
                case 'byAll':
                    sortData(state.users, 'id')
                    break;
                default:
                    break;
            }
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUsersData.pending, setLoading)
        .addCase(getUsersData.rejected, setRejected)
        .addCase(getUsersData.fulfilled, updateData)
    }
})

export const {sortUsers} = userSlice.actions
export default userSlice.reducer