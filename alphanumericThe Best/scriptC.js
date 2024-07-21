const alphanumeric = (string) => /^[a-z0-9]+$/i.test(string);

console.log(alphanumeric("Mazinkaiser")); //true
console.log(alphanumeric("&)))(((")); //false
console.log(alphanumeric("PassW0rd")); //true
console.log(
  alphanumeric(`
	
`)
); //false

console.log(alphanumeric("wFu_H1WAwJzG836G8_B0kE0Tau")); //false
console.log(alphanumeric("5nSF95W0q3T604JHk!fB!wQBCZzp")); //false
