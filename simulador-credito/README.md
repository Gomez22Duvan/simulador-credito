## Simulador de crédito

Aplicación hecha con React y Vite (JavaScript) que simula un crédito de consumo. El usuario ingresa monto, plazo e ingresos mensuales y ve la cuota mensual y el total a pagar.

## Cómo instalar y ejecutar

1. Instalar las dependencias:

```bash
npm install
```

2. Iniciar la aplicación:

```bash
npm run dev
```

3. Abrir en el navegador la dirección que muestra la terminal (normalmente http://localhost:5173).

## Estructura del proyecto

- `src/utils/simulador.js`: función que calcula la cuota y función que da formato de pesos colombianos.
- `src/components/FormularioSimulacion.jsx`: formulario con las validaciones.
- `src/components/Resultado.jsx`: muestra la cuota, el total y el aviso rojo o verde.
- `src/components/Historial.jsx`: lista de simulaciones con botón para eliminar.
- `src/App.jsx`: guarda el resultado y el historial y conecta los componentes.
- `src/index.css`: estilos propios.

## Decisiones que tomé

- Tasa fija de 1,8 % mensual, como indica el enunciado.
- Los errores se muestran debajo de cada campo y el botón Simular se deshabilita mientras haya errores.
- El historial se guarda solo en el estado de React, por eso se pierde al recargar la página.
- Se usó CSS propio, sin librerías de componentes ni de formularios.
- La pantalla se adapta a celular y a escritorio con un ancho máximo y campos al 100 % del ancho.
- Si el monto o los ingresos se dejan vacíos, se muestra el error y no se puede simular.