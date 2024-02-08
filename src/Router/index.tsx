import * as React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { MainPage } from '@/constants/page'


const index: React.FunctionComponent = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default index