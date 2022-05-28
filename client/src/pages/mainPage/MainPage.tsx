import React, { ChangeEvent, FC, useState } from 'react'
import {sortUsers} from 'store/slices/userSlice'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import UserItem from 'components/userItem/UserItem'
import SelectElem from 'components/UI/selectElem/SelectElem'

import './mainPage.scss'

const MainPage: FC = () => {
    const dispatch = useAppDispatch()
    const {users} = useAppSelector(state => state.users)

    const [sortValue, setSortValue] = useState<string>('all')

    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortValue(e.target.value)
        dispatch(sortUsers(e.target.value))
    }

    const optionsData = [
        {val: 'byAll', text: 'all'},
        {val: 'byName', text: 'by name'},
    ]

    return (
        <section className="container users">
            <SelectElem
                optionsData={optionsData}
                name="sortUsers"
                value={sortValue}
                onChange={changeHandler}
            />
            <div className="users__content">
                {
                    users.map(user => <UserItem key={user.id} userData={user}/>)
                }
            </div>
        </section>
    )
}

export default MainPage