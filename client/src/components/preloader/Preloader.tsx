import React, { FC } from 'react'

import './preloader.scss'

const Preloader: FC = () => {
    return (
        <div className="preloader">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Preloader