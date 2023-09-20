import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

type AppName = {
	name: string;
};

// type DataContextValue = {
// 	value: string;
// 	setValue: React.Dispatch<React.SetStateAction<string>>;
// };

const NavBar = ({ name }: AppName) => {
	const { setValue } = useContext(DataContext);
	const [search, setSearch] = useState("");
	console.log(search);

	const handleSearch = async () => {
		if (search !== "") {
			try {
				const response = await axios.get(
					`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
				);
				console.log(response.data);
				setValue(response.data);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const { isLoading, data } = useQuery(["search"], handleSearch);

	console.log(isLoading, data);

	return (
		<div className="navbar bg-[#0B66C3] p-5 text-white">
			<div className="section flex justify-between font">
				<div className="NavBar font-normal">{name}</div>
				<input
					type="text"
					className="rounded-md w-[300px] h-7 text-black p-2"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<span className="material-symbols-outlined hover:bg-[#e4e4e485] hover:rounded-lg flex items-center justify-center cursor-pointer">
					expand_more
				</span>
			</div>
			<div className="body"></div>
		</div>
	);
};

export default NavBar;
