import { useState } from "react";

function FormularioSimulacion({ onSimular }) {
  const [monto, setMonto] = useState("");
  const [plazo, setPlazo] = useState("");
  const [ingresos, setIngresos] = useState("");

  // Errores: si el campo es válido, queda vacío ""
  let errorMonto = "";
  if (monto < 1000000 || monto > 50000000) {
    errorMonto = "El monto debe estar entre 1.000.000 y 50.000.000";
  }

  let errorPlazo = "";
  if (plazo === "") {
    errorPlazo = "Selecciona un plazo";
  }

  let errorIngresos = "";
  if (ingresos <= 0) {
    errorIngresos = "Los ingresos deben ser mayores que 0";
  }

  const hayErrores = errorMonto || errorPlazo || errorIngresos;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSimular(Number(monto), Number(plazo), Number(ingresos));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Simula tu crédito</h2>

      <label>Monto</label>
      <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
      <p className="error">{errorMonto}</p>

      <label>Plazo</label>
      <select value={plazo} onChange={(e) => setPlazo(e.target.value)}>
        <option value="">Selecciona...</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
        <option value="36">36 meses</option>
        <option value="48">48 meses</option>
        <option value="60">60 meses</option>
      </select>
      <p className="error">{errorPlazo}</p>

      <label>Ingresos mensuales</label>
      <input type="number" value={ingresos} onChange={(e) => setIngresos(e.target.value)} />
      <p className="error">{errorIngresos}</p>

      <button type="submit" disabled={hayErrores}>Simular</button>
    </form>
  );
}

export default FormularioSimulacion;