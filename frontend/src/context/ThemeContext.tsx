// ThemeContext.js
import { createContext, useContext, useState } from "react";

export type ThemeContextValue = {
	theme: boolean;
	toggleTheme: () => void;
};

const InitialContextValue: ThemeContextValue = {
	theme: true,
	toggleTheme: () => {},
};

export const ThemeContext =
	createContext<ThemeContextValue>(InitialContextValue);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<boolean>(true); // Default to dark theme

	const toggleTheme = () => {
		setTheme((prevTheme) => !prevTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
