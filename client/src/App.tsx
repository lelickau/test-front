import React, { useEffect } from 'react'
import { useAppDispatch } from 'hooks/reduxHooks'
import { Route, Routes } from 'react-router-dom'
import { getUsersData } from 'store/slices/userSlice'
import MainPage from 'pages/mainPage/MainPage'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersData())
    }, [dispatch])


    return (
        <>
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
        </Routes>
        </>
    )
}

export default App
