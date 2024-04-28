import { createContext,useMemo, useState } from 'react';

interface ScaleLogoContext {
	scale: number;
	setScale: (value: number | ((value: number) => number)) => void;
}

export const scaleLogoContext = createContext<ScaleLogoContext>({
	scale: 1,
	setScale: () => {},
});

const ScaleLogoContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, setState] = useState(1);

	const scaleLogoContextProviderValue = useMemo(() => ({ scale: state, setScale: setState }), [state]);

	return <scaleLogoContext.Provider value={scaleLogoContextProviderValue}>{children}</scaleLogoContext.Provider>;
};

export default ScaleLogoContextProvider;
