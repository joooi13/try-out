function hello(name) {
  return `Hello, ${name}!`;
}
console.log(hello("World"));

var secret_name = process.env.SECRET_NAME;

if (secret_name === "joooi13") {
  console.log("ok");
} else {
  console.log("else");
}
