import React, { createContext, useState, useContext } from 'react';


const LoadingContext = createContext();


export const LoadingProvider = ({ children }) => {
    const [isRouting, setIsRouting] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);


    return (
        <LoadingContext.Provider value={{ isRouting, setIsRouting , currentStage , setCurrentStage }}>
            {children}
        </LoadingContext.Provider>
    );
};


export const useLoading = () => {
    return useContext(LoadingContext);
};