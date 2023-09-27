import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./components/NavBar";
import Result from "./components/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<Router>
				<QueryClientProvider client={queryClient}>
					<NavBar name="diktion" />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/result" element={<Result />} />
					</Routes>
				</QueryClientProvider>
			</Router>
		</>
	);
}

export default App;
