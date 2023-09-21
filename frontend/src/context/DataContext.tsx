import {
	createContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from "react";

type DataItemType = {
	data: any;
	// index: number;
};

export type DataContextValue = {
	value: DataItemType;
	setValue: Dispatch<SetStateAction<DataItemType>>;
};

export const DataContext = createContext<Partial<DataContextValue>>({});

type DataContextProviderProps = {
	children: ReactNode;
};

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
	const [value, setValue] = useState<DataItemType>({ data: [] });
	return (
		<DataContext.Provider value={{ value, setValue }}>
			{children}
		</DataContext.Provider>
	);
};
