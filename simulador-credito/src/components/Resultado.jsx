import { formatearPesos } from "../utils/simulador";

function Resultado({ resultado }) {
  if (resultado === null) {
    return null;
  }

  const superaCapacidad = resultado.cuota > resultado.ingresos * 0.4;

  return (
    <div>
      <h2>Resultado</h2>
      <p>Cuota mensual: {formatearPesos(resultado.cuota)}</p>
      <p>Total a pagar: {formatearPesos(resultado.cuota * resultado.plazo)}</p>

      {superaCapacidad ? (
        <p className="rojo">La cuota supera tu capacidad de pago</p>
      ) : (
        <p className="verde">Puedes solicitar este crédito</p>
      )}
    </div>
  );
}

export default Resultado;