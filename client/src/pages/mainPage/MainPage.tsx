import React, { FC } from 'react'
import { useAppSelector } from 'hooks/reduxHooks'
import UserItem from 'components/userItem/UserItem'

import './mainPage.scss'

const MainPage: FC = () => {
    const {users} = useAppSelector(state => state.users)

    return (
        <section className="container users">
            <div className="users__content">
                {
                    users.map(user => <UserItem key={user.id} userData={user}/>)
                }
            </div>
        </section>
    )
}

export default MainPage