let data;

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "function":
    console.log("function!");
    break;
  default:
    console.log("I have no idea!");
    break;
}
