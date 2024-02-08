import * as React from 'react';

import { BsListNested } from "react-icons/bs";
 
const index: React.FunctionComponent = () =>{
    return (
        <div className="bounder_nav bg-white w-[300px] min-h-full :">
            <div className="main_nav flex flex-col ">
                <div className="main_nav_header flex justify-between px-5 py-3 align-middle">
                    <p className='font-semibold text-xl'>Dashboards</p>
                    <BsListNested size={24}/>
                </div>
                <div className="main_nav_subtab flex flex-col">
                    <button className="list">Quản lý bài hát</button>
                    <button className="list">Quản lý người dùng</button>
                    <button className="list">Chức năng 3</button>
                </div>
            </div>
            <div className="sub_nav"></div>
        </div>
    )
}

export default index;