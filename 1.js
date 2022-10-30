const celsius = Number.parseInt(prompt("Input temperature in celsius: "));
//let farenheit = (9 / 5) * celsius;
alert(`Celsius degrees: ${celsius} means ${((9 / 5) * celsius + 32).toFixed(2)} Farenheit`);