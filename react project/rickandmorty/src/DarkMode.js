import { useState } from 'react';

function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Lumos' : 'Nox'}
            </button>
        </div>
    )
}
export default DarkMode;