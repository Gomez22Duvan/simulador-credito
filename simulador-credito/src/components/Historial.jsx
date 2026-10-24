import { formatearPesos } from "../utils/simulador";

function Historial({ historial, onEliminar }) {
  return (
    <div className="tarjeta">
      <h2>Historial</h2>

      {historial.length === 0 && <p className="vacio">Aún no hay simulaciones</p>}

      {historial.map((item) => (
        <div key={item.id} className="fila">
          <span>
            {formatearPesos(item.monto)} · {item.plazo} meses · cuota {formatearPesos(item.cuota)}
          </span>
          <button onClick={() => onEliminar(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default Historial;