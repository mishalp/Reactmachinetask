import briefcase from '@/assets/images/Briefcase.png'
import dash from '@/assets/images/Circled Menu.png'
import support from '@/assets/images/Support.png'
import puzzle from '@/assets/images/Puzzle.png'
import help from '@/assets/images/Help.png'
import off from '@/assets/images/Shutdown.png'
import { Link } from 'react-router-dom'

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

function Navbar({ active }) {
    return (
        <div className="min-w-[15rem] bg-[#20263A] h-screen grid grid-rows-3">
            <div className="flex flex-col gap-1 mx-auto my-8 items-center">
                <img src={briefcase} className='w-20 h-auto' alt="" />
                <h2 className='font-mono text-[#CBCBCB] font-bold text-xl'>STATEBOARD</h2>
            </div>
            <div className="flex flex-col ml-8 gap-6">
                {links.map((item, i) => (
                    <Link key={i} to={item.link} className={`flex gap-2 items-center pl-12 py-3 ${active === i ? 'bg-white text-black' : 'bg-[#1A1F30] text-white'} rounded-l-xl`} >
                        <img src={item.icon} className='w-5' alt="" />
                        <p>{item.title}</p>
                    </Link>
                ))}
            </div>
            <div className="self-end">
                <button className='w-full flex gap-2 items-center justify-center bg-white py-3' >
                    <p className='text-red-500'>Logout</p>
                    <img src={off} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Navbar