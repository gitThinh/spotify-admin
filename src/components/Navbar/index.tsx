import * as React from 'react';

import { BsListNested } from "react-icons/bs";
 
const index: React.FunctionComponent = () =>{
    return (
        <div className="bounder_nav bg-white min-w-[300px] min-h-full border-r border-[#ddd] border-solid">
            <div className="main_nav flex flex-col">
                <div className="main_nav_header flex justify-between px-5 py-3 align-middle bg-slate-100">
                    <p className='font-semibold text-xl'>Dashboards</p>
                    <BsListNested size={24} className=''/>
                </div>
                <div className="main_nav_subtab flex flex-col p-4">
                    <button className="nav_options">Quản lý bài hát</button>
                    <button className="nav_options">Quản lý người dùng</button>
                    <button className="nav_options">Chức năng 3</button>
                </div>
            </div>
            <div className="sub_nav"></div>
        </div>
    )
}

export default index;