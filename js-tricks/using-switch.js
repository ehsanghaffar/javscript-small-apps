/**
 * using switch statements in JavaScript is a good way to avoid repetition
 * @author: Ehsan Ghaffar
 */

/**
 * example of using if statements in JavaScript
 */

if (animal.toLowerCase() === "cat") {
  return "Kitten";
} else if (animal.toLowerCase() == "cattle") {
  return "Calf";
} else if (animal.toLowerCase() === "cheetah") {
  return "Cub";
} else if (animal.toLowerCase() === "dog") {
  return "Pup";
} else {
  return "I don't know that";
}

/**
 * example of using switch statements in JavaScript
 * @param {string} animal - animal name
 * @returns {string} - animal name
 */
switch (animal.toLowerCase()) {
  case "cat":
    return "Kitten";
  case "cattle":
    return "Calf";
  case "cheetah":
    return "Cub";
  case "dog":
    return "Pup";
  default:
    return "I don't know that";
}
Th;
