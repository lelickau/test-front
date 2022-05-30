import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { sortData } from "helpers/sortData"
import { RootState } from "store"
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
            const fetchUsers = await fetchUsers.json()
                
            return fetchUsers

        } catch (e) {
            console.log("Error getting users: ", e)
            return rejectWithValue('Error getting users')
        }
    }
)

export const updateUserData = createAsyncThunk<IUser[], IUser, {rejectValue: string, state: RootState}>(
    'user/updateUserData',
    async (query: IUser, {rejectWithValue, getState}) => {
        try {
            const userId = query.id
            const fetchUpdata = await fetch(`${process.env.REACT_APP_SERVER_URL}/${userId}`, {
                method: 'PUT',
                body: JSON.stringify(query),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (fetchUpdata.status !== 200) {
                throw new Error('Error getting update')
            }

            const data = getState().users
            const updateData = data.users.map(user => {
                if (user.id === userId) {
                    return query
                } else {
                    return user
                }
            })
            return updateData

        } catch (e) {
            console.log("Error getting update: ", e)
            return rejectWithValue('Error getting update')
        }
    }
)

export const deleteUserData = createAsyncThunk<IUser[], number, {rejectValue: string, state: RootState}>(
    'user/deleteUserData',
    async (id: number, {rejectWithValue, getState}) => {
        try {
            const fetchDelete = await fetch(`${process.env.REACT_APP_SERVER_URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (fetchDelete.status !== 200) {
                throw new Error('Error getting delete')
            }

            const data = getState().users
            const newStateData = data.users.filter(user => user.id !== id)
            return newStateData

        } catch (e) {
            console.log("Error getting delete: ", e)
            return rejectWithValue('Error getting delete')
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

        .addCase(updateUserData.pending, setLoading)
        .addCase(updateUserData.rejected, setRejected)
        .addCase(updateUserData.fulfilled, updateData)

        .addCase(deleteUserData.pending, setLoading)
        .addCase(deleteUserData.rejected, setRejected)
        .addCase(deleteUserData.fulfilled, updateData)
    }
})

export const {sortUsers} = userSlice.actions
export default userSlice.reducer
