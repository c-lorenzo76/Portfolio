import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export function ThemeToggle(){

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkModePreference = localStorage.getItem('theme') === 'dark';
        setIsDarkMode(darkModePreference);
        document.documentElement.classList.toggle('dark', darkModePreference);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        const newTheme = !isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    return (
      <Button onClick={toggleTheme} className={"bg-muted dark:bg-light-muted"}>
          {isDarkMode ? (
              <Sun className="w-6 h-6 text-yellow-500" /> // Light mode icon
          ) : (
              <Moon className="w-6 h-6 text-blue-500" /> // Dark mode icon
          )}
      </Button>
    );
}