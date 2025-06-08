export function ParteTeorica() {
  return (
    <>
      <div className="my-8 p-4 border rounded-xl shadow">
        <h2 className="text-xl font-bold mb-2">Parte Teórica</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><b>useState</b>: Es un hook que permite manejar el estado en componentes funcionales. Ej: <code>const [count, setCount] = useState(0)</code></li>
          <li><b>Fragmento ({"<>...</>"})</b>: Es una forma de agrupar múltiples elementos JSX sin usar un div adicional.</li>
          <li><b>useContext vs useState</b>: useState se usa para manejar estado local, useContext permite compartir estado global entre componentes.</li>
          <li><b>Estructura básica</b>: <code>function MiComponente() { return &lt;div&gt;Hola&lt;/div&gt;; }</code></li>
        </ol>
      </div>
    </>
  );
}
