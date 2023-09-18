import React from 'react';
import { useState } from 'react';
import Link from '../Link/Link';
import { HiBars3CenterLeft } from "react-icons/hi2";
import {AiOutlineClose} from "react-icons/ai"

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Blog', path: '/blog' }
    ];

    return (
        <nav className="text-black p-6 bg-yellow-300
        ">
            <div onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose className='text-2xl'></AiOutlineClose> 
                    : <HiBars3CenterLeft className='text-2xl md:hidden'></HiBars3CenterLeft>
                } 
            </div>
            <ul className={`md:flex absolute md:static duration-1000 ${open ? '-top-36' : 'top-16'} bg-yellow-300 p-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;