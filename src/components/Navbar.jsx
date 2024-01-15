import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useGlobalContext } from '../context/context';
import { Logo, MoonSvg, SunSvg, MobileNavbar } from '../components';
import { menuData } from '../data';
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
    // const [themeToggle, setThemeToggle] = useState(false);

    const [activeNavbar, setActiveNavbar] = useState(false);

    const { openSidebar } = useGlobalContext();

    // const themeToggleHandler = () => {
    //     setThemeToggle(prev => !prev);
    // }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setActiveNavbar(true);
            } else {
                setActiveNavbar(false);
            }
        }

        // add event listener
        window.addEventListener('scroll', handleScroll);

        // clear event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <>
            <header className={`${activeNavbar ? 'bg-white' : 'bg-transparent py-1'} 
            fixed top-0 left-0 w-full z-20 shadow-sm transition-all ease-linear duration-200`}>
                <div className="container">
                    <div className='flex items-center justify-between'>

                        <Logo />

                        <nav className='hidden md:flex lg:ml-auto lg:mr-10'>
                            <ul className='flex items-center gap-x-10'>
                                {menuData.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <Link 
                                                activeClass="activeReactScroll" 
                                                to={item.url} 
                                                spy={true} 
                                                smooth={true} 
                                                offset={0} 
                                                duration={500} 
                                                className='cursor-pointer'
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>

                        <div className='flex items-center gap-x-4'>
                            {/* <div>
                                {themeToggle ? (
                                    <button onClick={themeToggleHandler}>
                                        <SunSvg />
                                    </button>
                                ) : (
                                    <button onClick={themeToggleHandler}>
                                        <MoonSvg />
                                    </button>
                                )}
                            </div> */}

                            <div>
                                <button 
                                    type='open menu' 
                                    className='md:hidden'
                                    onClick={openSidebar}
                                >
                                    <HiMiniBars3BottomRight className='w-7 h-7' />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            <MobileNavbar />
        </>
    )
}

export default Navbar