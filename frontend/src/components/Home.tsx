import { useTheme } from "../context/ThemeContext";

const Home = () => {
	const { theme } = useTheme();
	console.log(theme);
	// const lightMode = '#e7e7e7';
	// const darkMode = '#202020';
	return (
		<div
			className={`home ${
				theme ? "bg-[#202020]" : "bg-[#e7e7e7]"
			} text-[#d8d8d8] h-[100vh]`}
		>
			<div className="welcome h-[100vh] mt-0 text-gray-500 text-2xl font-bold flex items-center justify-center text-center">
				Welcome to The World of Words. <br />
				Dare to search! <br />
			</div>
		</div>
	);
};

export default Home;
