import { createContext, useState, useContext, ReactNode } from "react";

type Color = "rojo" | "amarillo" | "verde";

interface SemaforoContextType {
  color: Color;
  setColor: (color: Color) => void;
}

const SemaforoContext = createContext<SemaforoContextType | undefined>(undefined);

export function SemaforoProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState<Color>("rojo");
  return (
    <SemaforoContext.Provider value={{ color, setColor }}>
      {children}
    </SemaforoContext.Provider>
  );
}

export function useSemaforo() {
  const context = useContext(SemaforoContext);
  if (!context) throw new Error("useSemaforo must be used within SemaforoProvider");
  return context;
}
