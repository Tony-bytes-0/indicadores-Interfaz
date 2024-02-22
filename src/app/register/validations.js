export function isDateNotInFuture(inputDate) {
  // Parse the input date to a Date object
  const inputDateObj = new Date(inputDate);
  console.log("dentro de validations!!!!!!!!!!!!!!!!!!!");
  // Get the current date
  const currentDate = new Date();
  // Set the time of the current date to  00:00:00 to compare only the date part
  currentDate.setHours(0, 0, 0, 0);
  // Compare the input date with the current date
  return inputDateObj <= currentDate;
}
const bloodList = [
  "A+",
  "B+",
  "AB+",
  "O+",
  "A-",
  "B-",
  "AB-",
  "O-",
  "Desconocido",
];

export { bloodList };
