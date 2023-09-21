import { useContext } from "react";
import { DataContext } from "../context/DataContext";

type DataItemType = {
	data: any;
	// index: number;
};

const Home = () => {
	const { value } = useContext(DataContext);
	console.log(value);
	return (
		<div className="home">
			<div className="section">
				{value &&
					value.data.map((data: DataItemType, index: number) => (
						<div key={index}>
							<div className="text-black">{data.data.meanings}</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Home;
