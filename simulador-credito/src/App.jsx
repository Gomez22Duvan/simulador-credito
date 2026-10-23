import { useState } from "react";
import FormularioSimulacion from "./components/FormularioSimulacion";
import Resultado from "./components/Resultado";
import Historial from "./components/Historial";
import { calcularCuota } from "./utils/simulador";

function App() {
  const [resultado, setResultado] = useState(null);
  const [historial, setHistorial] = useState([]);

  const simular = (monto, plazo, ingresos) => {
    const cuota = calcularCuota(monto, plazo);
    const simulacion = { id: Date.now(), monto, plazo, ingresos, cuota };

    setResultado(simulacion);
    setHistorial([...historial, simulacion]);
  };

  const eliminar = (id) => {
    setHistorial(historial.filter((item) => item.id !== id));
  };

  return (
    <div className="contenedor">
      <h1>Simulador de crédito</h1>
      <FormularioSimulacion onSimular={simular} />
      <Resultado resultado={resultado} />
      <Historial historial={historial} onEliminar={eliminar} />
    </div>
  );
}

export default App;