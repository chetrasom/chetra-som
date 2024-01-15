import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);

    const openSidebar = () => setIsSidebar(true);
    const closeSidebar = () => setIsSidebar(false);
    
    return (
        <AppContext.Provider value={{
            isSidebar,
            openSidebar, closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext)
};