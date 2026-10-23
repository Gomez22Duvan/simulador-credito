export function calcularCuota(monto, plazo) {
  const i = 0.018;
  return monto * (i / (1 - Math.pow(1 + i, -plazo)));
}

export function formatearPesos(valor) {
  return "$ " + Math.round(valor).toLocaleString("es-CO");
}