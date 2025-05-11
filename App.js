import { useState } from 'react';
import './App.css';
import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
 <div className={darkMode ? "app dark" : "app light"}>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header darkMode={darkMode} />
    </div>
  );
}

export default App;
