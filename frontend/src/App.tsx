import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<NavBar name="diktion" />
				{/* <div className="m-5"></div> */}
				<Home />
			</QueryClientProvider>
		</>
	);
}

export default App;
