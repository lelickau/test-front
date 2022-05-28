import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import { Route, Routes } from 'react-router-dom'
import { getUsersData } from 'store/slices/userSlice'
import DetailsPage from 'pages/detailsPage/DetailsPage'
import MainPage from 'pages/mainPage/MainPage'
import Preloader from 'components/preloader/Preloader'

function App() {
    const {error, status} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersData())
    }, [dispatch])

    if (status === 'loading') return <Preloader/>

    return (
        <>
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="details/:id" element={<DetailsPage/>} />
        </Routes>
        </>
    )
}

export default App
