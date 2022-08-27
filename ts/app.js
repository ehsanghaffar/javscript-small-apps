const logger = (a: Number) => {
  if (typeof a === "string") {
    return console.log("type Error");
  }
  return console.log(a);
};

logger("sdas");
