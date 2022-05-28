import React, { FC } from 'react'
import { IUser } from 'types/IUser'

interface UserItemProps {
    userData: IUser;
}

const UserItem: FC<UserItemProps> = ({userData}) => {

    return (
        <article className="user-item">
            <div className="user-item__content">
                <h2 className="user-item__title">{userData.name}</h2>
                <div className="user-item__info">{userData.age} years old</div>
                <div className="user-item__info">{userData.email}</div>
                <div className="user-item__info">{userData.country}</div>
                <div className="user-item__info">Phone: {userData.phone}</div>
            </div>
            <div className="user-item__navigate">

            </div>
        </article>
    )
}

export default UserItem