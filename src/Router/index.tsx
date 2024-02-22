import * as React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { MainPage, Page404, LoginPage } from '@/constants/page'


const index: React.FunctionComponent = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="/*" element={<Page404/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default index