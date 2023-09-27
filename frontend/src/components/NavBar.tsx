import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

type AppName = {
	name: string;
};

// type DataContextValue = {
// 	value: string;
// 	setValue: React.Dispatch<React.SetStateAction<string>>;
// };

const NavBar = ({ name }: AppName) => {
	const { setValue = () => {}, setNotValue = () => {} } =
		useContext(DataContext);
	const [search, setSearch] = useState<string>("");
	console.log(search);
	const navigate = useNavigate();

	const handleSearch = async () => {
		if (search !== "") {
			try {
				const response = await axios.get(
					`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
				);
				console.log(response.data);

				if (setValue) setValue({ data: response.data });
			} catch (error: any) {
				if (setNotValue) setNotValue({ error: error.response.data });
				console.log(error.response.data);
			}
		}
	};

	const { isLoading, data } = useQuery(["search"], handleSearch, {
		enabled: Boolean(setValue),
	});
	console.log(isLoading, data);

	const handleFormSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleSearch();
		navigate("/result");
	};

	const handleSpanSearch = (
		e: React.MouseEvent<HTMLSpanElement, MouseEvent>
	) => {
		e.preventDefault();
		handleFormSearch(e as any);
		navigate("/result");
	};

	const emptyObject = () => {
		setValue({ data: [] });
		setNotValue({ error: [] });
		navigate("/");
	};
	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	return (
		<div className="navbar bg-[#0B66C3] p-5 text-white">
			<div className="section flex justify-between font">
				<div
					className="NavBar font-bold mt-2 cursor-pointer"
					onClick={emptyObject}
				>
					{name}
				</div>
				<form onSubmit={handleFormSearch}>
					<input
						type="text"
						className="rounded-md w-[300px] h-10 text-white p-2 bg-[#2a5683]"
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search for a word fella"
					/>
					<span
						className="material-symbols-outlined relative right-10 top-[6px] p-2 hover:cursor-pointer rounded-md hover:bg-[#e4e4e42c] "
						onClick={handleSpanSearch}
					>
						search
					</span>
				</form>
				<span className="material-symbols-outlined hover:bg-[#e4e4e485] p-2 rounded-lg flex items-center justify-center cursor-pointer">
					expand_more
				</span>
			</div>
			<div className="body"></div>
		</div>
	);
};

export default NavBar;
