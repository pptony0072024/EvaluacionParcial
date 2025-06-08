import { LucesSemaforo } from "./components/LucesSemaforo";
import { BotonesSemaforo } from "./components/BotonesSemaforo";
import { ParteTeorica } from "./components/ParteTeorica";
import { SemaforoProvider } from "./context/SemaforoContext";

function App() {
  return (
    <SemaforoProvider>
      <>
        <h1 className="text-2xl font-bold text-center my-4">Simulador de Semáforo</h1>
        <LucesSemaforo />
        <BotonesSemaforo />
        <ParteTeorica />
      </>
    </SemaforoProvider>
  );
}

export default App;
