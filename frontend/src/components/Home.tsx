import { useContext } from "react";
import { DataContext } from "../context/DataContext";

type DataItemType = {
	data: any;
	// index: number;
};

const Home = () => {
	const { value } = useContext(DataContext);
	console.log(value);
	if (!value) {
		// If value is not available yet, return loading or null
		return <div>Loading...</div>;
	}
	return (
		<div className="home">
			<div className="section">
				{value && value.data ? (
					value.data.map((data: DataItemType, index: number) => (
						<div key={index}>
							<div className="text-black">
								{data.data && data.data[0] && Array.isArray(data.data[0])
									? data.data[0][0] && data.data[0][0].meanings
										? data.data[0][0].meanings[0] &&
										  data.data[0][0].meanings[0].definitions
											? data.data[0][0].meanings[0].definitions[0]
												? data.data[0][0].meanings[0].definitions[0].definition
												: "No definition available"
											: "No meanings available"
										: "No meanings available"
									: "No data available"}
							</div>
						</div>
					))
				) : (
					<div> No data available</div>
				)}
			</div>
		</div>
	);
};

export default Home;
