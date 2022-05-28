import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import ButtonElem from 'components/UI/buttonElem/ButtonElem'
import InputElem from 'components/UI/inputElem/InputElem'
import SelectElem from 'components/UI/selectElem/SelectElem'

const DetailsPage: FC = () => {

    const {id} = useParams()

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
                />
            </label>
            <label className="details__label">
                Email
                <InputElem
                    name="email"
                    type="email"
                />
            </label>
            <label className="details__label">
                Phone
                <InputElem
                    name="phone"
                    type="text"
                />
            </label>
            <label className="details__label">
                Age 
                <InputElem
                    name="age"
                    type="number"
                />
            </label>
            <SelectElem
                optionsData={optionsData}
                name="country"
            />
            <div className="details__btn">
                <ButtonElem>Update</ButtonElem>
            </div>
        </form>
    </section>
    )
}

export default DetailsPage