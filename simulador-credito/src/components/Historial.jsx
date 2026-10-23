import { formatearPesos } from "../utils/simulador";

function Historial({ historial, onEliminar }) {
  return (
    <div>
      <h2>Historial</h2>
      {historial.map((item) => (
        <div key={item.id} className="fila">
          <span>
            {formatearPesos(item.monto)} - {item.plazo} meses - cuota {formatearPesos(item.cuota)}
          </span>
          <button onClick={() => onEliminar(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default Historial;