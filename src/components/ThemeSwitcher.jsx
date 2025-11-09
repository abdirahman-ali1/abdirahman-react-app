import {useState} from 'react';

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    
     const appStyles = {
        backgroundColor: darkMode ? '#222' : '#f4f4f4', // ? tenary operator consits of three part ? '#222' : '#f4f4f4' one of them will be executed
        color: darkMode ? '#fff' : '#000',
        padding: "2rem",
        textAlign: "center",
        border: "1px solid #ddd",
    };

    return (
      <div style={appStyles}>
        <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
        <button onClick={toggleTheme}>
          Switch to {darkMode? "Light" : "Dark"} Mode
        </button>
      </div>
    );
}

export default ThemeToggle;