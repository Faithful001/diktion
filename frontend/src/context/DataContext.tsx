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

type ErrorItemType = {
	error: any;
};

export type DataContextValue = {
	value: DataItemType;
	setValue: Dispatch<SetStateAction<DataItemType>> | undefined;
	notValue: ErrorItemType;
	setNotValue: Dispatch<SetStateAction<ErrorItemType>> | undefined;
};

export const DataContext = createContext<Partial<DataContextValue>>({});

type DataContextProviderProps = {
	children: ReactNode;
};

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
	const [value, setValue] = useState<DataItemType>({ data: [] });
	const [notValue, setNotValue] = useState<ErrorItemType>({ error: [] });
	return (
		<DataContext.Provider value={{ value, setValue, notValue, setNotValue }}>
			{children}
		</DataContext.Provider>
	);
};
