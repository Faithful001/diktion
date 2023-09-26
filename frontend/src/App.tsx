import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<Router>
				<QueryClientProvider client={queryClient}>
					<NavBar name="diktion" />
					<Routes>
						{/* <div className="m-5"></div> */}
						<Route path="/" element={<Home />} />
					</Routes>
				</QueryClientProvider>
			</Router>
		</>
	);
}

export default App;
