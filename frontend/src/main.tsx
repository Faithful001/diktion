import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { DataContextProvider } from "./context/DataContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<DataContextProvider>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</DataContextProvider>
		</ThemeProvider>
	</React.StrictMode>
);
