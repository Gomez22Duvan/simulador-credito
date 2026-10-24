import { formatearPesos } from "../utils/simulador";

function Resultado({ resultado }) {
  if (resultado === null) {
    return null;
  }

  const superaCapacidad = resultado.cuota > resultado.ingresos * 0.4;

  return (
    <div className="tarjeta">
      <h2>Resultado</h2>
      <p className="dato">
        Cuota mensual <strong>{formatearPesos(resultado.cuota)}</strong>
      </p>
      <p className="dato">
        Total a pagar <strong>{formatearPesos(resultado.cuota * resultado.plazo)}</strong>
      </p>

      {superaCapacidad ? (
        <p className="aviso rojo">La cuota supera tu capacidad de pago</p>
      ) : (
        <p className="aviso verde">Puedes solicitar este crédito</p>
      )}
    </div>
  );
}

export default Resultado;