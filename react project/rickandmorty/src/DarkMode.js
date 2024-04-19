function DarkMode({ darkMode, setDarkMode }) {

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <button className="dl-btn" onClick={toggleDarkMode}>
            {darkMode ? 'Lumos' : 'Nox'}
        </button>
    );
};
export default DarkMode;