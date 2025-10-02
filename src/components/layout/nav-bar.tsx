import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/button';
import { GoHome, GoPerson } from 'react-icons/go';
import { MdWorkOutline } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiAliensLine } from 'react-icons/ri';

const links = [
    { path: '/', label: 'Home', icon: <GoHome size={25} /> },
    { path: '/projects', label: 'Proyectos', icon: <MdWorkOutline size={25} /> },
    { path: '/about', label: 'Sobre Mi', icon: <GoPerson size={25} /> },
];


export const NavBar = () => {
    const location = useLocation();
    return (
        <>
            <nav
                className="group bg-black/10 backdrop-blur-3xl hidden sm:flex flex-col justify-between items-center py-4 fixed w-[80px] transition-all ease-in-out overflow-hidden top-0 z-50 h-full shadow-[0_0_10px_3px_rgba(255,255,255,0.1)]">
                <RiAliensLine size={30} className='mt-3' />
                <div className="flex flex-col items-center justify-center w-full p-2 gap-1">
                    {links.map(link => (
                        <Button className='flex w-full hover:shadow-[0_0_10px_10px_rgba(240,240,240,0.1),_inset_0_0_2px_2px_rgba(255,255,255,0.5)] rounded-lg transition-all duration-400 ease-in-out'
                            variant='link'
                            key={link.path}>
                            <Link
                                to={link.path}
                                className={`${location.pathname === link.path ? 'bg-white/5' : ''} flex flex-row w-full items-center gap-3 p-3 px-5 hover:bg-white/5 rounded-lg`}
                            >
                                <span>{link.icon}</span>
                            </Link>
                        </Button>
                    ))}
                </div>
                <div className=' hidden sm:flex flex-col h-[150px] p-1 items-center justify-center gap-5 py-5'>
                    <a href="https://github.com/Otochicatole"><FaGithub className='hover:scale-150 hover:text-blue-500 cursor-pointer transition-all' size={20} /></a>
                    <a href="https://www.linkedin.com/in/nico122-cuello"><FaLinkedin className='hover:scale-150 hover:text-blue-500 cursor-pointer transition-all' size={20} /></a>
                    <a href="https://x.com/Nico_c_dev"><FaTwitter className='hover:scale-150 hover:text-blue-500 cursor-pointer transition-all' size={20} /></a>
                </div>
            </nav>
            <nav className="sm:hidden fixed bottom-0 left-0 w-full z-50 h-[60px] bg-white/5 backdrop-blur-3xl">
                <ul className="flex justify-around items-center h-full">
                    {links.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`${location.pathname === link.path ? 'bg-white/5' : ''} flex flex-col items-center justify-center h-[40px] px-10 rounded-full`}
                            >
                                {link.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
