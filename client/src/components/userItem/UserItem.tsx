import React, { MouseEvent, FC } from 'react'
import { useAppDispatch } from 'hooks/reduxHooks'
import { Link } from 'react-router-dom'
import { IUser } from 'types/IUser'
import ButtonElem from 'components/UI/buttonElem/ButtonElem'

import './userItem.scss'

interface UserItemProps {
    userData: IUser;
}

const UserItem: FC<UserItemProps> = ({userData}) => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {

    }

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
                <div className="user-item__btn">
                    <Link to={`/details/${userData.id}`}>
                        <ButtonElem>Update</ButtonElem>
                    </Link>
                </div>
                <div className="user-item__btn">
                        <ButtonElem colorClass="delete" onClick={deleteUser}>Delete</ButtonElem>
                </div>
            </div>
        </article>
    )
}

export default UserItem