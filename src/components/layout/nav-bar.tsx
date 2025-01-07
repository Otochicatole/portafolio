import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
    {
        path: '/',
        title: 'Inicio',
    },
    {
        path: '/projects',
        title: 'Proyectos',
    },
    {
        path: '/about',
        title: 'Sobre mi',
    },
    {
        path: '/certifications',
        title: 'Certificaciones',
    },
    {
        path: '/skills',
        title: 'Skills',
    }
];

export const NavBar = () => {
    const { pathname } = useLocation();
    const [currentPath, setCurrentPath] = useState(pathname);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

    return (
        <nav className="flex p-1 justify-center min-h-[64px] items-center fixed w-full bg-[#171717] border-b border-b-neutral-800 lg:bg-[#121212]/80 lg:backdrop-blur-xl text-gray-300 z-50">
            <div className="flex flex-row transition-all items-center justify-between w-full xl:w-[80%] min-w-[300px]">
                <section className='flex flex-row space-x-2 hover:cursor-pointer hover:bg-gray-300/5 p-2 rounded-sm'>
                    <img src="./profileAvatar.webp" width={40} height={40} alt="" className='rounded-sm max-h-[40px]' />
                    <div className='flex flex-col'>
                        <h2 className='text-[12px]'>Carlos Agustin Nicolas Cuello</h2>
                        <p className='text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-700'>Front-End Developer</p>
                    </div>
                </section>

                {/* Botón de hamburguesa en pantallas pequeñas */}
                <button
                    className={`lg:hidden flex flex-col items-center justify-center space-y-1 mr-6 p-3 hover:bg-white/10 rounded-sm ${isMobileMenuOpen ? 'rotate-180 transition-all duration-300 ease-in-out' : 'rotate-0 transition-all duration-300 ease-in-out'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-6 h-1 bg-gray-300"></div>
                    <div className="w-6 h-1 bg-gray-300"></div>
                    <div className="w-6 h-1 bg-gray-300"></div>
                </button>

                {/* Menú en pantallas pequeñas (mobile) */}
                <ol
                    className={`lg:hidden flex flex-col items-center absolute top-[64px] left-0 w-full bg-[#171717] p-4 space-y-2 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className={`flex items-center justify-center w-[80%] hover:cursor-pointer hover:bg-gray-300/5 p-2  rounded-sm ${currentPath === link.path ? 'text-green-500' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.title}
                        </Link>
                    ))}
                </ol>

                {/* Menú de escritorio (pantallas grandes) */}
                <ol className="lg:flex space-x-1 hidden">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className={`flex items-center justify-center sm:min-w-[100px] hover:cursor-pointer hover:border-b p-2 rounded-sm ${currentPath === link.path ? 'text-green-500' : ''}`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </ol>
            </div>
        </nav>
    );
};
