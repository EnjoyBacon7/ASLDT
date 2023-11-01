import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {

    const [theme, setTheme] = useState('dark')

    // Create a media query
    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Add a listen event
    themeMediaQuery.addEventListener("change", () => {
        themeMediaQuery.matches ? setTheme('dark') : setTheme('light')
    });

    // Check for dark mode or light mode preference at the OS level
    useEffect(() => {
        themeMediaQuery.matches ? setTheme('dark') : setTheme('light')
    }, [])

    // Apply theme when theme state changes
    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme)
        // localStorage only used to avoid FOUC (flash of unstyled content)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div>
            <ThemeContext.Provider value={{ theme }}>
                {props.children}
            </ThemeContext.Provider>
        </div >
    )
}

export { ThemeProvider, ThemeContext }