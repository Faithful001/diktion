import { createContext, useState, ReactNode } from "react";

type DataItemType = {
	data: string;
	// index: number;
};

type DataContextValue = {
	value: DataItemType[];
	setValue: React.Dispatch<React.SetStateAction<DataItemType[]>>;
};

export const DataContext = createContext<DataContextValue>({
	value: [],
	setValue: () => {},
});

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
	const [value, setValue] = useState<DataItemType[]>([]);
	return (
		<DataContext.Provider value={{ value, setValue }}>
			{children}
		</DataContext.Provider>
	);
};
