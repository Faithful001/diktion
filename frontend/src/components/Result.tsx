import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useTheme } from "../context/ThemeContext";

const Result = () => {
	const { theme } = useTheme();
	const {
		value,
		notValue,
		// setValue = () => {},
		// setNotValue = () => {},
	} = useContext(DataContext);
	console.log("Main value", value);
	console.log("Main error", notValue);

	// useEffect(() => {
	// 	if (value?.data.length > 0) {
	// 		setNotValue({ error: [] });
	// 	} else if (notValue?.error.length === 0) {
	// 		setValue({ data: [] });
	// 	}
	// }, []);

	const data = value?.data[0]; // I want just the first result]
	const word = data?.word?.toUpperCase();

	return (
		<div
			className={`home ${
				theme ? "bg-[#202020]" : "bg-[#e7e7e7]"
			} text-[#d8d8d8] h-[100vh]`}
		>
			{value?.data.length > 0 ? (
				<div className="section p-5 pt-10">
					<div className="word font-bold text-3xl text-[#3679bd]">{word}</div>
					<div className="word text-[#3679bd] mb-5">{data?.phonetic}</div>

					{data?.phonetics && data?.phonetics.length > 2 && (
						<div className="phonetics mb-5">
							{/* <div className="phonetic-text">{data?.phonetics[2].text}</div> */}
							<audio controls>
								<source src={data.phonetics[2].audio} type="audio/mpeg" />
								Your browser does not support the audio element.
							</audio>
						</div>
					)}
					{data?.meanings &&
						data?.meanings.map((meaning: any, index: number) => (
							<div key={index} className="">
								<div className="part-of-speech text-[#3679bd]">
									{meaning?.partOfSpeech}
								</div>
								{meaning?.definitions.map(
									(element: any, definitionIndex: number) => (
										<div
											className={`${theme ? "text-white" : "text-black"}`}
											key={definitionIndex}
										>
											{element?.definition || "No definition available"}
										</div>
									)
								)}
							</div>
						))}
				</div>
			) : (
				<>
					<div>{notValue?.error?.title}</div>
					<div>{notValue?.error?.message}</div>
				</>
			)}

			{/* {notValue?.error ? (
				<>
					<div>{notValue?.error?.title}</div>
					<div>{notValue?.error?.message}</div>
				</>
			) : (
				<div className="welcome bg-[#202020] h-[100vh] mt-0 text-gray-500 text-2xl font-bold flex items-center justify-center text-center">
					Welcome to The World of Words. <br />
					Dare to search! <br />
				</div>
			)} */}
		</div>
	);
};

export default Result;
