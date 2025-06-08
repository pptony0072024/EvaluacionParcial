import { useSemaforo } from "../context/SemaforoContext";

export function LucesSemaforo() {
  const { color } = useSemaforo();

  const getOpacity = (current: string) => (color === current ? "opacity-100" : "opacity-30");

  return (
    <>
      <div className="flex flex-col items-center gap-4 my-6">
        <div className={`w-24 h-24 bg-red-500 rounded-full ${getOpacity("rojo")}`}></div>
        <div className={`w-24 h-24 bg-yellow-400 rounded-full ${getOpacity("amarillo")}`}></div>
        <div className={`w-24 h-24 bg-green-500 rounded-full ${getOpacity("verde")}`}></div>
      </div>
    </>
  );
}
