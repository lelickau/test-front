import React, { FC, SelectHTMLAttributes } from 'react'

import './selectElem.scss'

type SelectAtrProps =  SelectHTMLAttributes<HTMLSelectElement>

interface IOption {
    val: string;
    text: string;
}

interface SelectElemProps {
    optionsData: IOption[];
}

const SelectElem: FC<SelectAtrProps & SelectElemProps> = ({optionsData, ...rest}) => {
    return (
        <select
            {...rest}
            className="select"
        >
            {
                optionsData.map(opt =>
                    <option
                        key={opt.val}
                        value={opt.val}
                    >{opt.text}</option>
                )
            }
    </select>
    )
}

export default SelectElem