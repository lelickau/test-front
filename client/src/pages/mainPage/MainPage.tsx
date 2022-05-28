import React, { FC } from 'react'
import { useAppSelector } from 'hooks/reduxHooks'
import UserItem from 'components/userItem/UserItem'
import SelectElem from 'components/UI/selectElem/SelectElem'

import './mainPage.scss'

const MainPage: FC = () => {
    const {users} = useAppSelector(state => state.users)

    const optionsData = [
        {val: 'byAll', text: 'all'},
        {val: 'byName', text: 'by name'},
    ]

    return (
        <section className="container users">
            <SelectElem
                optionsData={optionsData}
                name="sortUsers"
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