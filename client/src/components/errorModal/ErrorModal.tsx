import React, { FC, ReactNode, useState } from 'react'

import './errorModal.scss'

interface ModalProps {
    active: boolean;
    children: ReactNode;
}

const ErrorModal: FC<ModalProps> = ({active, children}) => {

    const [modalActive, setModalActive] = useState(active)

    setInterval(() => {
        setModalActive(false)
    }, 6000)

    return (
        <div
            className="modal"
            style={{
                opacity: `${modalActive ? 1 : 0}`,
                pointerEvents: `${modalActive ? 'auto' : 'none'}`,
            }}
        >
            {children}
        </div>
    )
}

export default ErrorModal