import { useGlobalContext } from "../context/context"
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { menuData } from "../data";

const MobileNavbar = () => {
    const { isSidebar, closeSidebar } = useGlobalContext();

    return (
        <div className={`${isSidebar ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'} 
        fixed inset-0 bg-black/20 z-30 transition-all ease-in-out duration-300`}
        >
            <div className={`${isSidebar ? 'right-0' : '-right-full'} 
            absolute top-0 max-w-[300px] w-full h-screen bg-white transition-all ease-in-out duration-300 p-5`}>
                <div>
                    <button 
                        aria-label="close menu" 
                        onClick={closeSidebar}
                        className="text-2xl"
                    >
                        <FaTimes />
                    </button>

                    <nav className='mt-6'>
                        <ul className='space-y-6 text-center text-lg'>
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
                                            onClick={closeSidebar}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default MobileNavbar