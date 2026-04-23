import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/button.tsx';
import { GoHome, GoPerson } from 'react-icons/go';
import { MdWorkOutline } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiAliensLine } from 'react-icons/ri';

const links = [
    { path: '/', label: 'Home', icon: <GoHome size={22} /> },
    { path: '/projects', label: 'Proyectos', icon: <MdWorkOutline size={22} /> },
    { path: '/about', label: 'Sobre Mi', icon: <GoPerson size={22} /> },
];

export const NavBar = () => {
    const location = useLocation();

    return (
        <>
            {/* Desktop Top Navbar */}
            <nav className="group bg-black/10 backdrop-blur-3xl hidden sm:flex items-center justify-between px-6 fixed top-0 left-0 w-full h-16 z-50 shadow-[0_0_10px_3px_rgba(255,255,255,0.1)]">

                {/* Logo */}
                <div className="flex items-center min-w-21.5">
                    <RiAliensLine size={28} />
                </div>

                {/* Links */}
                <div className="flex items-center gap-2">
                    {links.map(link => (
                        <Button
                            key={link.path}
                            variant='link'
                            className='hover:shadow-[0_0_10px_6px_rgba(240,240,240,0.1),inset_0_0_2px_2px_rgba(255,255,255,0.3)] rounded-lg transition-all duration-300'
                        >
                            <Link
                                to={link.path}
                                className={`${location.pathname === link.path ? 'bg-white/5' : ''} flex items-center gap-2 px-4 py-2 hover:bg-white/5 rounded-lg`}
                            >
                                {link.icon}
                                <span className="text-sm">{link.label}</span>
                            </Link>
                        </Button>
                    ))}
                </div>

                {/* Socials */}
                <div className="flex items-center gap-4">
                    <a href="https://github.com/Otochicatole">
                        <FaGithub className='hover:scale-125 hover:text-blue-500 transition-all' size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/nico122-cuello">
                        <FaLinkedin className='hover:scale-125 hover:text-blue-500 transition-all' size={18} />
                    </a>
                    <a href="https://x.com/Nico_c_dev">
                        <FaTwitter className='hover:scale-125 hover:text-blue-500 transition-all' size={18} />
                    </a>
                </div>

            </nav>

            {/* Mobile (lo dejé igual) */}
            <nav className="sm:hidden fixed bottom-0 left-0 w-full z-50 h-15 bg-white/5 backdrop-blur-3xl">
                <ul className="flex justify-around items-center h-full">
                    {links.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`${location.pathname === link.path ? 'bg-white/5' : ''} flex flex-col items-center justify-center h-10 px-10 rounded-full`}
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