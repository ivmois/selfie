import { createContext, useEffect, useState } from 'react';

export const widthDeviceContext = createContext<number | null>(null);

const WidthDeviceContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [widthDevice, setWidthDevice] = useState<number | null>(null);

  useEffect(() => {
    const width = document.body.getBoundingClientRect().width;
    setWidthDevice(width);
  }, []);

  return <widthDeviceContext.Provider value={widthDevice}>{children}</widthDeviceContext.Provider>;
};

export default WidthDeviceContextProvider;
