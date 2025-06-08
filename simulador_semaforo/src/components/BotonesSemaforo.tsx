import { useSemaforo } from "../context/SemaforoContext";

export function BotonesSemaforo() {
  const { setColor } = useSemaforo();

  return (
    <>
      <div className="flex justify-center gap-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-xl" onClick={() => setColor("rojo")}>Luz Roja</button>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded-xl" onClick={() => setColor("amarillo")}>Luz Amarilla</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-xl" onClick={() => setColor("verde")}>Luz Verde</button>
      </div>
    </>
  );
}
