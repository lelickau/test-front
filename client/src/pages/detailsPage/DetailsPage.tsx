import React, { FC, ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUserData } from 'store/slices/userSlice'
import ButtonElem from 'components/UI/buttonElem/ButtonElem'
import InputElem from 'components/UI/inputElem/InputElem'
import SelectElem from 'components/UI/selectElem/SelectElem'

import './detailsPage.scss'

const DetailsPage: FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const user: any = useAppSelector(state => state.users.users.find(user => user.id === +id!))

    const [form, setForm] = useState({
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        age: user?.age,
        country: user?.country,
        id: user?.id,
    })

    useEffect(() => {
        if (user) {
            setForm(user)
        } else {
            navigate(`/`)
        }
    }, [user])

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const updateUser = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(updateUserData(form))
        navigate(`/`)
    }

    const optionsData = [
        {val: 'USA', text: 'USA'},
        {val: 'Russia', text: 'Russia'},
        {val: 'Australia', text: 'Australia'},
    ]

    return (
    <section className="container details">
        <form className="details__form">
            <h1 className="details__title">Update contact</h1>
            <label className="details__label">
                Name
                <InputElem
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={changeHandler}
                />
            </label>
            <label className="details__label">
                Email
                <InputElem
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={changeHandler}
                />
            </label>
            <label className="details__label">
                Phone
                <InputElem
                    name="phone"
                    type="text"
                    value={form.phone}
                    onChange={changeHandler}
                />
            </label>
            <label className="details__label">
                Age
                <InputElem
                    name="age"
                    type="number"
                    value={form.age}
                    onChange={changeHandler}
                />
            </label>
            <SelectElem
                optionsData={optionsData}
                name="country"
                value={form.country}
                onChange={changeHandler}
            />
            <div className="details__btn">
                <ButtonElem onClick={updateUser}>Update</ButtonElem>
            </div>
        </form>
    </section>
    )
}

export default DetailsPage