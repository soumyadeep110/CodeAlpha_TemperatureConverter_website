function convertTemp() {
	// Get the temperature input and units
	var temperature = document.getElementById("temperature").value;
	var unit = document.getElementById("unit").value;
	var convertedUnit = unit === "celsius" ? "fahrenheit" : "celsius";

	// Convert the temperature
	var convertedTemperature = unit === "celsius" ? (temperature * 9/5) + 32 : (temperature - 32) * 5/9;

	// Display the converted temperature and units
	document.getElementById("converted-temperature").value = convertedTemperature.toFixed(2);
	document.getElementById("converted-unit").value = convertedUnit;
}
