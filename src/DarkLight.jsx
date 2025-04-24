import React, { createContext, useState } from 'react'
import Website from './Website';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((pretheme) => pretheme === 'light' ? 'dark' : 'light')

    }


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Website />
            {children}
        </ThemeContext.Provider>
    )
}
