export function calculatePercentages(array) {
  const base = array.reduce((acc, value) => acc + value, 0);
  return array.map((number) => ((number / base) * 100).toFixed(2));
}
export function determinateDotColor(valuesAndRanges) {
  const colorList = { bien: "#63FF60", regular: "#FFC300", mal: "#FF5656" };
  const x = [];
  valuesAndRanges.values.map((e) => {
    if (e <= valuesAndRanges.range.bien) {
      x.push(colorList.bien);
    } else if (e > valuesAndRanges.range.mal) {
      x.push(colorList.mal);
    } else x.push(colorList.regular);
  });
  return x;
}

export const monthLabels = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const graphColors = {
  buena: {
    borderColor: "rgb(53, 162, 235)",
    backgroundColor: "rgba(53, 162, 235, 0.5)",
  },
  regular: {
    borderColor: "rgb(255, 208, 113)",
    backgroundColor: "rgba(255, 227, 113, 0.5)",
  },
  deficiente: {
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  },
};

function fillMonths(data) {
  const todosLosMeses = Array.from({ length: 12 }, (_, i) => (i + 1).toString());

  for (const tipo in data) {
     // Crear un objeto temporal para almacenar los meses ya presentes
     const mesesPresentes = {};
 
     // Iterar sobre los elementos existentes para llenar el objeto temporal
     data[tipo].forEach((item) => {
       mesesPresentes[item.mes] = true;
     });
 
     // Iterar sobre todos los meses del año
     todosLosMeses.forEach((mes) => {
       // Si el mes no está presente en el objeto temporal
       if (!mesesPresentes[mes]) {
         // Agregar el mes con conteo 0
         data[tipo].push({
           mes: mes,
           satisfaccionPaciente: tipo.charAt(0).toUpperCase() + tipo.slice(1), // Convertir el tipo a formato de satisfacción
           conteo: "0",
         });
       }
     });
  }
 }