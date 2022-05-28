import React, { ButtonHTMLAttributes, FC } from 'react'

import './buttonElem.scss'

type ButtonElemPropsAttr = ButtonHTMLAttributes<HTMLButtonElement>

interface ButtonElemProps {
    colorClass?: string;
}

const ButtonElem: FC<ButtonElemPropsAttr & ButtonElemProps> = ({colorClass, children, ...rest}) => {
    return (
        <button className={`default-btn ${colorClass}`} {...rest} >{children}</button>
    )
}

export default ButtonElem