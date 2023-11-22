import { useEffect, useState } from "react"
import IconMoon from "./icons/IconMoon"
import IconSun from "./icons/IconSun"

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {

        if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

    }, [darkMode])

    return <header className="container mx-auto px-4 md:max-w-xl">
        <div className="flex justify-between pt-4">
            <h1 className="text-3xl font-semibold uppercase text-white tracking-[0.4em]">Todo</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <IconSun /> : <IconMoon />}
            </button>
        </div>
    </header>
}

export default Header;