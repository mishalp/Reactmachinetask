import briefcase from '@/assets/images/Briefcase.png'
import dash from '@/assets/images/Circled Menu.png'
import support from '@/assets/images/Support.png'
import puzzle from '@/assets/images/Puzzle.png'
import help from '@/assets/images/Help.png'
import off from '@/assets/images/Shutdown.png'
import stat from '@/assets/images/StatBoard.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const links = [
    {
        title: "Dashboard",
        icon: dash,
        link: '/'
    },
    {
        title: "Support",
        icon: support,
        link: '/support'
    },
    {
        title: "Plugins",
        icon: puzzle,
        link: '/plugins'
    },
    {
        title: "Help",
        icon: help,
        link: '/help'
    },
]

const menu = "https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png"

function Navbar({ active }) {
    const [show, setShow] = useState(false)
    return (
        <div className="w-full max-lg:justify-between max-lg:p-4 z-10 lg:min-w-[15rem] bg-[#20263A] lg:h-screen overflow-auto lg:grid fixed grid grid-cols-1 max-lg:gap-4 lg:grid-rows-3 lg:sticky top-0 left-0">
            <div className="flex lg:flex-col gap-1 lg:mx-auto lg:my-8 max-lg:w-full max-lg:justify-between lg:items-center">
                <div className="flex flex-col items-center">
                    <img src={briefcase} className='w-10 lg:w-20 h-auto' alt="" />
                    {/* <h2 className='font-mono text-[#CBCBCB] font-bold text-xl'>STATEBOARD</h2> */}
                    <img src={stat} className='max-lg:w-16' alt="" />
                </div>
                <img src={menu} onClick={() => setShow(!show)} className='w-8 aspect-square object-contain h-auto lg:hidden' alt="" />
            </div>
            <div className="lg:flex flex-col hidden lg:ml-8 gap-6">
                {links.map((item, i) => (
                    <Link key={i} to={item.link} className={`flex gap-2 items-center pl-12 py-3 ${active === i ? 'bg-white text-black' : 'bg-[#1A1F30] text-white'} rounded-l-xl`} >
                        <img src={item.icon} className='w-5' alt="" />
                        <p>{item.title}</p>
                    </Link>
                ))}
            </div>
            <div className="self-end hidden lg:flex">
                <button className='w-full flex gap-2 items-center justify-center bg-white py-3' >
                    <p className='text-red-500'>Logout</p>
                    <img src={off} alt="" />
                </button>
            </div>

            <div className={`flex flex-col gap-4 overflow-hidden duration-500 ${show ? 'max-h-[30rem]' : 'max-h-0'}`}>
                <div className="flex flex-col gap-6">
                    {links.map((item, i) => (
                        <Link key={i} to={item.link} className={`flex gap-2 items-center justify-center py-3 ${active === i ? 'bg-white text-black' : 'bg-[#1A1F30] text-white'} rounded-xl`} >
                            <img src={item.icon} className='w-5' alt="" />
                            <p>{item.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar